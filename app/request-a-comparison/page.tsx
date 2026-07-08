import type { Metadata } from 'next';
import ActionPage from '@/components/ActionPage';

export const metadata: Metadata = {
  title: 'Request a Comparison',
  description: 'Tell us which two products you want compared next.'
};

export default function RequestComparisonPage() {
  return (
    <ActionPage
      title="Request a Comparison"
      description="Do not see a comparison you are looking for? Tell us which two products (or which category) you want covered next, and we will prioritize it."
      buttonLabel="Request a comparison"
      subject="Comparison request"
    />
  );
}
