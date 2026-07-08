import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with The Comparison Report.'
};

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@yourdomain.com';

export default function ContactPage() {
  return (
    <div className="container-page max-w-2xl py-14">
      <h1 className="text-3xl font-extrabold text-slate-900">Contact</h1>
      <div className="mt-6 space-y-5 text-slate-600">
        <p>
          Spotted an outdated spec or price, found a broken link, or have a product you&apos;d like us to compare?
          Email us and we&apos;ll take a look.
        </p>
        <a href={`mailto:${CONTACT_EMAIL}`} className="btn-secondary inline-flex">
          {CONTACT_EMAIL}
        </a>
      </div>
    </div>
  );
}
