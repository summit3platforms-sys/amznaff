import type { Metadata } from 'next';
import ActionPage from '@/components/ActionPage';

export const metadata: Metadata = {
  title: 'Help Center',
  description: 'Get help with anything on The Comparison Report.'
};

export default function HelpCenterPage() {
  return (
    <ActionPage
      title="Help Center"
      description="Cannot find what you are looking for, or something on the site is not working as expected? Send us a message and we will get back to you."
      buttonLabel="Contact support"
      subject="Help request"
    />
  );
}
