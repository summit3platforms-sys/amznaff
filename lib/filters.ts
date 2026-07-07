import { CategoryFilter, Product } from '@/data/types';

export function productMatchesFilter(product: Product, filter: CategoryFilter): boolean {
  if (filter.kind === 'price-max') return product.price <= (filter.value ?? Infinity);
  if (filter.kind === 'price-min') return product.price >= (filter.value ?? 0);
  if (filter.kind === 'use-case') return product.useCases.includes(filter.slug);
  return true;
}
