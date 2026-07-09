'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'tcr:saved-comparisons';

type SavedComparison = { href: string; title: string; savedAt: number };

function readSaved(): SavedComparison[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

// Real, no-backend "save" (localStorage) and "share" (native share sheet,
// falling back to copying the URL) — both fully functional, neither
// pretending to be more than client-side browser features.
export default function SaveShareBar({ href, title }: { href: string; title: string }) {
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setSaved(readSaved().some((s) => s.href === href));
  }, [href]);

  function toggleSave() {
    const current = readSaved().filter((s) => s.href !== href);
    if (!saved) {
      current.unshift({ href, title, savedAt: Date.now() });
    }
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(current.slice(0, 30)));
    setSaved(!saved);
  }

  async function share() {
    const url = typeof window !== 'undefined' ? window.location.origin + href : href;
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        // user cancelled or share failed — fall through to clipboard
      }
    }
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <div className="flex items-center justify-center gap-2">
      <button
        type="button"
        onClick={toggleSave}
        className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${
          saved ? 'border-brand-200 bg-brand-50 text-brand-700' : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
        }`}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill={saved ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {saved ? 'Saved' : 'Save'}
      </button>
      <button
        type="button"
        onClick={share}
        className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-slate-50"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <path d="M8.6 13.5l6.8 3.9M15.4 6.6L8.6 10.5" strokeLinecap="round" />
        </svg>
        {copied ? 'Link copied' : 'Share'}
      </button>
    </div>
  );
}
