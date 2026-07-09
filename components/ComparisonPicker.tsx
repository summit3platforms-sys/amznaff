'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Product } from '@/data/types';

export default function ComparisonPicker({ categorySlug, products }: { categorySlug: string; products: Product[] }) {
  const router = useRouter();
  const [aSlug, setASlug] = useState(products[0]?.slug ?? '');
  const [bSlug, setBSlug] = useState(products[1]?.slug ?? '');

  const bOptions = useMemo(() => products.filter((p) => p.slug !== aSlug), [products, aSlug]);

  function handleCompare() {
    if (!aSlug || !bSlug || aSlug === bSlug) return;
    router.push(`/${categorySlug}/${aSlug}/vs/${bSlug}`);
  }

  function handleASlugChange(next: string) {
    setASlug(next);
    if (next === bSlug) {
      const fallback = products.find((p) => p.slug !== next);
      if (fallback) setBSlug(fallback.slug);
    }
  }

  return (
    <div className="glass-card mx-auto flex max-w-xl flex-wrap items-center justify-center gap-2 p-3">
      <select
        value={aSlug}
        onChange={(e) => handleASlugChange(e.target.value)}
        aria-label="First product"
        className="min-w-[180px] flex-1 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900"
      >
        {products.map((p) => (
          <option key={p.slug} value={p.slug}>
            {p.brand} {p.model}
          </option>
        ))}
      </select>
      <span className="text-sm font-medium text-slate-400">vs</span>
      <select
        value={bSlug}
        onChange={(e) => setBSlug(e.target.value)}
        aria-label="Second product"
        className="min-w-[180px] flex-1 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900"
      >
        {bOptions.map((p) => (
          <option key={p.slug} value={p.slug}>
            {p.brand} {p.model}
          </option>
        ))}
      </select>
      <button type="button" onClick={handleCompare} className="btn-primary w-full text-sm sm:w-auto">
        Compare
      </button>
    </div>
  );
}
