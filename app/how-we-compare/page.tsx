import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How We Compare Products',
  description: 'The method behind every comparison page, score, and buying recommendation on the site.'
};

export default function HowWeComparePage() {
  return (
    <div className="container-page max-w-2xl py-14">
      <h1 className="text-3xl font-extrabold text-slate-900">How We Compare Products</h1>

      <div className="mt-6 space-y-6 text-slate-600">
        <section>
          <h2 className="mb-2 text-lg font-bold text-slate-900">Structured data first</h2>
          <p>
            Every product is stored as structured data — the same spec fields for every product in a category, so
            comparisons are always apples-to-apples. Nothing about a comparison page is written free-form; all of
            it is generated from that structured record.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-bold text-slate-900">Category scores</h2>
          <p>
            Each category defines a fixed set of score dimensions (for headphones: battery, noise cancelling,
            comfort, sound, calls, travel, gaming, value, durability, and features). Every product in that
            category is scored 0 to 10 on each dimension using the same criteria, so a 9 in one product&apos;s
            battery score means the same thing as a 9 in another&apos;s.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-bold text-slate-900">Overall winner</h2>
          <p>
            The overall winner on a comparison page is the product with the higher average score across all
            dimensions for that category. When the gap is small, we label it a close call explicitly rather than
            overstating the difference.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-bold text-slate-900">Summaries and buying advice</h2>
          <p>
            The written summary, verdict, &ldquo;choose this if&rdquo; reasoning, and FAQs on each comparison page
            are generated directly from the structured specs and scores above — never invented. If two products
            are identical on a spec, the copy says so rather than manufacturing a difference.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-bold text-slate-900">Where affiliate links fit in</h2>
          <p>
            We earn a commission on qualifying purchases through our Amazon links (see our{' '}
            <a href="/affiliate-disclosure" className="text-brand-600 hover:underline">
              Affiliate Disclosure
            </a>
            ). That relationship has no input into the scoring method above — the specs and scores are calculated
            the same way regardless of which product a reader ends up buying.
          </p>
        </section>
      </div>
    </div>
  );
}
