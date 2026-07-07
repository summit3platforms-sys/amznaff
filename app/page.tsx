import Link from 'next/link';
import { categories } from '@/data/categories';
import { getAllComparisonPairs, getProductsByCategory } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

export default function HomePage() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-white">
        <div className="container-page py-16 text-center sm:py-24">
          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Which one should you buy?
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-500">
            No top-10 lists. No opinion pieces. Just spec-for-spec comparisons built from structured product data,
            so you can decide in minutes.
          </p>
        </div>
      </section>

      <section className="container-page py-14">
        <h2 className="mb-6 text-2xl font-bold text-slate-900">Browse categories</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => {
            const count = getProductsByCategory(c.slug).length;
            return (
              <Link key={c.slug} href={`/${c.slug}`} className="card p-6 transition hover:shadow-lg">
                <h3 className="text-lg font-bold text-slate-900">{c.pluralName}</h3>
                <p className="mt-1 text-sm text-slate-500">{c.description}</p>
                <p className="mt-3 text-xs font-medium text-brand-600">{count} models compared →</p>
              </Link>
            );
          })}
        </div>
      </section>

      {categories.map((c) => {
        const products = getProductsByCategory(c.slug).slice(0, 4);
        const pairs = getAllComparisonPairs(c.slug).slice(0, 6);
        return (
          <section key={c.slug} className="container-page py-10">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">Popular {c.pluralName.toLowerCase()}</h2>
              <Link href={`/${c.slug}`} className="text-sm font-semibold text-brand-600 hover:underline">
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>

            <div className="mt-8">
              <h3 className="mb-3 text-lg font-bold text-slate-900">Popular comparisons</h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {pairs.map(({ product, competitor }) => (
                  <Link
                    key={`${product.id}-${competitor.id}`}
                    href={`/${c.slug}/${product.slug}/vs/${competitor.slug}`}
                    className="card p-4 text-sm font-medium text-slate-700 transition hover:border-brand-400 hover:text-brand-700"
                  >
                    {product.model} <span className="text-slate-400">vs</span> {competitor.model}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
