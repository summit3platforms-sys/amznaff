import { categories } from '@/data/categories';

// Every category's product data lives at data/products/<slug>.json (see
// lib/products.ts for the registry that consumes these on the public
// site). This just validates an incoming :category param against that
// same list before the admin API touches a file on GitHub.
export function productFilePath(categorySlug: string): string | null {
  const known = categories.some((c) => c.slug === categorySlug);
  if (!known) return null;
  return `data/products/${categorySlug}.json`;
}
