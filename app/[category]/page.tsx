import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { categories, getCategory } from '@/data/categories';
import { getAllComparisonPairs, getProductsByCategory, isCategoryLive } from '@/lib/products';
import { productMatchesFilter } from '@/lib/filters';
import { canonical, comparisonCanonical } from '@/lib/seo';
import { breadcrumbSchema, itemListSchema, jsonLd } from '@/lib/structured-data';
import { decapitalize, formatUsd } from '@/lib/content-generator';
import { dataUpdatedAt, formatUpdated } from '@/data/freshness';
import Link from 'next/link';

// Cap on comparison cards rendered inline on a category page.
const COMPARISON_CARD_LIMIT = 36;
import ProductCard from '@/components/ProductCard';
import FilterTags from '@/components/FilterTags';
import VsCard from '@/components/VsCard';
import ComingSoon from '@/components/ComingSoon';

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export function generateMetadata({ params }: { params: { category: string } }): Metadata {
  const category = getCategory(params.category);
  if (!category) return {};

  // A category defined in data/categories.ts but with no products yet still
  // resolves (rather than 404ing) so that any URL already in Google's index
  // returns a real 200 carrying an explicit noindex — that's how a page gets
  // dropped cleanly. `follow` stays on so the outbound links to live
  // comparisons still pass their signal. It is also kept out of the sitemap
  // (app/sitemap.ts) and out of every internal nav surface.
  if (!isCategoryLive(category.slug)) {
    return {
      title: `${category.pluralName} Comparisons — Coming Soon`,
      description: `${category.pluralName} comparisons are not live on The Comparison Report yet. Browse the categories we have published so far.`,
      robots: { index: false, follow: true }
    };
  }

  // Filters are query parameters (?filter=under-500), so every filtered view
  // is a slice of this same page. The canonical points every one of them back
  // at the unfiltered category.
  return {
    title: `${category.pluralName} Compared — Which One Should You Buy?`,
    description: category.description,
    alternates: canonical(`/${category.slug}`)
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

  if (!isCategoryLive(category.slug)) {
    return (
      <ComingSoon
        title={`${category.pluralName} comparisons are coming soon`}
        description={`We only publish a category once every model in it has verified specs and a real retail listing behind it. ${category.pluralName} aren't there yet — here's what is live in the meantime.`}
      />
    );
  }

  const allProducts = getProductsByCategory(category.slug);
  const activeFilter = category.filters.find((f) => f.slug === searchParams.filter);
  const products = activeFilter ? allProducts.filter((p) => productMatchesFilter(p, activeFilter)) : allProducts;
  const comparisonPairs = getAllComparisonPairs(category.slug);

  // getAllComparisonPairs returns both directions of every pair, so rendering
  // it wholesale put each comparison on the page twice. Collapsing to the
  // canonical direction — the same rule the sitemap uses — halves the cards,
  // and the cap keeps the largest categories from shipping a megabyte of HTML:
  // /tv was 1.1MB with 47 product cards plus 168 duplicated comparison cards.
  const seenPairs = new Set<string>();
  const canonicalPairs = comparisonPairs.filter(({ product, competitor }) => {
    const { path } = comparisonCanonical(category.slug, product.slug, competitor.slug);
    if (seenPairs.has(path)) return false;
    seenPairs.add(path);
    return true;
  });

  const updated = formatUpdated(dataUpdatedAt(category.slug));
  const withAsin = allProducts.filter((p) => p.amazonAsin).length;
  const brands = Array.from(new Set(allProducts.map((p) => p.brand)));
  const cheapest = Math.min(...allProducts.map((p) => p.price));
  const dearest = Math.max(...allProducts.map((p) => p.price));

  return (
    <div className="container-page py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(itemListSchema(category, products)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { name: 'Home', path: '/' },
              { name: category.pluralName, path: `/${category.slug}` }
            ])
          )
        }}
      />
      <h1 className="text-3xl font-extrabold text-slate-900">{category.pluralName}</h1>
      <p className="mt-2 max-w-2xl text-slate-500">{category.description}</p>

      {/* A category page with a bare heading and a grid gives a reader nothing
          to read and a search engine nothing to understand the page by. This
          says what is actually in the set, entirely from the data. */}
      <div className="mt-5 max-w-3xl space-y-3 text-slate-600">
        <p>
          We compare {allProducts.length} {decapitalize(category.pluralName)} from {brands.length}{' '}
          {brands.length === 1 ? 'brand' : 'brands'} — {brands.slice(0, 6).join(', ')}
          {brands.length > 6 ? ` and ${brands.length - 6} more` : ''} — priced from {formatUsd(cheapest)} to{' '}
          {formatUsd(dearest)}. Each one is scored across {category.scoreDimensions.length} categories (
          {category.scoreDimensions.slice(0, 3).map((d) => d.label).join(', ')} and others), calculated from
          published specifications rather than opinion, which is what makes the {canonicalPairs.length}{' '}
          head-to-head comparisons below directly comparable.
        </p>
        <p className="text-sm text-slate-400">
          {withAsin} of {allProducts.length} have a verified retail listing.
          {updated && (
            <>
              {' '}Data last verified <time dateTime={dataUpdatedAt(category.slug)}>{updated}</time>.
            </>
          )}{' '}
          <Link href="/how-we-compare" className="underline hover:text-brand-600">
            How we score
          </Link>
        </p>
      </div>

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

      {canonicalPairs.length > 0 && (
        <section className="mt-16">
          <h2 className="mb-2 text-xl font-semibold text-slate-900">
            {category.pluralName} comparisons
          </h2>
          <p className="mb-6 text-sm text-slate-400">
            {canonicalPairs.length} head-to-head comparisons in this category
            {canonicalPairs.length > COMPARISON_CARD_LIMIT && `, showing the first ${COMPARISON_CARD_LIMIT}`}.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {canonicalPairs.slice(0, COMPARISON_CARD_LIMIT).map(({ product, competitor }) => (
              <VsCard key={`${product.id}-${competitor.id}`} product={product} competitor={competitor} category={category} />
            ))}
          </div>
          {canonicalPairs.length > COMPARISON_CARD_LIMIT && (
            <p className="mt-6 text-sm text-slate-500">
              Every comparison is reachable from its two product pages, and all of them are in the{' '}
              <Link href="/comparisons" className="underline hover:text-brand-600">
                full comparisons index
              </Link>
              .
            </p>
          )}
        </section>
      )}
    </div>
  );
}
