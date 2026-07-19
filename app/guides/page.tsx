import type { Metadata } from 'next';
import { getPublishedGuides } from '@/data/guides';
import GuideCard, { GuideCardPlaceholder } from '@/components/GuideCard';

export const metadata: Metadata = {
  title: 'Buying Guides',
  description: 'Plain-language guides to the specs that actually matter when comparing products.'
};

export default function GuidesPage() {
  const guides = getPublishedGuides();
  const placeholderCount = Math.max(0, 4 - guides.length);

  return (
    <div className="container-page py-12">
      <h1 className="text-3xl font-extrabold text-slate-900">Buying Guides</h1>
      <p className="mt-2 max-w-2xl text-slate-500">
        Comparisons show you the numbers. These guides explain what the numbers mean in practice.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {guides.map((g) => (
          <GuideCard key={g.slug} guide={g} />
        ))}
        {Array.from({ length: placeholderCount }).map((_, i) => (
          <GuideCardPlaceholder key={i} label="New guide" />
        ))}
      </div>
    </div>
  );
}
