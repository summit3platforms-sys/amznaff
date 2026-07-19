'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Guide } from '@/data/types';
import { Category } from '@/data/types';

export default function GuidesTable({ guides, categories }: { guides: Guide[]; categories: Category[] }) {
  const router = useRouter();
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [deletingSlug, setDeletingSlug] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return guides
      .filter((g) => categoryFilter === 'all' || g.categorySlug === categoryFilter)
      .filter((g) => statusFilter === 'all' || g.status === statusFilter)
      .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
  }, [guides, categoryFilter, statusFilter]);

  async function handleDelete(slug: string, title: string) {
    if (!confirm(`Delete "${title}"? This commits a live change and cannot be undone from here.`)) return;
    setError(null);
    setDeletingSlug(slug);
    try {
      const res = await fetch(`/api/admin/guides/${slug}`, { method: 'DELETE' });
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
      <div className="flex flex-wrap items-center gap-3">
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
        >
          <option value="all">All categories</option>
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.pluralName}
            </option>
          ))}
        </select>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
        >
          <option value="all">All statuses</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </select>
        <span className="text-sm text-slate-400">{filtered.length} of {guides.length}</span>
      </div>

      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

      <div className="mt-4 card overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="border-b border-slate-100 text-xs uppercase tracking-wide text-slate-400">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Published</th>
              <th className="px-4 py-3">Updated</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((g) => (
              <tr key={g.slug} className="border-b border-slate-50 last:border-0">
                <td className="px-4 py-3 font-medium text-slate-900">{g.title}</td>
                <td className="px-4 py-3 text-slate-500">{g.categorySlug}</td>
                <td className="px-4 py-3">
                  <span
                    className={`pill ${g.status === 'published' ? 'border-winner-200 bg-winner-50 text-winner-700' : ''}`}
                  >
                    {g.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-slate-500">{formatDate(g.publishedAt)}</td>
                <td className="px-4 py-3 text-slate-500">{formatDate(g.updatedAt)}</td>
                <td className="px-4 py-3 text-right">
                  <div className="flex justify-end gap-3">
                    <Link href={`/admin/guides/${g.slug}/edit`} className="font-medium text-brand-600 hover:underline">
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(g.slug, g.title)}
                      disabled={deletingSlug === g.slug}
                      className="font-medium text-red-600 hover:underline disabled:opacity-50"
                    >
                      {deletingSlug === g.slug ? 'Deleting…' : 'Delete'}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-slate-400">
                  No guides match these filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  });
}
