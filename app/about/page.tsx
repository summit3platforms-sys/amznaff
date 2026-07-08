import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Why The Comparison Report exists and how our comparisons are built.'
};

export default function AboutPage() {
  return (
    <div className="container-page max-w-2xl py-14">
      <h1 className="text-3xl font-extrabold text-slate-900">About The Comparison Report</h1>

      <div className="mt-6 space-y-5 text-slate-600">
        <p>
          Most product content online is written to fill a &ldquo;Top 10&rdquo; template, not to answer the one question people
          actually have: <strong className="text-slate-900">which one should I buy?</strong>
        </p>
        <p>
          We do the opposite. Every page on this site starts from a structured spec sheet — battery life, weight,
          drivers, warranty, price — pulled directly from manufacturer data. Comparisons, scores, and buying advice
          are generated from those specs, not from opinion. If two products are close, we say so. If one is
          clearly better for a specific use case, we say that too.
        </p>
        <p>
          We link out to Amazon for purchases and, as an Amazon Associate, earn a commission on qualifying
          purchases made through those links. That relationship never changes what a comparison says — the specs
          are the specs regardless of which product we&apos;d earn more from. See our{' '}
          <a href="/affiliate-disclosure" className="text-brand-600 hover:underline">
            Affiliate Disclosure
          </a>{' '}
          for details.
        </p>
        <p>Questions or spotted an outdated spec? <a href="/contact" className="text-brand-600 hover:underline">Get in touch</a>.</p>
      </div>
    </div>
  );
}
