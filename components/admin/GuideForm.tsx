'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Category, Guide } from '@/data/types';

type Props = {
  mode: 'create' | 'edit';
  initial?: Guide;
  categories: Category[];
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default function GuideForm({ mode, initial, categories }: Props) {
  const router = useRouter();
  const [slug, setSlug] = useState(initial?.slug || '');
  const [slugTouched, setSlugTouched] = useState(mode === 'edit');
  const [title, setTitle] = useState(initial?.title || '');
  const [excerpt, setExcerpt] = useState(initial?.excerpt || '');
  const [categorySlug, setCategorySlug] = useState(initial?.categorySlug || categories[0]?.slug || '');
  const [status, setStatus] = useState<Guide['status']>(initial?.status || 'draft');
  const [content, setContent] = useState(initial?.content || '');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleTitleChange(value: string) {
    setTitle(value);
    if (!slugTouched) setSlug(slugify(value));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      const payload = { slug, title, excerpt, categorySlug, status, content };
      const url = mode === 'create' ? '/api/admin/guides' : `/api/admin/guides/${initial!.slug}`;
      const method = mode === 'create' ? 'POST' : 'PUT';
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || `Save failed (${res.status})`);
      }
      router.push('/admin/guides');
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Save failed');
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5 p-6">
      {error && <p className="text-sm text-red-600">{error}</p>}

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">Title</label>
        <input
          required
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
          className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">Slug</label>
        <input
          required
          value={slug}
          onChange={(e) => {
            setSlug(slugify(e.target.value));
            setSlugTouched(true);
          }}
          className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm font-mono"
        />
        <p className="mt-1 text-xs text-slate-400">URL: /guides/{slug || '...'}</p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Category</label>
          <select
            value={categorySlug}
            onChange={(e) => setCategorySlug(e.target.value)}
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
          >
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.pluralName}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as Guide['status'])}
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">Excerpt</label>
        <textarea
          required
          rows={2}
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          Content (Markdown — # / ## headings, blank-line paragraphs, &quot;- &quot; lists, **bold**, *italic*, [text](url) links)
        </label>
        <textarea
          required
          rows={18}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full rounded-xl border border-slate-200 px-3 py-2 font-mono text-sm"
        />
      </div>

      <div className="flex gap-3">
        <button type="submit" disabled={saving} className="btn-primary disabled:opacity-50">
          {saving ? 'Saving…' : mode === 'create' ? 'Create guide' : 'Save changes'}
        </button>
      </div>
    </form>
  );
}
