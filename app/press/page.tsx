import type { Metadata } from 'next';
import ActionPage from '@/components/ActionPage';

export const metadata: Metadata = {
  title: 'Press',
  description: 'Press inquiries for The Comparison Report.'
};

export default function PressPage() {
  return (
    <ActionPage
      title="Press"
      description="No press coverage to share yet. If you are a journalist or writer working on a story and want to talk, reach out below."
      buttonLabel="Contact for press"
      subject="Press inquiry"
    />
  );
}
