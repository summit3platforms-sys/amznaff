import { getAllProducts } from '@/lib/products';
import ProductCard from './ProductCard';

// Single-product cards (not comparisons), ranked by the real releaseYear
// already on each product. Each card links to that product's own review
// page — this is the "new releases" surface, distinct from the vs-pages.
export default function NewReleasesGrid({ limit = 5 }: { limit?: number }) {
  const products = [...getAllProducts()].sort((a, b) => b.releaseYear - a.releaseYear).slice(0, limit);
  if (products.length === 0) return null;

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
