import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllBrands, getBrandBySlug, getProductsByBrandSlug } from '@/lib/brands';
import { getCategory } from '@/data/categories';
import ProductCard from '@/components/ProductCard';

export function generateStaticParams() {
  return getAllBrands().map((b) => ({ brand: b.slug }));
}

export function generateMetadata({ params }: { params: { brand: string } }): Metadata {
  const brand = getBrandBySlug(params.brand);
  if (!brand) return {};
  return {
    title: `${brand.name} Products Compared`,
    description: `Every ${brand.name} product we cover, with full specs and head-to-head comparisons.`
  };
}

export default function BrandPage({ params }: { params: { brand: string } }) {
  const brand = getBrandBySlug(params.brand);
  if (!brand) notFound();

  const products = getProductsByBrandSlug(params.brand);
  const categorySlugs = [...new Set(products.map((p) => p.categorySlug))];

  return (
    <div className="container-page py-12">
      <p className="text-sm text-slate-400">
        <Link href="/brands" className="hover:text-brand-600">
          Brands
        </Link>{' '}
        / {brand.name}
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-slate-900">{brand.name}</h1>
      <p className="mt-2 text-slate-500">
        {brand.productCount} {brand.productCount === 1 ? 'product' : 'products'} across{' '}
        {categorySlugs
          .map((slug) => getCategory(slug)?.pluralName ?? slug)
          .join(', ')}
        .
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
