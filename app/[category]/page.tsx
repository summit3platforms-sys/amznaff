import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { categories, getCategory } from '@/data/categories';
import { getProductsByCategory } from '@/lib/products';
import { productMatchesFilter } from '@/lib/filters';
import ProductCard from '@/components/ProductCard';
import FilterTags from '@/components/FilterTags';

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export function generateMetadata({ params }: { params: { category: string } }): Metadata {
  const category = getCategory(params.category);
  if (!category) return {};
  return {
    title: `${category.pluralName} Compared — Which One Should You Buy?`,
    description: category.description
  };
}

export default function CategoryPage({
  params,
  searchParams
}: {
  params: { category: string };
  searchParams: { filter?: string };
}) {
  const category = getCategory(params.category);
  if (!category) notFound();

  const allProducts = getProductsByCategory(category.slug);
  const activeFilter = category.filters.find((f) => f.slug === searchParams.filter);
  const products = activeFilter ? allProducts.filter((p) => productMatchesFilter(p, activeFilter)) : allProducts;

  return (
    <div className="container-page py-12">
      <h1 className="text-3xl font-extrabold text-slate-900">{category.pluralName}</h1>
      <p className="mt-2 max-w-2xl text-slate-500">{category.description}</p>

      <div className="mt-6">
        <FilterTags categorySlug={category.slug} filters={category.filters} activeSlug={activeFilter?.slug} />
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {products.length === 0 && (
        <p className="mt-10 text-center text-slate-400">No models match this filter yet.</p>
      )}
    </div>
  );
}
