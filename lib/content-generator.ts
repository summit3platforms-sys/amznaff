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

function fmtPrice(n: number): string {
  return `$${n.toFixed(2).replace(/\.00$/, '')}`;
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
      return `On ${dim.label.toLowerCase()}, the ${leader.model} leads (${leader.scores[dim.key]?.toFixed(
        1
      )} vs ${other.scores[dim.key]?.toFixed(1)}/10) — ${dim.description.toLowerCase()}.`;
    })
    .join(' ');

  const summary = `The ${productA.model} and ${productB.model} are both ${productA.releaseYear === productB.releaseYear ? 'current-generation' : 'closely matched'} ${category.name.toLowerCase()}, and ${priceLine}. ${diffSentences} Overall, the ${winner.model} scores ${
    winner.id === productA.id ? scoreA.toFixed(1) : scoreB.toFixed(1)
  }/10 across our ${category.scoreDimensions.length} test categories versus ${
    loser.id === productA.id ? scoreA.toFixed(1) : scoreB.toFixed(1)
  }/10 for the ${loser.model}${
    isClose ? ", though the gap is close enough that your specific use case should decide it" : ''
  }. Below, we break down the full spec sheet, category-by-category scores, and exactly who should buy which one.`;

  // --- Verdict -------------------------------------------------------------
  const verdict = isClose
    ? `This is a close call. The ${winner.model} edges ahead by ${margin.toFixed(
        1
      )} points overall, but the ${loser.model} is still an excellent choice — especially if ${loser.shortTagline.toLowerCase()}`
    : `The ${winner.model} is the stronger all-around pick, beating the ${loser.model} by ${margin.toFixed(
        1
      )} points overall. ${winner.shortTagline}`;

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
  )}/10 here (${dim.description.toLowerCase()}).`;
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
      question: `Which is better for ${dim.label.toLowerCase()}, the ${a.model} or the ${b.model}?`,
      answer: `The ${leader.model} scores higher on ${dim.label.toLowerCase()} (${leader.scores[dim.key]?.toFixed(
        1
      )}/10 vs ${other.scores[dim.key]?.toFixed(1)}/10) — ${dim.description.toLowerCase()}.`
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
            topDifferentiators(a, b, category, 1)[0]?.label.toLowerCase() ?? 'the categories where it scores higher'
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
