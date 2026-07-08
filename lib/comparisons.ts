import { categories, getCategory } from '@/data/categories';
import { Product } from '@/data/types';
import { getAllComparisonPairs } from './products';
import { determineOverallWinner } from './scoring';

export type ComparisonPair = { product: Product; competitor: Product; categorySlug: string };

// ---------------------------------------------------------------------------
// "Popular" / "Latest" / "Editor's Picks" are all derived from real fields
// already in the data layer (rating counts, release years, score margins) —
// nothing here is fabricated or hand-curated without a rule behind it. We
// deliberately did not add separate "Trending" / "Recently Added" / "New
// Releases" pages: with a static dataset and no traffic analytics or
// content-added timestamps, those would either duplicate "Latest" or have
// no real signal behind them at all.
// ---------------------------------------------------------------------------

export function getAllComparisonsAcrossCategories(): ComparisonPair[] {
  return categories.flatMap((c) =>
    getAllComparisonPairs(c.slug).map((pair) => ({ ...pair, categorySlug: c.slug }))
  );
}

/** Sorted by combined Amazon rating count of both products — a real proxy for how many people own/reviewed either product. */
export function getPopularComparisons(limit = 12): ComparisonPair[] {
  return [...getAllComparisonsAcrossCategories()]
    .sort((a, b) => b.product.ratingCount + b.competitor.ratingCount - (a.product.ratingCount + a.competitor.ratingCount))
    .slice(0, limit);
}

/** Sorted by the newer of the two release years in each pair. */
export function getLatestComparisons(limit = 12): ComparisonPair[] {
  return [...getAllComparisonsAcrossCategories()]
    .sort(
      (a, b) =>
        Math.max(b.product.releaseYear, b.competitor.releaseYear) -
        Math.max(a.product.releaseYear, a.competitor.releaseYear)
    )
    .slice(0, limit);
}

/** Comparisons with a large, decisive score gap — a clear winner rather than a close call. */
export function getEditorsPicks(limit = 12): ComparisonPair[] {
  return [...getAllComparisonsAcrossCategories()]
    .map((pair) => {
      const category = getCategory(pair.categorySlug);
      if (!category) return { pair, margin: 0 };
      const { margin } = determineOverallWinner(pair.product, pair.competitor, category);
      return { pair, margin };
    })
    .sort((a, b) => b.margin - a.margin)
    .slice(0, limit)
    .map((x) => x.pair);
}
