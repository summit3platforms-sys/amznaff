import Link from 'next/link';
import { Category } from '@/data/types';
import { getBestForEachDimension } from '@/lib/bestOf';
import PlaceholderImage from './PlaceholderImage';

// "Best for X" cards — each one is just the real highest-scoring product on
// a real score dimension already in the data layer. Not a hand-picked
// editorial pick; recompute the scores and the card changes.
export default function BestOfGrid({ category }: { category: Category }) {
  const entries = getBestForEachDimension(category, 4);
  if (entries.length === 0) return null;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {entries.map((entry) => (
        <Link
          key={entry.dimensionKey}
          href={`/${category.slug}/${entry.product.slug}`}
          className="card card-hover flex flex-col p-4"
        >
          <span className="pill mb-3 w-fit bg-brand-50 text-brand-700">Best for {entry.dimensionLabel}</span>
          <PlaceholderImage
            label={`${entry.product.brand} ${entry.product.model}`}
            className="aspect-square"
            src={entry.product.images[0]?.url}
          />
          <p className="mt-3 text-sm font-medium text-slate-900">
            {entry.product.brand} {entry.product.model}
          </p>
          <p className="mt-0.5 text-xs text-slate-500">
            {entry.dimensionLabel} score {entry.score}/10 · ${entry.product.price.toFixed(2)}
          </p>
        </Link>
      ))}
    </div>
  );
}
