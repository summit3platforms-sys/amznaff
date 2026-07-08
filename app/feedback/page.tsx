import type { Metadata } from 'next';
import ActionPage from '@/components/ActionPage';

export const metadata: Metadata = {
  title: 'Feedback',
  description: 'Tell us what is working and what is not.'
};

export default function FeedbackPage() {
  return (
    <ActionPage
      title="Feedback"
      description="Good, bad, or somewhere in between — we read every message and use it to improve how comparisons are built and presented."
      buttonLabel="Send feedback"
      subject="Site feedback"
    />
  );
}
