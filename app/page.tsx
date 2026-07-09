import Link from 'next/link';
import { getCategory } from '@/data/categories';
import { categoryGroups } from '@/data/categoryGroups';
import { getProductsByCategory } from '@/lib/products';
import { getAllComparisonsAcrossCategories, getDiversePopularComparisons } from '@/lib/comparisons';
import VsCard from '@/components/VsCard';
import ComparisonPicker from '@/components/ComparisonPicker';
import ComingSoonStrip from '@/components/ComingSoonStrip';
import DealsGrid from '@/components/DealsGrid';
import LatestComparisonsMasonry from '@/components/LatestComparisonsMasonry';
import { getRealDeals } from '@/lib/bestOf';
import SearchBar from '@/components/SearchBar';
import CategoryIconCard from '@/components/CategoryIconCard';
import GuideCard from '@/components/GuideCard';
import NewReleasesGrid from '@/components/NewReleasesGrid';
import TestimonialsSection from '@/components/TestimonialsSection';
import { guides } from '@/data/guides';

export default function HomePage() {
  // Headphones is the only live category right now — the picker and
  // product grid both key off it. Once a second category goes live, this
  // can become a small category selector instead of a hardcoded lookup.
  const category = getCategory('headphones')!;
  const products = getProductsByCategory(category.slug);
  const totalComparisons = getAllComparisonsAcrossCategories().length;
  const popularPairs = getDiversePopularComparisons(6);
  const heroChips = popularPairs.slice(0, 4);
  const hasDeals = getRealDeals(category, 1).length > 0;

  return (
    <div>
      <section className="section-gradient relative overflow-hidden border-b border-slate-100">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-100 opacity-40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-winner-50 opacity-60 blur-3xl" />
        <div className="container-page relative py-20 text-center sm:py-28">
          <span className="pill mx-auto">Structured specs, not opinion</span>
          <h1 className="mx-auto mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Which one should you buy?
          </h1>
          <p className="mx-auto mt-4 max-w-md text-slate-500">
            Head-to-head verdicts, not top-10 lists.
          </p>

          <div className="mx-auto mt-8 max-w-md">
            <SearchBar />
          </div>

          <p className="mx-auto mt-4 max-w-xs text-xs font-medium uppercase tracking-wide text-slate-500">
            or pick two to compare directly
          </p>

          <div className="mt-4">
            <ComparisonPicker categorySlug={category.slug} products={products} />
          </div>

          <p className="mt-5 text-sm text-slate-500">
            {totalComparisons} head-to-head verdicts · {category.pluralName.toLowerCase()} live now
          </p>

          {heroChips.length > 0 && (
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {heroChips.map(({ product, competitor, categorySlug }) => (
                <Link
                  key={`${product.id}-${competitor.id}`}
                  href={`/${categorySlug}/${product.slug}/vs/${competitor.slug}`}
                  className="pill bg-white transition hover:-translate-y-0.5 hover:shadow-soft"
                >
                  {product.brand} {product.model} vs {competitor.brand} {competitor.model}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <div className="container-page">

      <section className="py-12">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-xl font-semibold text-slate-900">Browse by category</h2>
          <Link href="/categories" className="text-sm font-medium text-brand-600 hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categoryGroups.map((group) => (
            <CategoryIconCard key={group.name} group={group} />
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-xl font-semibold text-slate-900">Guides</h2>
          <Link href="/guides" className="text-sm font-medium text-brand-600 hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {guides.slice(0, 4).map((g) => (
            <GuideCard key={g.slug} guide={g} />
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-xl font-semibold text-slate-900">New releases</h2>
        </div>
        <NewReleasesGrid limit={5} />
      </section>

      <section className="py-12">
        <h2 className="mb-6 text-xl font-semibold text-slate-900">Popular comparisons</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {popularPairs.map(({ product, competitor, categorySlug }) => {
            const pairCategory = getCategory(categorySlug);
            if (!pairCategory) return null;
            return <VsCard key={`${product.id}-${competitor.id}`} product={product} competitor={competitor} category={pairCategory} />;
          })}
        </div>
      </section>

      {hasDeals && (
        <section className="py-12">
          <div className="mb-6 flex items-center gap-2">
            <h2 className="text-xl font-semibold text-slate-900">Real deals right now</h2>
            <span className="pill bg-deal-50 text-deal-600">Price cut, not a fake countdown</span>
          </div>
          <DealsGrid category={category} />
        </section>
      )}

      <section className="py-12">
        <h2 className="mb-6 text-xl font-semibold text-slate-900">Latest comparisons</h2>
        <LatestComparisonsMasonry limit={6} />
      </section>

      <section className="py-12">
        <div className="section-gradient card p-8 sm:p-10">
          <h2 className="text-xl font-semibold text-slate-900">Stay updated</h2>
          <p className="mt-1.5 max-w-md text-sm text-slate-500">
            Get notified as new categories and comparisons go live.
          </p>
          <div className="mt-5">
            <ComingSoonStrip />
          </div>
        </div>
      </section>

      <TestimonialsSection />
      </div>
    </div>
  );
}
