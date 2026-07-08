import type { Metadata } from 'next';
import ActionPage from '@/components/ActionPage';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Careers at The Comparison Report.'
};

export default function CareersPage() {
  return (
    <ActionPage
      title="Careers"
      description="We are not hiring right now. If that changes, openings will be posted here. In the meantime, feel free to reach out if you think you would be a good fit down the line."
      buttonLabel="Get in touch"
      subject="Careers inquiry"
    />
  );
}
