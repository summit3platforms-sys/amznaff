import { Product } from '@/data/types';
import { getProductsByCategory, getCompetitors } from './products';

// ---------------------------------------------------------------------------
// Internal linking helpers. Every product/comparison page links to: same
// brand, same series, alternatives, cheaper option, premium option, latest
// model, previous model — this file computes all of those relationships
// from the data layer so links stay correct automatically as products are
// added or removed.
// ---------------------------------------------------------------------------

export function sameBrand(product: Product): Product[] {
  return getProductsByCategory(product.categorySlug).filter(
    (p) => p.brand === product.brand && p.id !== product.id
  );
}

export function sameSeries(product: Product): Product[] {
  return getProductsByCategory(product.categorySlug).filter(
    (p) => p.series === product.series && p.id !== product.id
  );
}

export function cheaperAlternative(product: Product): Product | undefined {
  const competitors = getCompetitors(product);
  return competitors
    .filter((p) => p.price < product.price)
    .sort((a, b) => b.price - a.price)[0]; // closest cheaper option
}

export function premiumAlternative(product: Product): Product | undefined {
  const competitors = getCompetitors(product);
  return competitors
    .filter((p) => p.price > product.price)
    .sort((a, b) => a.price - b.price)[0]; // closest pricier option
}

/** "You may also like" — other comparisons for either product in this
 * comparison, excluding the current pair, prioritizing same-brand pairs. */
export function alternativeComparisons(
  productA: Product,
  productB: Product,
  limit = 6
): Array<{ product: Product; competitor: Product }> {
  const candidates: Array<{ product: Product; competitor: Product }> = [];

  for (const p of [productA, productB]) {
    for (const competitor of getCompetitors(p)) {
      if (
        (competitor.id === productA.id || competitor.id === productB.id) &&
        (p.id === productA.id || p.id === productB.id)
      ) {
        continue; // skip the current pair itself
      }
      candidates.push({ product: p, competitor });
    }
  }

  // De-dupe by unordered pair key
  const seen = new Set<string>();
  const deduped = candidates.filter((c) => {
    const key = [c.product.id, c.competitor.id].sort().join('::');
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  return deduped.slice(0, limit);
}

export function accessoriesFor(product: Product): Product[] {
  if (!product.accessorySlugs || product.accessorySlugs.length === 0) return [];
  const all = getProductsByCategory(product.categorySlug);
  return product.accessorySlugs
    .map((slug) => all.find((p) => p.slug === slug))
    .filter((p): p is Product => Boolean(p));
}
