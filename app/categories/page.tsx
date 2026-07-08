import Link from 'next/link';
import type { Metadata } from 'next';
import { categories } from '@/data/categories';
import { getProductsByCategory } from '@/lib/products';

export const metadata: Metadata = {
  title: 'All Categories',
  description: 'Every product category we cover, with full spec-driven comparisons.'
};

export default function CategoriesPage() {
  return (
    <div className="container-page py-12">
      <h1 className="text-3xl font-extrabold text-slate-900">All Categories</h1>
      <p className="mt-2 max-w-2xl text-slate-500">
        We are adding new categories over time. Each one only goes live once it has real, verified product specs
        behind it.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => {
          const count = getProductsByCategory(c.slug).length;
          return (
            <Link key={c.slug} href={`/${c.slug}`} className="card p-6 transition hover:shadow-lg">
              <h2 className="text-lg font-bold text-slate-900">{c.pluralName}</h2>
              <p className="mt-1 text-sm text-slate-500">{c.description}</p>
              <p className="mt-3 text-xs font-medium text-brand-600">{count} models compared →</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
