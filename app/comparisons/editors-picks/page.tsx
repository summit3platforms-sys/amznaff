import Link from 'next/link';
import type { Metadata } from 'next';
import { getEditorsPicks } from '@/lib/comparisons';
import RelatedLinks from '@/components/RelatedLinks';

export const metadata: Metadata = {
  title: "Editor's Picks",
  description: 'Comparisons with the clearest, most decisive winner.'
};

export default function EditorsPicksPage() {
  const pairs = getEditorsPicks(24);

  return (
    <div className="container-page py-12">
      <p className="text-sm text-slate-400">
        <Link href="/comparisons" className="hover:text-brand-600">
          All Comparisons
        </Link>{' '}
        / Editor&apos;s Picks
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-slate-900">Editor&apos;s Picks</h1>
      <p className="mt-2 max-w-2xl text-slate-500">
        Ranked by score gap — these are the comparisons where the data points to a clear, decisive winner rather
        than a close call.
      </p>

      <div className="mt-8">
        <RelatedLinks pairs={pairs} />
      </div>
    </div>
  );
}
