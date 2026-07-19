'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Product } from '@/data/types';

export default function ProductForm({ categorySlug, initial }: { categorySlug: string; initial: Product }) {
  const router = useRouter();
  const [price, setPrice] = useState(String(initial.price));
  const [msrp, setMsrp] = useState(initial.msrp !== undefined ? String(initial.msrp) : '');
  const [shortTagline, setShortTagline] = useState(initial.shortTagline);
  const [pros, setPros] = useState(initial.pros.join('\n'));
  const [cons, setCons] = useState(initial.cons.join('\n'));
  const [imageUrl, setImageUrl] = useState(initial.images[0]?.url || '');
  const [imageAlt, setImageAlt] = useState(initial.images[0]?.alt || `${initial.brand} ${initial.model}`);
  const [rating, setRating] = useState(String(initial.rating));
  const [ratingCount, setRatingCount] = useState(String(initial.ratingCount));
  const [amazonAsin, setAmazonAsin] = useState(initial.amazonAsin);
  const [usAvailable, setUsAvailable] = useState(initial.usAvailable !== false);

  const initialRawJson = JSON.stringify(initial, null, 2);
  const [rawJson, setRawJson] = useState(initialRawJson);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      let payload: Partial<Product>;
      if (rawJson !== initialRawJson) {
        try {
          payload = JSON.parse(rawJson);
        } catch {
          throw new Error('Advanced JSON is not valid — fix the syntax or revert it before saving.');
        }
      } else {
        payload = {
          price: parseFloat(price),
          msrp: msrp.trim() === '' ? undefined : parseFloat(msrp),
          shortTagline,
          pros: pros.split('\n').map((s) => s.trim()).filter(Boolean),
          cons: cons.split('\n').map((s) => s.trim()).filter(Boolean),
          images: imageUrl.trim() ? [{ url: imageUrl.trim(), alt: imageAlt.trim() || `${initial.brand} ${initial.model}` }] : [],
          rating: parseFloat(rating) || 0,
          ratingCount: parseInt(ratingCount, 10) || 0,
          amazonAsin,
          usAvailable
        };
      }

      const res = await fetch(`/api/admin/products/${categorySlug}/${initial.slug}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || `Save failed (${res.status})`);
      }
      router.push('/admin/products');
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
        <p className="text-sm font-semibold text-slate-900">
          {initial.brand} {initial.model}
        </p>
        <p className="text-xs text-slate-400">Slug: {initial.slug} — slug can only be changed via Advanced JSON below.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Price (USD)</label>
          <input
            type="number"
            step="0.01"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">MSRP (optional)</label>
          <input
            type="number"
            step="0.01"
            value={msrp}
            onChange={(e) => setMsrp(e.target.value)}
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
          />
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">Short tagline</label>
        <input
          required
          value={shortTagline}
          onChange={(e) => setShortTagline(e.target.value)}
          className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Pros (one per line)</label>
          <textarea
            rows={5}
            value={pros}
            onChange={(e) => setPros(e.target.value)}
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Cons (one per line)</label>
          <textarea
            rows={5}
            value={cons}
            onChange={(e) => setCons(e.target.value)}
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Image URL</label>
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="/images/products/tv/example.jpg or https://…"
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Image alt text</label>
          <input
            value={imageAlt}
            onChange={(e) => setImageAlt(e.target.value)}
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Rating (0-5)</label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Rating count</label>
          <input
            type="number"
            min="0"
            value={ratingCount}
            onChange={(e) => setRatingCount(e.target.value)}
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Amazon ASIN</label>
          <input
            value={amazonAsin}
            onChange={(e) => setAmazonAsin(e.target.value)}
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm font-mono"
          />
        </div>
      </div>

      <label className="flex items-center gap-2 text-sm text-slate-700">
        <input type="checkbox" checked={usAvailable} onChange={(e) => setUsAvailable(e.target.checked)} />
        Sold on US Amazon
      </label>

      <details
        className="rounded-xl border border-slate-200 p-4"
        open={showAdvanced}
        onToggle={(e) => setShowAdvanced((e.target as HTMLDetailsElement).open)}
      >
        <summary className="cursor-pointer text-sm font-semibold text-slate-700">
          Advanced: edit full product JSON (specs, scores, features, competitors, etc.)
        </summary>
        <p className="mt-2 text-xs text-slate-400">
          If you edit this, it takes priority over the fields above on save — everything (including slug) comes from
          here instead.
        </p>
        <textarea
          rows={20}
          value={rawJson}
          onChange={(e) => setRawJson(e.target.value)}
          className="mt-3 w-full rounded-xl border border-slate-200 px-3 py-2 font-mono text-xs"
        />
      </details>

      <div className="flex gap-3">
        <button type="submit" disabled={saving} className="btn-primary disabled:opacity-50">
          {saving ? 'Saving…' : 'Save changes'}
        </button>
      </div>
    </form>
  );
}
