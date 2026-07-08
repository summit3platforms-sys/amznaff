import Link from 'next/link';
import { Product } from '@/data/types';
import PlaceholderImage from './PlaceholderImage';

export default function ProductCard({ product, competitorSlug }: { product: Product; competitorSlug?: string }) {
  const href = competitorSlug
    ? `/${product.categorySlug}/${product.slug}/vs/${competitorSlug}`
    : `/${product.categorySlug}/${product.slug}`;

  return (
    <Link href={href} className="group flex flex-col">
      <PlaceholderImage label={`${product.brand} ${product.model}`} className="aspect-square" />
      <p className="mt-3 text-sm font-medium text-slate-900 group-hover:text-brand-600">
        {product.brand} {product.model}
      </p>
      <p className="mt-0.5 text-xs text-slate-500">
        ${product.price.toFixed(2)} · ★ {product.rating.toFixed(1)}
      </p>
    </Link>
  );
}
