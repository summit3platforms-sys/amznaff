'use client';

import { useState, FormEvent } from 'react';
import { categoryGroups } from '@/data/categoryGroups';

// NOTE: this form is not wired to a real email service yet. It shows a
// confirmation on submit but does not persist or send anywhere — connect
// a provider (e.g. an API route + database, or Mailchimp/ConvertKit)
// before relying on it to actually capture signups.
export default function ComingSoonStrip() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const upcoming = categoryGroups
    .filter((g) => g.name !== 'Audio')
    .slice(0, 4)
    .map((g) => g.name)
    .join(', ');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section className="py-12">
      <div className="section-gradient card relative overflow-hidden p-8 text-center sm:p-14">
        <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-brand-100 opacity-50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-winner-50 opacity-60 blur-3xl" />

        <div className="relative mx-auto max-w-lg">
          <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-soft mx-auto">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 6 12 13 2 6" />
            </svg>
          </span>

          <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">Stay updated</h2>
          <p className="mt-2 text-sm text-slate-500">
            Get notified as new categories and comparisons go live — starting with {upcoming}.
          </p>

          {submitted ? (
            <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-winner-50 px-4 py-2 text-sm font-medium text-winner-600">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m5 12 5 5 9-10" />
              </svg>
              Thanks — we&apos;ll let you know.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mx-auto mt-6 flex max-w-sm flex-col gap-2 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                aria-label="Email address"
                className="w-full flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-soft focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
              />
              <button type="submit" className="btn-primary text-sm">
                Get notified
              </button>
            </form>
          )}

          <p className="mt-4 text-xs text-slate-400">No spam — just a heads-up when we launch something new.</p>
        </div>
      </div>
    </section>
  );
}
