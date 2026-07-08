import Link from 'next/link';
import { Product } from '@/data/types';

export default function RelatedLinks({
  title,
  pairs
}: {
  title?: string;
  pairs: Array<{ product: Product; competitor: Product }>;
}) {
  if (pairs.length === 0) return null;
  return (
    <div>
      {title && <h3 className="mb-3 text-lg font-bold text-slate-900">{title}</h3>}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {pairs.map(({ product, competitor }) => (
          <Link
            key={`${product.id}-${competitor.id}`}
            href={`/${product.categorySlug}/${product.slug}/vs/${competitor.slug}`}
            className="card p-4 text-sm font-medium text-slate-700 transition hover:border-brand-400 hover:text-brand-700"
          >
            {product.model} <span className="text-slate-400">vs</span> {competitor.model}
          </Link>
        ))}
      </div>
    </div>
  );
}
