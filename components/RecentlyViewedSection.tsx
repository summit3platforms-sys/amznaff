'use client';

import { useEffect, useState } from 'react';
import { getRecentlyViewed, RecentlyViewedItem } from '@/lib/recentlyViewed';
import { getProductBySlug } from '@/lib/products';
import ProductCard from './ProductCard';

// Reads the same localStorage key that RecentlyViewedTracker writes to.
// Renders nothing until there's real browsing history in this browser —
// no fake "recently viewed" seed data.
export default function RecentlyViewedSection() {
  const [items, setItems] = useState<RecentlyViewedItem[]>([]);

  useEffect(() => {
    setItems(getRecentlyViewed());
  }, []);

  if (items.length === 0) return null;

  const products = items
    .map((i) => getProductBySlug(i.categorySlug, i.slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  if (products.length === 0) return null;

  return (
    <section className="py-12">
      <h2 className="mb-6 text-xl font-semibold text-slate-900">Recently viewed</h2>
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
