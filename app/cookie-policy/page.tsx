import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'How The Comparison Report uses cookies.'
};

export default function CookiePolicyPage() {
  return (
    <div className="container-page max-w-2xl py-14">
      <h1 className="text-3xl font-extrabold text-slate-900">Cookie Policy</h1>
      <p className="mt-2 text-sm text-slate-400">
        Last updated:{' '}
        {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </p>

      <div className="mt-6 space-y-6 text-slate-600">
        <section>
          <h2 className="mb-2 text-lg font-bold text-slate-900">What cookies we use</h2>
          <p>
            This site may use a small number of cookies for two purposes: basic analytics (understanding which
            pages are useful) and affiliate tracking (so Amazon can attribute a purchase to a link on this site).
            We do not use cookies for third-party advertising or to build a profile of you for sale to other
            companies.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-bold text-slate-900">Amazon affiliate cookies</h2>
          <p>
            When you click a link to Amazon, Amazon sets its own cookie to track that the visit came from this
            site, for commission purposes. That cookie is controlled by Amazon, not us, and is covered by
            Amazon&apos;s own privacy policy once you land on their site.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-bold text-slate-900">Managing cookies</h2>
          <p>
            Most browsers let you block or delete cookies in their settings. Blocking cookies will not prevent you
            from browsing comparisons, but may affect how purchases are attributed if you use an affiliate link.
          </p>
        </section>
      </div>
    </div>
  );
}
