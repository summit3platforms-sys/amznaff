import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility',
  description: 'Our commitment to an accessible experience on The Comparison Report.'
};

export default function AccessibilityPage() {
  return (
    <div className="container-page max-w-2xl py-14">
      <h1 className="text-3xl font-extrabold text-slate-900">Accessibility</h1>

      <div className="mt-6 space-y-6 text-slate-600">
        <section>
          <p>
            We want this site to be usable by as many people as possible, including people using assistive
            technology such as screen readers or keyboard-only navigation. We build with semantic HTML, keyboard-
            accessible interactive elements, and sufficient color contrast as standard practice across every page.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-bold text-slate-900">Ongoing work</h2>
          <p>
            Accessibility is an ongoing effort rather than a one-time checklist, and we review and improve it as
            the site grows. If you use assistive technology and run into a barrier anywhere on this site, please
            tell us.
          </p>
        </section>
        <section>
          <p>
            Report an accessibility issue through our{' '}
            <a href="/help-center" className="text-brand-600 hover:underline">
              Help Center
            </a>{' '}
            and we will address it.
          </p>
        </section>
      </div>
    </div>
  );
}
