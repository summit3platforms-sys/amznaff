import Link from 'next/link';
import { Product } from '@/data/types';

export default function ProductCard({ product, competitorSlug }: { product: Product; competitorSlug?: string }) {
  const href = competitorSlug
    ? `/${product.categorySlug}/${product.slug}/vs/${competitorSlug}`
    : `/${product.categorySlug}/${product.slug}`;

  return (
    <Link href={href} className="card group flex flex-col overflow-hidden transition hover:shadow-lg">
      <div className="flex aspect-square items-center justify-center bg-slate-100 text-slate-300">
        <span className="text-xs">Image</span>
      </div>
      <div className="flex flex-1 flex-col gap-1 p-4">
        <span className="text-xs font-medium uppercase tracking-wide text-slate-400">{product.brand}</span>
        <h3 className="font-semibold text-slate-900 group-hover:text-brand-600">{product.model}</h3>
        <p className="line-clamp-2 text-sm text-slate-500">{product.shortTagline}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-bold text-slate-900">${product.price.toFixed(2)}</span>
          <span className="text-xs text-slate-400">★ {product.rating.toFixed(1)} ({product.ratingCount.toLocaleString()})</span>
        </div>
      </div>
    </Link>
  );
}
