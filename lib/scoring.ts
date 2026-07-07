import { Category, Product } from '@/data/types';

export function overallScore(product: Product, category: Category): number {
  const dims = category.scoreDimensions;
  if (dims.length === 0) return 0;
  const sum = dims.reduce((acc, d) => acc + (product.scores[d.key] ?? 0), 0);
  return round1(sum / dims.length);
}

export function round1(n: number): number {
  return Math.round(n * 10) / 10;
}

export type HeadToHeadWinner = {
  winner: Product;
  loser: Product;
  margin: number; // overall score gap
  isClose: boolean; // true if margin < 0.4
};

export function determineOverallWinner(a: Product, b: Product, category: Category): HeadToHeadWinner {
  const scoreA = overallScore(a, category);
  const scoreB = overallScore(b, category);
  const winner = scoreA >= scoreB ? a : b;
  const loser = scoreA >= scoreB ? b : a;
  const margin = round1(Math.abs(scoreA - scoreB));
  return { winner, loser, margin, isClose: margin < 0.4 };
}

export function dimensionWinner(a: Product, b: Product, dimensionKey: string): 'a' | 'b' | 'tie' {
  const scoreA = a.scores[dimensionKey] ?? 0;
  const scoreB = b.scores[dimensionKey] ?? 0;
  if (Math.abs(scoreA - scoreB) < 0.15) return 'tie';
  return scoreA > scoreB ? 'a' : 'b';
}

/** Radar chart data: one row per score dimension with both products' values. */
export function radarData(a: Product, b: Product, category: Category) {
  return category.scoreDimensions.map((dim) => ({
    key: dim.key,
    label: dim.label,
    a: a.scores[dim.key] ?? 0,
    b: b.scores[dim.key] ?? 0
  }));
}

/** Spec-level winner for side-by-side table rows, respecting betterDirection. */
export function specWinner(
  a: Product,
  b: Product,
  betterDirection: 'higher' | 'lower' | 'none'
): (key: string) => 'a' | 'b' | 'tie' {
  return (key: string) => {
    if (betterDirection === 'none') return 'tie';
    const va = a.specs[key];
    const vb = b.specs[key];
    if (typeof va !== 'number' || typeof vb !== 'number') return 'tie';
    if (va === vb) return 'tie';
    if (betterDirection === 'higher') return va > vb ? 'a' : 'b';
    return va < vb ? 'a' : 'b';
  };
}
