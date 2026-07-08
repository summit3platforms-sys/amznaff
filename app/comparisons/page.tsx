import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllComparisonsAcrossCategories } from '@/lib/comparisons';
import RelatedLinks from '@/components/RelatedLinks';

export const metadata: Metadata = {
  title: 'All Comparisons',
  description: 'Every head-to-head product comparison on the site, browsable in one place.'
};

export default function AllComparisonsPage() {
  const pairs = getAllComparisonsAcrossCategories();

  return (
    <div className="container-page py-12">
      <h1 className="text-3xl font-extrabold text-slate-900">All Comparisons</h1>
      <p className="mt-2 max-w-2xl text-slate-500">{pairs.length} comparisons and counting.</p>

      <div className="mt-6 flex flex-wrap gap-2">
        <Link href="/comparisons/popular" className="pill hover:bg-slate-200">
          Popular
        </Link>
        <Link href="/comparisons/latest" className="pill hover:bg-slate-200">
          Latest
        </Link>
        <Link href="/comparisons/editors-picks" className="pill hover:bg-slate-200">
          Editor&apos;s Picks
        </Link>
      </div>

      <div className="mt-8">
        <RelatedLinks pairs={pairs} />
      </div>
    </div>
  );
}
