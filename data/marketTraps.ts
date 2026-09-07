import raw from './marketTraps.json';

// ---------------------------------------------------------------------------
// "What the marketing doesn't tell you" — the research that used to live only
// in the sourcing comments at the top of each data/products/*.ts file.
//
// Those notes are the most valuable thing on this site and they were invisible:
// the Qi2 trap, the AHAM badges that the AHAM directory does not confirm, the
// dehumidifier sold as 34 pints whose own ENERGY STAR filing says 9.81. Every
// entry here traces to a first-party source recorded during the category's
// research; nothing is asserted that the product pages do not also show.
//
// Traps carry the product slugs they specifically apply to, so a product page
// can show only the ones that concern that model and a comparison page only
// the ones that concern its two, while the category page shows the full set.
// ---------------------------------------------------------------------------

export type MarketTrap = {
  /** Stable kebab-case id, used as the section anchor. */
  id: string;
  title: string;
  body: string;
  /** Product slugs this specifically applies to. Absent means category-wide. */
  affects?: string[];
  /** The spec field on the product page where a reader can verify it. */
  specKey?: string;
};

export type CategoryTraps = {
  categorySlug: string;
  intro: string;
  traps: MarketTrap[];
};

const allTraps = raw as CategoryTraps[];

export function trapsForCategory(categorySlug: string): CategoryTraps | undefined {
  return allTraps.find((entry) => entry.categorySlug === categorySlug);
}

// Traps naming at least one of the given product slugs. Category-wide traps
// (no `affects`) are deliberately excluded: on a product page the reader wants
// what concerns this model, and the category page already carries the rest.
export function trapsForProducts(categorySlug: string, productSlugs: string[]): MarketTrap[] {
  const entry = trapsForCategory(categorySlug);
  if (!entry) return [];
  return entry.traps.filter((trap) => trap.affects?.some((slug) => productSlugs.includes(slug)));
}

export function trapCount(categorySlug: string): number {
  return trapsForCategory(categorySlug)?.traps.length ?? 0;
}
