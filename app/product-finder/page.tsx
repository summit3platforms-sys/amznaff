import type { Metadata } from 'next';
import ComingSoon from '@/components/ComingSoon';

export const metadata: Metadata = {
  title: 'Product Finder',
  description: 'Answer a few questions and get matched to the right product.'
};

export default function ProductFinderPage() {
  return (
    <ComingSoon
      title="Product Finder"
      description="A guided tool that asks about your budget and use case, then points you to the best-matching products, is in development. For now, use the filters on any category page to narrow things down."
    />
  );
}
