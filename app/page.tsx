import Link from 'next/link';
import { categories } from '@/data/categories';
import { categoryGroups } from '@/data/categoryGroups';
import { getAllComparisonPairs, getProductsByCategory } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import FeaturedCategoryCard from '@/components/FeaturedCategoryCard';
import CategoryChip from '@/components/CategoryChip';
import StatsBar from '@/components/StatsBar';
import HowItWorks from '@/components/HowItWorks';

export default function HomePage() {
  // Match each live category to the taxonomy group it belongs to, so the
  // featured card can use the right icon. Falls back to the first group if
  // a live category has not been mapped into the taxonomy yet.
  const featuredCategories = categories.map((c) => {
    const group = categoryGroups.find((g) => g.items.some((i) => i.slug === c.slug)) ?? categoryGroups[0];
    return { category: c, iconKey: group.iconKey };
  });

  return (
    <div>
      <section className="border-b border-slate-200 bg-white">
        <div className="container-page py-16 text-center sm:py-20">
          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Which one should you buy?
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-500">
            No top-10 lists. No opinion pieces. Just spec-for-spec comparisons built from structured product data,
            so you can decide in minutes.
          </p>
          <div className="mx-auto mt-10 max-w-3xl">
            <StatsBar />
          </div>
        </div>
      </section>

      <section className="container-page py-14">
        <HowItWorks />
      </section>

      <section className="border-y border-slate-200 bg-slate-50/60">
        <div className="container-page py-14">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-2xl font-bold text-slate-900">Browse categories</h2>
            <Link href="/categories" className="text-sm font-semibold text-brand-600 hover:underline">
              All categories →
            </Link>
          </div>

          <div className="space-y-3">
            {featuredCategories.map(({ category, iconKey }) => (
              <FeaturedCategoryCard key={category.slug} category={category} iconKey={iconKey} />
            ))}
          </div>

          <div className="mt-8">
            <p className="mb-3 text-sm font-medium text-slate-500">More categories in the works</p>
            <div className="flex flex-wrap gap-2">
              {categoryGroups.map((group) => (
                <CategoryChip key={group.name} name={group.name} iconKey={group.iconKey} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {categories.map((c) => {
        const products = getProductsByCategory(c.slug).slice(0, 4);
        const pairs = getAllComparisonPairs(c.slug).slice(0, 6);
        return (
          <section key={c.slug} className="container-page py-14">
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
