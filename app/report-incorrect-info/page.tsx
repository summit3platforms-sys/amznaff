import type { Metadata } from 'next';
import MailForm from '@/components/MailForm';

export const metadata: Metadata = {
  title: 'Report Incorrect Information',
  description: 'Let us know about an outdated spec, price, or broken link.'
};

export default function ReportIncorrectInfoPage() {
  return (
    <div className="container-page max-w-3xl py-14">
      <h1 className="text-3xl font-extrabold text-slate-900">Report Incorrect Information</h1>
      <p className="mt-4 text-slate-600">
        Specs and prices change, and we do our best to keep them current. If you spotted an outdated spec, a wrong
        price, a broken Amazon link, or anything else that looks off, tell us exactly where and what — the more
        detail, the faster we can fix it.
      </p>

      <div className="mt-10">
        <MailForm
          subject="Incorrect information report"
          submitLabel="Report an issue"
          fields={[
            {
              name: 'url',
              label: 'Page or product URL',
              type: 'text',
              required: true,
              placeholder: 'https://thecomparisonreport.com/headphones/...'
            },
            {
              name: 'issue',
              label: "What's incorrect?",
              type: 'select',
              required: true,
              options: ['Price', 'Spec or feature', 'Broken Amazon link', 'Image', 'Other']
            },
            {
              name: 'correct',
              label: 'Correct value (if known)',
              type: 'text',
              placeholder: 'e.g. actual price, correct battery life, etc.'
            },
            {
              name: 'details',
              label: 'Additional details',
              type: 'textarea',
              placeholder: 'Anything else that helps us verify and fix this.'
            },
            { name: 'email', label: 'Email (optional, for follow-up)', type: 'email', placeholder: 'you@example.com' }
          ]}
        />
      </div>
    </div>
  );
}
