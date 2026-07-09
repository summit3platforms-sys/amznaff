import { getCategory } from '@/data/categories';
import { getLatestComparisons } from '@/lib/comparisons';
import VsCard from './VsCard';

// CSS-only masonry (no JS library) via `columns`. Ranked by real release
// years already in the product data — the newer of the two products in
// each pair determines its position.
export default function LatestComparisonsMasonry({ limit = 6 }: { limit?: number }) {
  const pairs = getLatestComparisons(limit);
  if (pairs.length === 0) return null;

  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4 [&>*]:break-inside-avoid">
      {pairs.map(({ product, competitor, categorySlug }) => {
        const category = getCategory(categorySlug);
        if (!category) return null;
        return <VsCard key={`${product.id}-${competitor.id}`} product={product} competitor={competitor} category={category} />;
      })}
    </div>
  );
}
