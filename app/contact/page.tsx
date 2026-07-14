import type { Metadata } from 'next';
import MailForm from '@/components/MailForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with The Comparison Report.'
};

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@yourdomain.com';

const reasons = [
  {
    title: 'Spotted an error',
    body: 'An outdated spec, wrong price, or broken Amazon link on one of our comparison pages.'
  },
  {
    title: 'Request a comparison',
    body: 'Two specific products you want us to compare that aren’t on the site yet.'
  },
  {
    title: 'Partnerships & business',
    body: 'Brand, retailer, or business inquiries — including affiliate and advertising questions.'
  },
  {
    title: 'Something else',
    body: 'General questions, feedback on the site, or anything else — we read everything.'
  }
];

export default function ContactPage() {
  return (
    <div className="container-page max-w-4xl py-14">
      <h1 className="text-3xl font-extrabold text-slate-900">Contact</h1>
      <p className="mt-4 max-w-2xl text-slate-600">
        Spotted an outdated spec or price, found a broken link, have a product you&apos;d like us to compare, or
        just want to say hello? We&apos;d love to hear from you. Fill out the form below or email us directly at{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-brand-600 hover:underline">
          {CONTACT_EMAIL}
        </a>
        .
      </p>

      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {reasons.map((r) => (
          <div key={r.title} className="card p-4">
            <h3 className="text-sm font-semibold text-slate-900">{r.title}</h3>
            <p className="mt-1 text-sm text-slate-500">{r.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 max-w-xl">
        <MailForm
          subject="Website contact form"
          submitLabel="Send message"
          fields={[
            { name: 'name', label: 'Name', type: 'text', required: true, placeholder: 'Jane Doe' },
            { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'you@example.com' },
            {
              name: 'reason',
              label: 'Reason for contacting',
              type: 'select',
              required: true,
              options: ['Spotted an error', 'Request a comparison', 'Partnerships & business', 'Something else']
            },
            {
              name: 'message',
              label: 'Message',
              type: 'textarea',
              required: true,
              placeholder: 'Tell us what’s on your mind…'
            }
          ]}
        />
      </div>
    </div>
  );
}
