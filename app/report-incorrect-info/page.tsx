import type { Metadata } from 'next';
import ActionPage from '@/components/ActionPage';

export const metadata: Metadata = {
  title: 'Report Incorrect Information',
  description: 'Let us know about an outdated spec, price, or broken link.'
};

export default function ReportIncorrectInfoPage() {
  return (
    <ActionPage
      title="Report Incorrect Information"
      description="Specs and prices change, and we do our best to keep them current. If you spotted an outdated spec, wrong price, or broken Amazon link, tell us which product and what is wrong, and we will fix it."
      buttonLabel="Report an issue"
      subject="Incorrect information report"
    />
  );
}
