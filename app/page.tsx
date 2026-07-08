import Link from 'next/link';
import { getCategory } from '@/data/categories';
import { getProductsByCategory } from '@/lib/products';
import { getAllComparisonsAcrossCategories, getDiversePopularComparisons } from '@/lib/comparisons';
import ProductCard from '@/components/ProductCard';
import VsCard from '@/components/VsCard';
import ComparisonPicker from '@/components/ComparisonPicker';
import HowItWorks from '@/components/HowItWorks';
import ComingSoonStrip from '@/components/ComingSoonStrip';
import PricesUpdated from '@/components/PricesUpdated';

export default function HomePage() {
  // Headphones is the only live category right now — the picker and
  // product grid both key off it. Once a second category goes live, this
  // can become a small category selector instead of a hardcoded lookup.
  const category = getCategory('headphones')!;
  const products = getProductsByCategory(category.slug);
  const totalComparisons = getAllComparisonsAcrossCategories().length;
  const popularPairs = getDiversePopularComparisons(6);

  return (
    <div className="container-page">
      <section className="py-16 text-center sm:py-20">
        <h1 className="mx-auto max-w-2xl text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">
          Which one should you buy?
        </h1>
        <p className="mx-auto mt-3 max-w-md text-slate-500">
          Head-to-head verdicts, not top-10 lists.
        </p>

        <div className="mt-8">
          <ComparisonPicker categorySlug={category.slug} products={products} />
        </div>

        <p className="mt-4 text-sm text-slate-500">
          {totalComparisons} head-to-head verdicts · {category.pluralName.toLowerCase()} live now
        </p>
      </section>

      <section className="py-12">
        <h2 className="mb-6 text-xl font-medium text-slate-900">Popular comparisons</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {popularPairs.map(({ product, competitor, categorySlug }) => {
            const pairCategory = getCategory(categorySlug);
            if (!pairCategory) return null;
            return <VsCard key={`${product.id}-${competitor.id}`} product={product} competitor={competitor} category={pairCategory} />;
          })}
        </div>
      </section>

      <section className="py-12">
        <div className="mb-1 flex items-end justify-between">
          <h2 className="text-xl font-medium text-slate-900">{category.pluralName}</h2>
          <Link href={`/${category.slug}`} className="text-sm text-brand-600 hover:underline">
            View all →
          </Link>
        </div>
        <PricesUpdated className="mb-6" />
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="py-8">
        <HowItWorks />
      </section>

      <section className="py-10">
        <ComingSoonStrip />
      </section>
    </div>
  );
}
