'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Category, Product } from '@/data/types';

export default function ProductsTable({
  categories,
  productsByCategory
}: {
  categories: Category[];
  productsByCategory: Record<string, Product[]>;
}) {
  const router = useRouter();
  const [categoryFilter, setCategoryFilter] = useState(categories[0]?.slug || 'all');
  const [deletingSlug, setDeletingSlug] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const products = useMemo(() => {
    return [...(productsByCategory[categoryFilter] || [])].sort((a, b) => b.releaseYear - a.releaseYear);
  }, [productsByCategory, categoryFilter]);

  async function handleDelete(slug: string, label: string) {
    if (!confirm(`Delete "${label}"? This commits a live change and cannot be undone from here.`)) return;
    setError(null);
    setDeletingSlug(slug);
    try {
      const res = await fetch(`/api/admin/products/${categoryFilter}/${slug}`, { method: 'DELETE' });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || `Delete failed (${res.status})`);
      }
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Delete failed');
    } finally {
      setDeletingSlug(null);
    }
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c.slug}
            onClick={() => setCategoryFilter(c.slug)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
              categoryFilter === c.slug
                ? 'border-brand-600 bg-brand-600 text-white'
                : 'border-slate-200 text-slate-600 hover:border-slate-300'
            }`}
          >
            {c.pluralName} ({(productsByCategory[c.slug] || []).length})
          </button>
        ))}
      </div>

      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

      <div className="mt-4 card overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="border-b border-slate-100 text-xs uppercase tracking-wide text-slate-400">
            <tr>
              <th className="px-4 py-3">Product</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Release Year</th>
              <th className="px-4 py-3">US Available</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.slug} className="border-b border-slate-50 last:border-0">
                <td className="px-4 py-3 font-medium text-slate-900">
                  {p.brand} {p.model}
                </td>
                <td className="px-4 py-3 text-slate-500">${p.price.toFixed(2)}</td>
                <td className="px-4 py-3 text-slate-500">{p.releaseYear}</td>
                <td className="px-4 py-3 text-slate-500">{p.usAvailable === false ? 'No' : 'Yes'}</td>
                <td className="px-4 py-3 text-right">
                  <div className="flex justify-end gap-3">
                    <Link
                      href={`/admin/products/${categoryFilter}/${p.slug}/edit`}
                      className="font-medium text-brand-600 hover:underline"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(p.slug, `${p.brand} ${p.model}`)}
                      disabled={deletingSlug === p.slug}
                      className="font-medium text-red-600 hover:underline disabled:opacity-50"
                    >
                      {deletingSlug === p.slug ? 'Deleting…' : 'Delete'}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-slate-400">
                  No products in this category yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
