import { Category, Product, ScoreDimension } from '@/data/types';
import { determineOverallWinner, overallScore, round1 } from './scoring';

// ---------------------------------------------------------------------------
// Deterministic comparison-copy generator.
//
// This is the "AI" layer described in the product brief, implemented as
// pure functions instead of a live LLM call: it reads ONLY the structured
// specs/scores/pros/cons already in data/products/*.ts and assembles
// natural-language copy from them. It never invents a spec, price, or
// claim that isn't present in the data layer. If you later want to swap
// this for a real LLM call (e.g. to vary phrasing further), keep the same
// input contract — { productA, productB, category } in, copy out — and
// feed it the exact same structured facts computed here so quality stays
// grounded in real specs.
// ---------------------------------------------------------------------------

export type ComparisonCopy = {
  summary: string;
  verdict: string;
  chooseA: string[];
  chooseB: string[];
  faqs: { question: string; answer: string }[];
};

export function formatUsd(n: number): string {
  return fmtPrice(n);
}

function fmtPrice(n: number): string {
  // Thousands separators matter once a category reaches four figures — a
  // flagship TV rendered as "$12999.99" reads as a typo.
  const fixed = n.toFixed(2).replace(/\.00$/, '');
  const [whole, decimals] = fixed.split('.');
  const grouped = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return `$${decimals ? `${grouped}.${decimals}` : grouped}`;
}

// Lowercases the first word only when it is safe to do so. Blanket
// .toLowerCase() on an author-written label or description destroys the
// acronyms and brand names that carry the meaning — "HDMI 2.1 port count and
// other I/O" became "hdmi 2.1 port count and other i/o", which reads as
// machine output because it is. A word whose second character onward is not
// already lowercase (HDR, OS, I/O, LG) is left exactly as written.
export function decapitalize(text: string): string {
  const first = text.split(/\s+/)[0] ?? '';
  if (first.length > 1 && first.slice(1) !== first.slice(1).toLowerCase()) return text;
  return text.charAt(0).toLowerCase() + text.slice(1);
}

// Turns a fragment written as a headline (a product tagline, typically) into a
// standalone sentence: leading capital, closing full stop. Taglines are noun
// phrases — splicing one into the middle of another sentence produces the
// ungrammatical run-ons this generator used to emit.
function sentence(text: string): string {
  const trimmed = text.trim();
  if (!trimmed) return '';
  const capped = trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
  return /[.!?]$/.test(capped) ? capped : `${capped}.`;
}

// Deterministic variant selection. Two products always produce the same
// phrasing, but neighbouring pages don't all open with the same sentence.
function variantIndex(a: Product, b: Product, count: number): number {
  const key = `${a.slug}|${b.slug}`;
  let hash = 0;
  for (let i = 0; i < key.length; i++) hash = (hash * 31 + key.charCodeAt(i)) >>> 0;
  return hash % count;
}

function priceDiffPhrase(a: Product, b: Product): string {
  const diff = Math.abs(a.price - b.price);
  if (diff < 5) return `they're priced almost identically (${fmtPrice(a.price)} vs ${fmtPrice(b.price)})`;
  const cheaper = a.price < b.price ? a : b;
  const pricier = a.price < b.price ? b : a;
  return `the ${cheaper.model} is ${fmtPrice(round1(diff))} cheaper than the ${pricier.model} (${fmtPrice(
    cheaper.price
  )} vs ${fmtPrice(pricier.price)})`;
}

function topDifferentiators(a: Product, b: Product, category: Category, count: number): ScoreDimension[] {
  return [...category.scoreDimensions]
    .map((dim) => ({ dim, gap: Math.abs((a.scores[dim.key] ?? 0) - (b.scores[dim.key] ?? 0)) }))
    .sort((x, y) => y.gap - x.gap)
    .slice(0, count)
    .map((x) => x.dim);
}

function leaderOnDimension(a: Product, b: Product, dimKey: string): Product {
  return (a.scores[dimKey] ?? 0) >= (b.scores[dimKey] ?? 0) ? a : b;
}

