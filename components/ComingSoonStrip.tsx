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
    <div className="flex flex-wrap items-center gap-3">
      <p className="text-sm text-slate-500">Coming soon: {upcoming}</p>
      {submitted ? (
        <p className="ml-auto text-sm text-slate-500">Thanks — we will let you know.</p>
      ) : (
        <form onSubmit={handleSubmit} className="ml-auto flex gap-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            aria-label="Email address"
            className="w-48 rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
          />
          <button type="submit" className="btn-secondary !px-4 !py-2 text-sm">
            Get notified
          </button>
        </form>
      )}
    </div>
  );
}
