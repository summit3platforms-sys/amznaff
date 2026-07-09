import Link from 'next/link';
import { Product } from '@/data/types';
import PlaceholderImage from './PlaceholderImage';

export default function ProductCard({ product, competitorSlug }: { product: Product; competitorSlug?: string }) {
  const href = competitorSlug
    ? `/${product.categorySlug}/${product.slug}/vs/${competitorSlug}`
    : `/${product.categorySlug}/${product.slug}`;

  const hasDeal = typeof product.msrp === 'number' && product.msrp > product.price;

  return (
    <Link href={href} className="card card-hover group relative flex flex-col p-3">
      {hasDeal && (
        <span className="absolute left-5 top-5 z-10 rounded-full bg-deal-500 px-2.5 py-1 text-[11px] font-semibold text-white shadow-soft">
          Deal
        </span>
      )}
      <PlaceholderImage label={`${product.brand} ${product.model}`} className="aspect-square" />
      <p className="mt-3 text-sm font-medium text-slate-900 group-hover:text-brand-600">
        {product.brand} {product.model}
      </p>
      <p className="mt-0.5 text-xs text-slate-500">
        {hasDeal ? (
          <>
            <span className="font-semibold text-deal-600">${product.price.toFixed(2)}</span>{' '}
            <span className="text-slate-400 line-through">${product.msrp!.toFixed(2)}</span>
          </>
        ) : (
          `$${product.price.toFixed(2)}`
        )}{' '}
        · ★ {product.rating.toFixed(1)}
      </p>
    </Link>
  );
}