export function generateComparisonCopy(productA: Product, productB: Product, category: Category): ComparisonCopy {
  const { winner, loser, margin, isClose } = determineOverallWinner(productA, productB, category);
  const scoreA = overallScore(productA, category);
  const scoreB = overallScore(productB, category);
  const diffs = topDifferentiators(productA, productB, category, 3);
  const priceLine = priceDiffPhrase(productA, productB);

  // --- Summary (~150 words) ---------------------------------------------
  const diffSentences = diffs
    .map((dim) => {
      const leader = leaderOnDimension(productA, productB, dim.key);
      const other = leader.id === productA.id ? productB : productA;
      return `On ${dim.label}, the ${leader.model} leads (${leader.scores[dim.key]?.toFixed(
        1
      )} vs ${other.scores[dim.key]?.toFixed(1)}/10) — ${decapitalize(dim.description)}.`;
    })
    .join(' ');

  const summary = `The ${productA.model} and ${productB.model} are both ${productA.releaseYear === productB.releaseYear ? 'current-generation' : 'closely matched'} ${decapitalize(category.name)} models, and ${priceLine}. ${diffSentences} Overall, the ${winner.model} scores ${
    winner.id === productA.id ? scoreA.toFixed(1) : scoreB.toFixed(1)
  }/10 across our ${category.scoreDimensions.length} scoring categories versus ${
    loser.id === productA.id ? scoreA.toFixed(1) : scoreB.toFixed(1)
  }/10 for the ${loser.model}${
    isClose ? ", though the gap is close enough that your specific use case should decide it" : ''
  }. Below, we break down the full spec sheet, category-by-category scores, and exactly who should buy which one.`;

  // --- Verdict -------------------------------------------------------------
  // The tagline is a noun phrase, so it becomes its own sentence rather than a
  // subordinate clause. Three variants per branch, chosen deterministically
  // from the product pair, so a reader moving between comparisons is not read
  // the identical sentence every time.
  const m = margin.toFixed(1);
  const closeVariants = [
    `This is close. The ${winner.model} edges ahead by ${m} points, but that margin is inside the noise — the ${loser.model} is a defensible pick on its own terms. ${sentence(loser.shortTagline)}`,
    `Too close to call on score alone: ${m} points separate them. ${sentence(winner.shortTagline)} The ${loser.model} answers with a different set of strengths, so let the categories below decide it.`,
    `The ${winner.model} wins by ${m} points, which is not enough to settle it. ${sentence(loser.shortTagline)} Pick on the specs that matter to you, not the overall score.`
  ];
  const clearVariants = [
    `The ${winner.model} is the stronger all-round pick, ahead by ${m} points. ${sentence(winner.shortTagline)}`,
    `The ${winner.model} takes this by a clear ${m} points. ${sentence(winner.shortTagline)} The ${loser.model} only makes sense if it wins on a category you care about more than the total.`,
    `A ${m}-point gap makes the ${winner.model} the straightforward choice here. ${sentence(winner.shortTagline)}`
  ];
  const pool = isClose ? closeVariants : clearVariants;
  const verdict = pool[variantIndex(productA, productB, pool.length)];

  // --- Choose A / Choose B --------------------------------------------------
  const chooseA = buildChooseList(productA, productB, category);
  const chooseB = buildChooseList(productB, productA, category);

  // --- FAQs ------------------------------------------------------------------
  const faqs = buildFaqs(productA, productB, category, winner);

  return { summary, verdict, chooseA, chooseB, faqs };
}

