import { getProductBySlug } from '@/lib/products';

// ---------------------------------------------------------------------------
// Canonical URL policy.
//
// This is a programmatic site: pages are generated from data, which means the
// same content is reachable by more than one URL unless something says which
// URL is the real one. Three sources of duplication exist here, and every one
// of them is resolved by a canonical rather than by deleting the URL — the
// alternate URLs are all legitimate destinations for a visitor, they just must
// not compete with each other in the index.
//
//   1. Comparison direction. /tv/a/vs/b and /tv/b/vs/a render the same
//      comparison. Both are declared in the data whenever two products list
//      each other as competitors, which is the normal case, so roughly 86% of
//      comparison URLs had a twin. See comparisonCanonical() below.
//   2. Category filters. /tv?filter=under-500 is a slice of /tv. The filter is
//      a query parameter, so a canonical on the category page collapses every
//      filter permutation onto the unfiltered category.
//   3. Ad-hoc comparison pairs. The /vs/ route runs with dynamicParams=true,
//      so any product pair renders on request even if the data never declared
//      it. That is good for a visitor following a link and bad for the index —
//      12 products imply 132 ordered pairs against the ~48 we curate. Those
//      pages stay reachable and stay noindex.
//
// SITE_URL is only a fallback for metadataBase; the real value comes from
// NEXT_PUBLIC_SITE_URL in Vercel. The fallback is the production domain and
// not example.com, so a missing env var degrades to "right host" rather than
// to a sitemap full of URLs pointing at a domain we do not own.
// ---------------------------------------------------------------------------

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.thecomparisonreport.com').replace(
  /\/+$/,
  ''
);

// Next resolves a relative canonical against metadataBase, so pages pass a
// path and never build the absolute URL themselves. One place decides the host.
export function canonical(path: string): { canonical: string } {
  return { canonical: path === '/' ? '/' : `/${path.replace(/^\/+/, '').replace(/\/+$/, '')}` };
}

export type ComparisonCanonical = {
  /** The single URL that should be indexed for this pair of products. */
  path: string;
  /** False when neither product declares the other — an ad-hoc pair, kept out of the index. */
  declared: boolean;
};

// Picks one direction for a comparison and sticks to it.
//
// Preference order matters. When both products declare each other, both
// directions are in the sitemap and either could serve as the canonical, so
// the pair is sorted alphabetically — an arbitrary but stable rule, which is
// the only property that matters. When only one direction is declared, that
// direction wins even if it sorts second, so the canonical always names a URL
// that is actually in the sitemap. A canonical pointing at a URL we do not
// advertise is a weaker signal than one that agrees with the sitemap.
export function comparisonCanonical(
  categorySlug: string,
  productSlug: string,
  competitorSlug: string
): ComparisonCanonical {
  const product = getProductBySlug(categorySlug, productSlug);
  const competitor = getProductBySlug(categorySlug, competitorSlug);

  const forward = product?.competitorSlugs.includes(competitorSlug) ?? false;
  const reverse = competitor?.competitorSlugs.includes(productSlug) ?? false;

  let [first, second] = [productSlug, competitorSlug];
  if (reverse && !forward) {
    [first, second] = [competitorSlug, productSlug];
  } else if (forward === reverse) {
    // Both declared, or neither: sort for a stable, direction-independent result.
    [first, second] = [productSlug, competitorSlug].sort();
  }

  return { path: `/${categorySlug}/${first}/vs/${second}`, declared: forward || reverse };
}
