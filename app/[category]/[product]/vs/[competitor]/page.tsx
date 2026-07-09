import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { categories as allCategories, getCategory } from '@/data/categories';
import { getAllComparisonPairs, getProductBySlug } from '@/lib/products';
import { determineOverallWinner, overallScore } from '@/lib/scoring';
import { generateComparisonCopy } from '@/lib/content-generator';
import { alternativeComparisons, cheaperAlternative, premiumAlternative } from '@/lib/related';
import WinnerCard from '@/components/WinnerCard';
import SpecTable from '@/components/SpecTable';
import ScoreGrid from '@/components/ScoreGrid';
import RadarChart from '@/components/RadarChart';
import ProsCons from '@/components/ProsCons';
import FaqAccordion from '@/components/FaqAccordion';
import JumpNav from '@/components/JumpNav';
import RelatedLinks from '@/components/RelatedLinks';
import FilterTags from '@/components/FilterTags';
import AmazonButton from '@/components/AmazonButton';
import PlaceholderImage from '@/components/PlaceholderImage';
import RecentlyViewedTracker from '@/components/RecentlyViewedTracker';
import SaveShareBar from '@/components/SaveShareBar';

// At small-to-medium scale, every comparison page is pre-rendered at build
// time (fast, fully static). At the scale described in the product brief
// (hundreds of thousands of pages across many categories), pre-rendering
// everything at build time stops being practical — set dynamicParams=true
// (the default, kept explicit here) so any pair NOT covered by
// generateStaticParams is still rendered on first request and then cached,
// and lower revalidate if you want faster spec/price updates to propagate.
export const dynamicParams = true;
export const revalidate = 86400; // 24h — comparisons rarely need to be fresher than this

export function generateStaticParams() {
  // Generates every product x competitor pairing declared in the data layer —
  // this single function is what turns N products into N x competitors
  // comparison pages automatically as products.ts grows.
  return allCategories.flatMap((category) =>
    getAllComparisonPairs(category.slug).map(({ product, competitor }) => ({
      category: category.slug,
      product: product.slug,
      competitor: competitor.slug
    }))
  );
}

export function generateMetadata({
  params
}: {
  params: { category: string; product: string; competitor: string };
}): Metadata {
  const category = getCategory(params.category);
  const a = category && getProductBySlug(params.category, params.product);
  const b = category && getProductBySlug(params.category, params.competitor);
  if (!category || !a || !b) return {};
  return {
    title: `${a.model} vs ${b.model}: Which Should You Buy?`,
    description: `${a.model} vs ${b.model} compared on battery, noise cancelling, comfort, sound, calls, travel, gaming, and value — full spec breakdown and buying advice.`
  };
}

