import type { Metadata } from 'next';
import ComingSoon from '@/components/ComingSoon';

export const metadata: Metadata = {
  title: 'Compare Tool',
  description: 'Pick any two products and jump straight to their comparison.'
};

export default function CompareToolPage() {
  return (
    <ComingSoon
      title="Compare Tool"
      description={
        'A search-driven picker for jumping straight to any two products’ comparison page is in development. For now, open a product page and use the Compare With section to find its comparison pages.'
      }
    />
  );
}
