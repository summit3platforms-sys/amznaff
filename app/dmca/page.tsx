import type { Metadata } from 'next';

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@yourdomain.com';

export const metadata: Metadata = {
  title: 'DMCA Policy',
  description: 'How to submit a copyright infringement notice for The Comparison Report.'
};

export default function DmcaPage() {
  return (
    <div className="container-page max-w-2xl py-14">
      <h1 className="text-3xl font-extrabold text-slate-900">DMCA Policy</h1>

      <div className="mt-6 space-y-6 text-slate-600">
        <section>
          <p>
            We respect the intellectual property rights of others and expect users of this site to do the same.
            If you believe content on this site infringes your copyright, send a notice to{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-600 hover:underline">
              {CONTACT_EMAIL}
            </a>{' '}
            including:
          </p>
        </section>
        <section>
          <ul className="list-disc space-y-2 pl-5">
            <li>A description of the copyrighted work you believe has been infringed</li>
            <li>The exact URL on this site where the material appears</li>
            <li>Your contact information (name, address, phone, and email)</li>
            <li>A statement that you have a good-faith belief the use is unauthorized</li>
            <li>A statement, under penalty of perjury, that the information in your notice is accurate and that you are authorized to act on behalf of the copyright owner</li>
            <li>Your physical or electronic signature</li>
          </ul>
        </section>
        <section>
          <p>We will review valid notices and remove or disable access to the identified material as required by law.</p>
        </section>
      </div>
    </div>
  );
}
