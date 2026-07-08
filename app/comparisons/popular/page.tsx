import Link from 'next/link';
import type { Metadata } from 'next';
import { getPopularComparisons } from '@/lib/comparisons';
import RelatedLinks from '@/components/RelatedLinks';

export const metadata: Metadata = {
  title: 'Popular Comparisons',
  description: 'The comparisons involving the most-reviewed products on Amazon.'
};

export default function PopularComparisonsPage() {
  const pairs = getPopularComparisons(24);

  return (
    <div className="container-page py-12">
      <p className="text-sm text-slate-400">
        <Link href="/comparisons" className="hover:text-brand-600">
          All Comparisons
        </Link>{' '}
        / Popular
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-slate-900">Popular Comparisons</h1>
      <p className="mt-2 max-w-2xl text-slate-500">
        Ranked by combined Amazon rating count of both products in each pair — a proxy for how many people already
        own or reviewed either one.
      </p>

      <div className="mt-8">
        <RelatedLinks pairs={pairs} />
      </div>
    </div>
  );
}