export default function ComparisonPage({
  params
}: {
  params: { category: string; product: string; competitor: string };
}) {
  const category = getCategory(params.category);
  const a = category && getProductBySlug(params.category, params.product);
  const b = category && getProductBySlug(params.category, params.competitor);
  if (!category || !a || !b) notFound();

  const { winner, margin, isClose } = determineOverallWinner(a, b, category);
  const scoreA = overallScore(a, category);
  const scoreB = overallScore(b, category);
  const copy = generateComparisonCopy(a, b, category);
  const related = alternativeComparisons(a, b, 6);
  const cheaper = cheaperAlternative(scoreA >= scoreB ? b : a);
  const premium = premiumAlternative(scoreA >= scoreB ? a : b);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: copy.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer }
    }))
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <RecentlyViewedTracker categorySlug={category.slug} slug={a.slug} />

      {/* Hero */}
      <section className="section-gradient relative overflow-hidden border-b border-slate-100">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-100 opacity-40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-winner-50 opacity-60 blur-3xl" />
        <div className="container-page relative py-12 sm:py-16">
          <p className="text-sm text-slate-400">
            <Link href={`/${category.slug}`} className="hover:text-brand-600">
              {category.pluralName}
            </Link>{' '}
            / {a.model} vs {b.model}
          </p>

          <div className="mt-6 grid grid-cols-[1fr_auto_1fr] items-center gap-4 sm:gap-8">
            <Link href={`/${category.slug}/${a.slug}`} className="glass-card p-4 text-center transition hover:-translate-y-1">
              <PlaceholderImage label={a.model} className="mx-auto aspect-square w-full max-w-[180px]" />
              <p className="mt-2 font-bold text-slate-900">{a.model}</p>
              <p className="text-sm text-slate-400">${a.price.toFixed(2)}</p>
            </Link>
            <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-extrabold text-white shadow-premium sm:h-14 sm:w-14">
              VS
            </span>
            <Link href={`/${category.slug}/${b.slug}`} className="glass-card p-4 text-center transition hover:-translate-y-1">
              <PlaceholderImage label={b.model} className="mx-auto aspect-square w-full max-w-[180px]" />
              <p className="mt-2 font-bold text-slate-900">{b.model}</p>
              <p className="text-sm text-slate-400">${b.price.toFixed(2)}</p>
            </Link>
          </div>

          <h1 className="mt-8 text-center text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            {a.model} vs {b.model}
          </h1>

          <div className="mt-4">
            <SaveShareBar href={`/${category.slug}/${a.slug}/vs/${b.slug}`} title={`${a.model} vs ${b.model}`} />
          </div>

          <div className="mt-6">
            <WinnerCard winner={winner} margin={margin} isClose={isClose} />
          </div>
        </div>
      </section>

      <div className="container-page py-12">
      <div className="mt-2">
        <JumpNav />
      </div>

      {/* Quick verdict */}
      <section id="summary" className="scroll-mt-24">
        <h2 className="mb-3 text-xl font-bold text-slate-900">Quick Verdict</h2>
        <p className="text-slate-600">{copy.verdict}</p>
        <p className="mt-3 text-slate-600">{copy.summary}</p>
      </section>

      {/* Spec table */}
      <section id="specs" className="mt-14 scroll-mt-24">
        <h2 className="mb-4 text-xl font-bold text-slate-900">Side-by-Side Comparison</h2>
        <SpecTable a={a} b={b} category={category} />
      </section>

      {/* Scores + radar */}
      <section id="scores" className="mt-14 scroll-mt-24">
        <h2 className="mb-4 text-xl font-bold text-slate-900">Category Scores</h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
          <ScoreGrid a={a} b={b} category={category} />
          <RadarChart a={a} b={b} category={category} />
        </div>
      </section>

      {/* Deep-dive sections addressing every search intent on one page */}
      <section id="battery" className="mt-14 scroll-mt-24">
        <h2 className="mb-3 text-xl font-bold text-slate-900">Battery Life</h2>
        <p className="text-slate-600">
          The {a.model} is rated for up to {String(a.specs.battery)} hours with ANC on
          {a.specs.batteryAncOff ? ` (${String(a.specs.batteryAncOff)} hours with ANC off)` : ''}, while the{' '}
          {b.model} is rated for up to {String(b.specs.battery)} hours with ANC on
          {b.specs.batteryAncOff ? ` (${String(b.specs.batteryAncOff)} hours with ANC off)` : ''}. Quick charge gets
          the {a.model} roughly 3 hours of playback from a {String(a.specs.quickCharge)}-minute top-up, versus a{' '}
          {String(b.specs.quickCharge)}-minute top-up for the {b.model}.
        </p>
      </section>

      <section id="anc" className="mt-10 scroll-mt-24">
        <h2 className="mb-3 text-xl font-bold text-slate-900">Noise Cancelling</h2>
        <p className="text-slate-600">
          On our noise cancelling score, the {a.model} rates {a.scores.anc?.toFixed(1)}/10 versus{' '}
          {b.scores.anc?.toFixed(1)}/10 for the {b.model}. {winner.model} carries the ANC edge overall in this
          matchup based on the combined scoring above — see the Scores section for the full category breakdown.
        </p>
      </section>

      <section id="comfort" className="mt-10 scroll-mt-24">
        <h2 className="mb-3 text-xl font-bold text-slate-900">Comfort</h2>
        <p className="text-slate-600">
          The {a.model} weighs {String(a.specs.weight)}g and scores {a.scores.comfort?.toFixed(1)}/10 for comfort;
          the {b.model} weighs {String(b.specs.weight)}g and scores {b.scores.comfort?.toFixed(1)}/10. Lighter
          weight generally means less clamp fatigue over multi-hour sessions.
        </p>
      </section>

      <section id="sound" className="mt-10 scroll-mt-24">
        <h2 className="mb-3 text-xl font-bold text-slate-900">Sound Quality</h2>
        <p className="text-slate-600">
          Sound quality scores: {a.model} {a.scores.sound?.toFixed(1)}/10, {b.model} {b.scores.sound?.toFixed(1)}
          /10. Driver size is {String(a.specs.driverSize)}mm on the {a.model} versus {String(b.specs.driverSize)}mm
          on the {b.model} — larger drivers don&apos;t guarantee better sound, but they&apos;re one input into tuning.
        </p>
      </section>

      <section id="calls" className="mt-10 scroll-mt-24">
        <h2 className="mb-3 text-xl font-bold text-slate-900">Calls &amp; Microphone</h2>
        <p className="text-slate-600">
          The {a.model} uses a {String(a.specs.micCount)}-microphone array and scores{' '}
          {a.scores.calls?.toFixed(1)}/10 for calls, while the {b.model} uses {String(b.specs.micCount)} microphones
          and scores {b.scores.calls?.toFixed(1)}/10.
        </p>
      </section>

      <section id="travel" className="mt-10 scroll-mt-24">
        <h2 className="mb-3 text-xl font-bold text-slate-900">Travel</h2>
        <p className="text-slate-600">
          For travel we weight battery life, ANC, and foldability together. The {a.model} scores{' '}
          {a.scores.travel?.toFixed(1)}/10 and {String(a.specs.foldable) === 'true' ? 'folds flat' : 'does not fold flat'}; the{' '}
          {b.model} scores {b.scores.travel?.toFixed(1)}/10 and{' '}
          {String(b.specs.foldable) === 'true' ? 'folds flat' : 'does not fold flat'}.
        </p>
      </section>

      <section id="gaming" className="mt-10 scroll-mt-24">
        <h2 className="mb-3 text-xl font-bold text-slate-900">Gaming</h2>
        <p className="text-slate-600">
          Neither model is a dedicated gaming headset, but relative gaming scores are {a.scores.gaming?.toFixed(1)}
          /10 for the {a.model} and {b.scores.gaming?.toFixed(1)}/10 for the {b.model}. For latency-sensitive games,
          a wired connection is recommended for either.
        </p>
      </section>

      {/* Best for */}
      <section id="best-for" className="mt-14 scroll-mt-24">
        <h2 className="mb-4 text-xl font-bold text-slate-900">Best For</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="card p-5">
            <h3 className="mb-2 font-semibold text-slate-900">Choose the {a.model} if…</h3>
            <ul className="space-y-1.5 text-sm text-slate-600">
              {copy.chooseA.map((reason, i) => (
                <li key={i}>• {reason}</li>
              ))}
            </ul>
            <div className="mt-4">
              <AmazonButton product={a} label={`Buy ${a.model}`} />
            </div>
          </div>
          <div className="card p-5">
            <h3 className="mb-2 font-semibold text-slate-900">Choose the {b.model} if…</h3>
            <ul className="space-y-1.5 text-sm text-slate-600">
              {copy.chooseB.map((reason, i) => (
                <li key={i}>• {reason}</li>
              ))}
            </ul>
            <div className="mt-4">
              <AmazonButton product={b} label={`Buy ${b.model}`} />
            </div>
          </div>
        </div>
      </section>

      {/* Pros / Cons */}
      <section className="mt-14">
        <h2 className="mb-4 text-xl font-bold text-slate-900">Pros &amp; Cons</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ProsCons title={a.model} pros={a.pros} cons={a.cons} />
          <ProsCons title={b.model} pros={b.pros} cons={b.cons} />
        </div>
      </section>

      {/* Filters */}
      <section className="mt-14">
        <h2 className="mb-4 text-xl font-bold text-slate-900">Shop by Need</h2>
        <FilterTags categorySlug={category.slug} filters={category.filters} />
      </section>

      {/* FAQs */}
      <section id="faqs" className="mt-14 scroll-mt-24">
        <h2 className="mb-4 text-xl font-bold text-slate-900">FAQs</h2>
        <FaqAccordion faqs={copy.faqs} />
      </section>

      {/* Cheaper / premium */}
      {(cheaper || premium) && (
        <section className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {cheaper && (
            <Link href={`/${category.slug}/${winner.slug}/vs/${cheaper.slug}`} className="card p-5 hover:border-brand-400">
              <p className="text-xs font-semibold uppercase text-slate-400">Cheaper Option</p>
              <p className="mt-1 font-bold text-slate-900">{cheaper.model} — ${cheaper.price.toFixed(2)}</p>
            </Link>
          )}
          {premium && (
            <Link href={`/${category.slug}/${winner.slug}/vs/${premium.slug}`} className="card p-5 hover:border-brand-400">
              <p className="text-xs font-semibold uppercase text-slate-400">Premium Option</p>
              <p className="mt-1 font-bold text-slate-900">{premium.model} — ${premium.price.toFixed(2)}</p>
            </Link>
          )}
        </section>
      )}

      {/* Alternatives */}
      <section id="alternatives" className="mt-14 scroll-mt-24">
        <RelatedLinks title="You May Also Like" pairs={related} />
      </section>
      </div>
    </div>
  );
}
