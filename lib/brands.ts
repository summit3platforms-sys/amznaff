import { Product } from '@/data/types';
import { getAllProducts } from './products';

// ---------------------------------------------------------------------------
// Brand pages are derived entirely from product data — a brand only shows
// up here (and therefore only gets linked from nav/footer) once it has at
// least one real product in data/products/*.ts. No placeholder brands.
// ---------------------------------------------------------------------------

export function slugifyBrand(brand: string): string {
  return brand
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export type BrandSummary = {
  name: string;
  slug: string;
  productCount: number;
  categorySlugs: string[];
};

export function getAllBrands(): BrandSummary[] {
  const products = getAllProducts();
  const map = new Map<string, BrandSummary>();

  for (const p of products) {
    const slug = slugifyBrand(p.brand);
    const existing = map.get(slug);
    if (existing) {
      existing.productCount += 1;
      if (!existing.categorySlugs.includes(p.categorySlug)) existing.categorySlugs.push(p.categorySlug);
    } else {
      map.set(slug, { name: p.brand, slug, productCount: 1, categorySlugs: [p.categorySlug] });
    }
  }

  return [...map.values()].sort((a, b) => b.productCount - a.productCount || a.name.localeCompare(b.name));
}

export function getBrandBySlug(slug: string): BrandSummary | undefined {
  return getAllBrands().find((b) => b.slug === slug);
}

export function getProductsByBrandSlug(slug: string): Product[] {
  return getAllProducts().filter((p) => slugifyBrand(p.brand) === slug);
}
