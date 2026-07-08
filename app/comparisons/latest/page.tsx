import Link from 'next/link';
import type { Metadata } from 'next';
import { getLatestComparisons } from '@/lib/comparisons';
import RelatedLinks from '@/components/RelatedLinks';

export const metadata: Metadata = {
  title: 'Latest Comparisons',
  description: 'Comparisons involving the newest product releases.'
};

export default function LatestComparisonsPage() {
  const pairs = getLatestComparisons(24);

  return (
    <div className="container-page py-12">
      <p className="text-sm text-slate-400">
        <Link href="/comparisons" className="hover:text-brand-600">
          All Comparisons
        </Link>{' '}
        / Latest
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-slate-900">Latest Comparisons</h1>
      <p className="mt-2 max-w-2xl text-slate-500">
        Ranked by the newer product&apos;s release year in each pair, so the most recently launched products
        surface first.
      </p>

      <div className="mt-8">
        <RelatedLinks pairs={pairs} />
      </div>
    </div>
  );
}
