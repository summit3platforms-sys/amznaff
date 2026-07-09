import { testimonials } from '@/data/testimonials';

// See data/testimonials.ts — placeholder content, added at explicit
// request to fill out the layout. Replace with real testimonials before
// launch.
export default function TestimonialsSection() {
  if (testimonials.length === 0) return null;

  return (
    <section className="py-12">
      <h2 className="mb-6 text-xl font-semibold text-slate-900">What our users say</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {testimonials.map((t) => (
          <div key={t.name} className="card flex flex-col p-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-brand-200">
              <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.83v-6.83H4.83c0-1.31 1.06-2.37 2.34-2.37V6zm10 0A5.17 5.17 0 0 0 12 11.17V18h6.83v-6.83h-4a2.35 2.35 0 0 1 2.34-2.37V6z" />
            </svg>
            <p className="mt-3 flex-1 text-sm text-slate-600">{t.quote}</p>
            <div className="mt-4">
              <p className="text-sm font-semibold text-slate-900">{t.name}</p>
              <p className="text-xs text-slate-500">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
