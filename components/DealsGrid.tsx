import { Category } from '@/data/types';
import { getRealDeals } from '@/lib/bestOf';
import ProductCard from './ProductCard';

// Real deals only — a product appears here purely because its own data has
// msrp > price. No countdown timers, no fabricated "was" prices.
export default function DealsGrid({ category }: { category: Category }) {
  const deals = getRealDeals(category, 4);
  if (deals.length === 0) return null;

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {deals.map(({ product }) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
