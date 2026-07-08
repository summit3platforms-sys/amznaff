import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for using The Comparison Report.'
};

export default function TermsPage() {
  return (
    <div className="container-page max-w-2xl py-14">
      <h1 className="text-3xl font-extrabold text-slate-900">Terms of Service</h1>
      <p className="mt-2 text-sm text-slate-400">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

      <div className="mt-6 space-y-6 text-slate-600">
        <section>
          <h2 className="mb-2 text-lg font-bold text-slate-900">Use of this site</h2>
          <p>
            Content on this site — comparisons, scores, and buying advice — is provided for informational purposes
            to help you research a purchase decision. It is generated from published manufacturer specifications
            and is not a substitute for verifying current specs and pricing directly with the retailer before
            buying.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-bold text-slate-900">Accuracy</h2>
          <p>
            We aim to keep specs and prices current, but manufacturers and retailers change them without notice.
            Always confirm final price and specifications on the retailer&apos;s page before completing a purchase.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-bold text-slate-900">Affiliate relationships</h2>
          <p>
            As an Amazon Associate we earn from qualifying purchases. See our{' '}
            <a href="/affiliate-disclosure" className="text-brand-600 hover:underline">Affiliate Disclosure</a> for
            details.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-bold text-slate-900">Trademarks</h2>
          <p>
            All product names, logos, and brands mentioned are property of their respective owners. Use of these
            names does not imply endorsement.
          </p>
        </section>
      </div>
    </div>
  );
}
