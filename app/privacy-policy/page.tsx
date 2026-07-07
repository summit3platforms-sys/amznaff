import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How WhichOneToBuy collects and uses information.'
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container-page max-w-2xl py-14">
      <h1 className="text-3xl font-extrabold text-slate-900">Privacy Policy</h1>
      <p className="mt-2 text-sm text-slate-400">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

      <div className="mt-6 space-y-6 text-slate-600">
        <section>
          <h2 className="mb-2 text-lg font-bold text-slate-900">Information we collect</h2>
          <p>
            We do not require account creation or collect personal information to browse this site. Standard
            technical data (browser type, pages visited, approximate location from IP address) may be collected
            automatically through analytics tools to understand site usage and improve content.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-bold text-slate-900">Cookies</h2>
          <p>
            This site may use cookies for analytics and to support affiliate tracking (see Affiliate Disclosure).
            You can disable cookies in your browser settings; doing so may affect some site functionality.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-bold text-slate-900">Third-party links</h2>
          <p>
            We link to Amazon and other retailers. Once you leave our site, their privacy policies govern how
            your information is handled — we don&apos;t control and aren&apos;t responsible for third-party practices.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-bold text-slate-900">Contact</h2>
          <p>
            Questions about this policy? <a href="/contact" className="text-brand-600 hover:underline">Contact us</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
