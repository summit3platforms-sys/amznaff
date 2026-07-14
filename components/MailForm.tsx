'use client';

import { useState, FormEvent } from 'react';

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@yourdomain.com';

export type MailFormField = {
  name: string;
  label: string;
  type: 'text' | 'email' | 'textarea' | 'select';
  required?: boolean;
  placeholder?: string;
  options?: string[];
};

// No backend/database on this site, so this form does something real and
// honest instead of faking a submission: it builds a pre-filled email from
// what you typed and opens your email client to send it. Nothing is stored
// or transmitted by this site itself.
export default function MailForm({
  fields,
  subject,
  submitLabel = 'Send'
}: {
  fields: MailFormField[];
  subject: string;
  submitLabel?: string;
}) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function handleChange(name: string, value: string) {
    setValues((v) => ({ ...v, [name]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const body = fields.map((f) => `${f.label}: ${values[f.name] || '—'}`).join('\n');
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5 p-6 sm:p-8">
      {fields.map((f) => (
        <div key={f.name}>
          <label htmlFor={f.name} className="mb-1.5 block text-sm font-medium text-slate-700">
            {f.label}
            {f.required && <span className="text-deal-600"> *</span>}
          </label>
          {f.type === 'textarea' ? (
            <textarea
              id={f.name}
              required={f.required}
              rows={5}
              placeholder={f.placeholder}
              value={values[f.name] || ''}
              onChange={(e) => handleChange(f.name, e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-soft focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
            />
          ) : f.type === 'select' ? (
            <select
              id={f.name}
              required={f.required}
              value={values[f.name] || ''}
              onChange={(e) => handleChange(f.name, e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-soft focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
            >
              <option value="" disabled>
                Select one
              </option>
              {f.options?.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={f.name}
              type={f.type}
              required={f.required}
              placeholder={f.placeholder}
              value={values[f.name] || ''}
              onChange={(e) => handleChange(f.name, e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-soft focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
            />
          )}
        </div>
      ))}

      <div>
        <button type="submit" className="btn-primary w-full sm:w-auto">
          {submitLabel}
        </button>
        <p className="mt-2 text-xs text-slate-400">
          {sent
            ? "Your email app should be open with this pre-filled — hit send there to reach us."
            : 'Submitting opens your email app with this pre-filled. We read every message personally.'}
        </p>
      </div>
    </form>
  );
}
