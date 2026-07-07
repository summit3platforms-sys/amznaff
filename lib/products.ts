import { Product } from '@/data/types';
import { headphonesProducts } from '@/data/products/headphones';

// ---------------------------------------------------------------------------
// Central product registry. Add a new category's product file here and it
// is automatically picked up by every route, sitemap, and internal linking
// helper in the app. This is the only place that needs to change when a
// new category is added.
// ---------------------------------------------------------------------------
const allProducts: Product[] = [...headphonesProducts];

export function getAllProducts(): Product[] {
  return allProducts;
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return allProducts.filter((p) => p.categorySlug === categorySlug);
}

export function getProductBySlug(categorySlug: string, slug: string): Product | undefined {
  return allProducts.find((p) => p.categorySlug === categorySlug && p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return allProducts.find((p) => p.id === id);
}

/** All valid (product, competitor) pairs for a category, deduped is NOT applied —
 * both directions are generated intentionally so "A vs B" and "B vs A" search
 * intents each get a dedicated, correctly-framed page. */
export function getAllComparisonPairs(categorySlug: string): Array<{ product: Product; competitor: Product }> {
  const products = getProductsByCategory(categorySlug);
  const pairs: Array<{ product: Product; competitor: Product }> = [];
  for (const product of products) {
    for (const competitorSlug of product.competitorSlugs) {
      const competitor = products.find((p) => p.slug === competitorSlug);
      if (competitor) {
        pairs.push({ product, competitor });
      }
    }
  }
  return pairs;
}

export function getCompetitors(product: Product): Product[] {
  const products = getProductsByCategory(product.categorySlug);
  return product.competitorSlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is Product => Boolean(p));
}
