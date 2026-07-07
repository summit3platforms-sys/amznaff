// ---------------------------------------------------------------------------
// Core data model
// Brand -> Series -> Model -> Specifications -> Features -> Price -> Pros ->
// Cons -> Images -> Amazon Link
//
// This is the ONLY place product truth lives. Every page in the app
// (product profile, comparisons, category listings, filters) is generated
// from this structured data. Nothing about specs is invented at render
// time — see lib/content-generator.ts for how copy is derived from specs.
// ---------------------------------------------------------------------------

export type Category = {
  slug: string; // e.g. "headphones"
  name: string; // e.g. "Headphones"
  pluralName: string; // e.g. "Headphones"
  description: string;
  /** Which spec keys matter for this category, in display order */
  specFields: SpecField[];
  /** Which score dimensions apply to this category, in display order */
  scoreDimensions: ScoreDimension[];
  /** Budget/use-case filters auto-generated for every comparison & listing page */
  filters: CategoryFilter[];
};

export type SpecField = {
  key: string; // matches a key in Product["specs"]
  label: string;
  unit?: string;
  /** "higher" = bigger number wins, "lower" = smaller number wins, "none" = not comparable */
  betterDirection: 'higher' | 'lower' | 'none';
  format?: (value: SpecValue) => string;
};

export type ScoreDimension = {
  key: string; // e.g. "battery", "comfort"
  label: string;
  description: string;
};

export type CategoryFilter = {
  slug: string; // e.g. "under-200"
  label: string; // e.g. "Under $200"
  kind: 'price-max' | 'price-min' | 'use-case';
  value?: number;
};

export type SpecValue = string | number | boolean;

export type ProductSpecs = Record<string, SpecValue>;

export type ProductScores = Record<string, number>; // 0-10 scale, keyed by ScoreDimension.key

export type ProductImage = {
  url: string;
  alt: string;
};

export type Product = {
  id: string;
  categorySlug: string;
  brand: string;
  series: string;
  model: string;
  slug: string; // url slug, unique within category
  releaseYear: number;
  price: number;
  msrp?: number;
  currency: 'USD';
  colorOptions: string[];
  material?: string;
  warrantyMonths: number;
  connectivity: string[];
  features: string[];
  specs: ProductSpecs;
  scores: ProductScores;
  pros: string[];
  cons: string[];
  images: ProductImage[];
  amazonAsin: string;
  rating: number; // 0-5, aggregate customer rating (external, for display only)
  ratingCount: number;
  /** Slugs of products this one should be actively compared against */
  competitorSlugs: string[];
  /** Relationship helpers for internal linking */
  previousModelSlug?: string;
  nextModelSlug?: string;
  accessorySlugs?: string[];
  useCases: string[]; // e.g. ["travel", "gaming", "office", "commute"]
  shortTagline: string;
};
