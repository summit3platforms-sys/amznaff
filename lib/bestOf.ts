import { Category, Product } from '@/data/types';
import { getProductsByCategory } from './products';

export type BestForEntry = {
  dimensionKey: string;
  dimensionLabel: string;
  product: Product;
  score: number;
};

/** For each score dimension in the category, find the real product with the
 * highest score on that dimension. Purely derived from existing product
 * scores — no separate "best of" judgment is invented. */
export function getBestForEachDimension(category: Category, limit = 4): BestForEntry[] {
  const products = getProductsByCategory(category.slug);
  if (products.length === 0) return [];

  const entries: BestForEntry[] = category.scoreDimensions.map((dim) => {
    let best = products[0];
    for (const p of products) {
      if ((p.scores[dim.key] ?? 0) > (best.scores[dim.key] ?? 0)) best = p;
    }
    return { dimensionKey: dim.key, dimensionLabel: dim.label, product: best, score: best.scores[dim.key] ?? 0 };
  });

  return entries.sort((a, b) => b.score - a.score).slice(0, limit);
}

export type DealEntry = {
  product: Product;
  discountPercent: number;
};

/** Real deals only — a product qualifies solely because its own data has
 * msrp > price. Nothing here is fabricated or time-limited. */
export function getRealDeals(category: Category, limit = 4): DealEntry[] {
  const products = getProductsByCategory(category.slug);
  return products
    .filter((p): p is Product & { msrp: number } => typeof p.msrp === 'number' && p.msrp > p.price)
    .map((p) => ({ product: p, discountPercent: Math.round(((p.msrp - p.price) / p.msrp) * 100) }))
    .sort((a, b) => b.discountPercent - a.discountPercent)
    .slice(0, limit);
}
