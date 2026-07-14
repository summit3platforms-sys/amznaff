import type { Metadata } from 'next';
import MailForm from '@/components/MailForm';

export const metadata: Metadata = {
  title: 'Feedback',
  description: 'Tell us what is working and what is not.'
};

export default function FeedbackPage() {
  return (
    <div className="container-page max-w-3xl py-14">
      <h1 className="text-3xl font-extrabold text-slate-900">Feedback</h1>
      <p className="mt-4 text-slate-600">
        Good, bad, or somewhere in between — we read every message and use it to improve how comparisons are built
        and presented. Confusing spec table? A comparison that felt off? A feature you wish existed? Tell us.
      </p>

      <div className="mt-10">
        <MailForm
          subject="Site feedback"
          submitLabel="Send feedback"
          fields={[
            { name: 'name', label: 'Name (optional)', type: 'text', placeholder: 'Jane Doe' },
            { name: 'email', label: 'Email (optional)', type: 'email', placeholder: 'you@example.com' },
            {
              name: 'type',
              label: 'What kind of feedback is this?',
              type: 'select',
              required: true,
              options: [
                'Something I loved',
                'Something confusing',
                'A bug or broken feature',
                'A comparison suggestion',
                'Other'
              ]
            },
            {
              name: 'message',
              label: 'Your feedback',
              type: 'textarea',
              required: true,
              placeholder: 'The more specific, the more useful — page URL, what you expected, what happened.'
            }
          ]}
        />
      </div>
    </div>
  );
}