function buildChooseList(subject: Product, other: Product, category: Category): string[] {
  const reasons: string[] = [];
  const diffs = topDifferentiators(subject, other, category, 5);

  for (const dim of diffs) {
    const subjectScore = subject.scores[dim.key] ?? 0;
    const otherScore = other.scores[dim.key] ?? 0;
    if (subjectScore > otherScore) {
      reasons.push(dimensionReason(subject, dim));
    }
  }

  if (subject.price < other.price - 5) {
    reasons.push(`You want to spend less — it's ${fmtPrice(round1(other.price - subject.price))} cheaper.`);
  }

  const uniqueUseCases = subject.useCases.filter((uc) => !other.useCases.includes(uc));
  if (uniqueUseCases.length > 0) {
    reasons.push(`Your main use case is ${uniqueUseCases.slice(0, 2).join(' or ')}.`);
  }

  if (reasons.length === 0) {
    reasons.push(`You prefer the ${subject.brand} ecosystem, app, and design language.`);
  }

  return reasons.slice(0, 5);
}

function dimensionReason(product: Product, dim: ScoreDimension): string {
  // Fully generic, driven only by the category's own scoreDimensions (label +
  // description) and the product's scores — works for any category, not just
  // headphones, without needing a hardcoded per-key template map.
  return `${dim.label} matters most to you — the ${product.model} scores ${product.scores[dim.key]?.toFixed(
    1
  )}/10 here (${decapitalize(dim.description)}).`;
}

function buildFaqs(
  a: Product,
  b: Product,
  category: Category,
  winner: Product
): { question: string; answer: string }[] {
  // Fully generic — driven only by category.scoreDimensions, product.scores,
  // product.useCases, and other fields present on every Product regardless
  // of category, so this works unmodified for headphones, TVs, or anything
  // added later without hardcoding category-specific spec keys.
  const faqs: { question: string; answer: string }[] = [];

  faqs.push({
    question: `Is the ${a.model} or ${b.model} better overall?`,
    answer: `Based on our ${category.scoreDimensions.length}-category scoring, the ${winner.model} comes out ahead overall. See the full breakdown in the scores section above — the right pick still depends on which categories matter most for your use case.`
  });

  const diffs = topDifferentiators(a, b, category, 4);
  for (const dim of diffs) {
    const leader = leaderOnDimension(a, b, dim.key);
    const other = leader.id === a.id ? b : a;
    faqs.push({
      question: `Which is better for ${dim.label}, the ${a.model} or the ${b.model}?`,
      answer: `The ${leader.model} scores higher on ${dim.label} (${leader.scores[dim.key]?.toFixed(
        1
      )}/10 vs ${other.scores[dim.key]?.toFixed(1)}/10) — ${decapitalize(dim.description)}.`
    });
  }

  faqs.push({
    question: `Is the ${a.model} worth the price difference over the ${b.model}?`,
    answer:
      a.price === b.price
        ? `They're priced the same (${fmtPrice(a.price)}), so the decision comes down to which specific features and scores matter more to you rather than budget.`
        : `The ${a.price < b.price ? a.model : b.model} is the cheaper option at ${fmtPrice(
            Math.min(a.price, b.price)
          )} versus ${fmtPrice(Math.max(a.price, b.price))}. Whether the pricier model is "worth it" depends on how much you value its lead in ${
            topDifferentiators(a, b, category, 1)[0]?.label ?? 'the categories where it scores higher'
          }.`
  });

  const uniqueUseCasesA = a.useCases.filter((uc) => !b.useCases.includes(uc));
  const uniqueUseCasesB = b.useCases.filter((uc) => !a.useCases.includes(uc));
  if (uniqueUseCasesA.length > 0 || uniqueUseCasesB.length > 0) {
    faqs.push({
      question: `Which is better suited to my use case?`,
      answer: `The ${a.model} is the better fit if you mainly care about ${
        (uniqueUseCasesA.length > 0 ? uniqueUseCasesA : a.useCases).slice(0, 2).join(' or ')
      }. The ${b.model} is the better fit for ${
        (uniqueUseCasesB.length > 0 ? uniqueUseCasesB : b.useCases).slice(0, 2).join(' or ')
      }.`
    });
  }

  faqs.push({
    question: `What's the warranty on the ${a.model} vs the ${b.model}?`,
    answer: `The ${a.model} ships with a ${a.warrantyMonths}-month warranty; the ${b.model} ships with a ${b.warrantyMonths}-month warranty. Always confirm current terms on the manufacturer's site before buying.`
  });

  faqs.push({
    question: `Should I wait for the next model instead of buying either of these?`,
    answer: `If either model is more than two years old, a successor may be close — check the "Latest Model" link on each product page. Otherwise, both are current, well-supported options and there's no strong reason to wait.`
  });

  return faqs;
}

