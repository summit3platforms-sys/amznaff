import type { MetadataRoute } from 'next';
import { categories } from '@/data/categories';
import { getAllComparisonPairs, getProductsByCategory, isCategoryLive } from '@/lib/products';
import { SITE_URL, comparisonCanonical } from '@/lib/seo';

// Auto-generates a sitemap entry for every category, product, and
// comparison page. As products.ts grows to thousands of entries, this
// scales automatically — no manual sitemap maintenance required.
export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [{ url: SITE_URL, changeFrequency: 'weekly', priority: 1 }];

  for (const category of categories) {
    // A category with no products yet is served as a noindex "coming soon"
    // page (see app/[category]/page.tsx) — it must not appear here, or the
    // sitemap would be advertising a page we're explicitly telling Google
    // not to index.
    if (!isCategoryLive(category.slug)) continue;

    entries.push({ url: `${SITE_URL}/${category.slug}`, changeFrequency: 'weekly', priority: 0.9 });

    for (const product of getProductsByCategory(category.slug)) {
      entries.push({
        url: `${SITE_URL}/${category.slug}/${product.slug}`,
        changeFrequency: 'weekly',
        priority: 0.8
      });
    }

    // Two products that list each other produce two URLs for one comparison.
    // Only the canonical direction belongs here — a sitemap that advertises
    // both is telling Google to crawl the same page twice and then asking it,
    // via rel=canonical, to throw one away.
    const seenComparisons = new Set<string>();
    for (const { product, competitor } of getAllComparisonPairs(category.slug)) {
      const { path } = comparisonCanonical(category.slug, product.slug, competitor.slug);
      if (seenComparisons.has(path)) continue;
      seenComparisons.add(path);
      entries.push({ url: `${SITE_URL}${path}`, changeFrequency: 'monthly', priority: 0.7 });
    }
  }

  return entries;
}
