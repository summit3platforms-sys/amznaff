import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Review Process',
  description: 'How products get added to The Comparison Report and how their data is verified.'
};

export default function ReviewProcessPage() {
  return (
    <div className="container-page max-w-2xl py-14">
      <h1 className="text-3xl font-extrabold text-slate-900">Our Review Process</h1>

      <div className="mt-6 space-y-6 text-slate-600">
        <section>
          <h2 className="mb-2 text-lg font-bold text-slate-900">Where the specs come from</h2>
          <p>
            Every product on this site starts as a structured record: brand, series, model, release year, price,
            and a full spec sheet — battery life, weight, connectivity, and everything else relevant to that
            category. That data comes from manufacturer spec sheets and official retailer listings, not from
            guesswork.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-bold text-slate-900">How scores are calculated</h2>
          <p>
            Category scores (battery, comfort, value, and so on) are calculated from the underlying specs using a
            consistent, documented method per category — see{' '}
            <Link href="/how-we-compare" className="text-brand-600 hover:underline">
              How We Compare Products
            </Link>{' '}
            for the full breakdown. The same method is applied to every product in a category, so scores stay
            comparable across the whole site.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-bold text-slate-900">Keeping data current</h2>
          <p>
            Prices and specs can change after a page is published. If you spot something out of date, use{' '}
            <Link href="/report-incorrect-info" className="text-brand-600 hover:underline">
              Report Incorrect Information
            </Link>{' '}
            and we will verify and correct it.
          </p>
        </section>
      </div>
    </div>
  );
}