// ---------------------------------------------------------------------------
// Product-page copy.
//
// Product pages shipped with a spec table, a pros/cons list and no prose at
// all — about 285 words including the site footer, on a page whose job is to
// rank for a product name. This builds an opening from facts already in the
// record: where the product sits in its category's price range, the dimension
// it is strongest and weakest on, and who should look elsewhere. No new claims.
// ---------------------------------------------------------------------------

export function generateProductIntro(product: Product, category: Category, categoryProducts: Product[]): string[] {
  const prices = categoryProducts.map((p) => p.price).sort((x, y) => x - y);
  const cheapest = prices[0] ?? product.price;
  const dearest = prices[prices.length - 1] ?? product.price;
  const rank = prices.filter((p) => p < product.price).length;
  const percentile = prices.length > 1 ? rank / (prices.length - 1) : 0.5;

  const position =
    percentile <= 0.25
      ? `sits among the cheapest we cover`
      : percentile >= 0.75
        ? `sits at the premium end of the category`
        : `sits in the middle of the range`;

  const ranked = [...category.scoreDimensions]
    .map((dim) => ({ dim, score: product.scores[dim.key] ?? 0 }))
    .sort((a, b) => b.score - a.score);
  const best = ranked[0];
  const worst = ranked[ranked.length - 1];

  const paragraphs: string[] = [];

  paragraphs.push(
    `${sentence(product.shortTagline)} ` +
      `At ${fmtPrice(product.price)}, ${product.brand}'s ${product.releaseYear} model ${position} — the ` +
      `${decapitalize(category.pluralName)} we compare run from ${fmtPrice(cheapest)} to ${fmtPrice(dearest)}. ` +
      `It scores ${overallScore(product, category).toFixed(1)}/10 overall, calculated from published ` +
      `specifications across ${category.scoreDimensions.length} categories rather than from a subjective impression.`
  );

  if (best && worst && best.dim.key !== worst.dim.key) {
    paragraphs.push(
      `Its strongest showing is ${best.dim.label} at ${best.score.toFixed(1)}/10 — ${decapitalize(best.dim.description)}. ` +
        `The weakest is ${worst.dim.label} at ${worst.score.toFixed(1)}/10, which is the trade-off to weigh before buying: ` +
        `if that is the specification you care about most, one of the alternatives below will serve you better.`
    );
  }

  const cons = product.cons.slice(0, 2);
  if (cons.length) {
    paragraphs.push(
      `Worth knowing before you buy: ${cons.map((c) => decapitalize(c.replace(/\.$/, ''))).join('; and ')}. ` +
        `Every specification on this page comes from ${product.brand}'s own documentation or a verified retail ` +
        `listing — where a figure is not published, the table says so rather than estimating it.`
    );
  }

  return paragraphs;
}

// A product-page meta description that actually fills the ~155 characters
// Google will show. The tagline alone ran to a 78-character median, so every
// product page was giving away half its snippet.
export function generateProductMetaDescription(product: Product, category: Category): string {
  const base = `${product.model}: ${product.shortTagline.replace(/\.$/, '')}`;
  const parts = [base];
  const spec = category.specFields
    .map((field) => ({ field, value: product.specs[field.key] }))
    .find(({ value }) => typeof value === 'number' || (typeof value === 'string' && value.length > 0 && value.length < 40));

  if (spec) {
    parts.push(`${spec.field.label}: ${spec.value}${spec.field.unit ? ` ${spec.field.unit}` : ''}`);
  }
  parts.push(`${fmtPrice(product.price)}, full specs and head-to-head comparisons`);

  let out = parts.join('. ');
  if (out.length > 158) out = `${out.slice(0, 155).replace(/[\s,;—-]+$/, '')}…`;
  return out;
}
