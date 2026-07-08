import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllBrands } from '@/lib/brands';

export const metadata: Metadata = {
  title: 'Brands',
  description: 'Browse every brand we cover, with real product comparisons for each.'
};

export default function BrandsPage() {
  const brands = getAllBrands();

  return (
    <div className="container-page py-12">
      <h1 className="text-3xl font-extrabold text-slate-900">Brands</h1>
      <p className="mt-2 max-w-2xl text-slate-500">
        Every brand below has at least one real product with full specs and comparisons on the site. As we add
        more categories, more brands will show up here.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {brands.map((b) => (
          <Link key={b.slug} href={`/brands/${b.slug}`} className="card p-5 transition hover:border-brand-400">
            <p className="font-semibold text-slate-900">{b.name}</p>
            <p className="mt-1 text-sm text-slate-400">
              {b.productCount} {b.productCount === 1 ? 'product' : 'products'}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
