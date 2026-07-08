import type { Metadata } from 'next';
import ComingSoon from '@/components/ComingSoon';

export const metadata: Metadata = {
  title: 'Price Tracker',
  description: 'Price history for the products we cover.'
};

export default function PriceTrackerPage() {
  return (
    <ComingSoon
      title="Price Tracker"
      description="Price history charts require a reliable ongoing price-history data source, which we are still integrating. Once live, this will show how a product's price has moved over time so you can time a purchase."
    />
  );
}
