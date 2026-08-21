import raw from './projectors.json';
import { Product } from '../types';

// ---------------------------------------------------------------------------
// Projectors category — researched August 2026.
//
// Product data lives in projectors.json, not here, so the admin dashboard
// (/admin/products) can read and rewrite it directly. This file is the typed
// accessor layer plus the sourcing notes that JSON cannot hold.
//
// Sourcing: specs come from first-party manufacturer specification pages and
// manuals wherever they exist, cross-checked against reputable review outlets.
// Where a manufacturer publishes nothing, the field carries an honest note
// rather than a guess. Where sources genuinely conflict, the conflict is
// recorded in the value itself rather than silently resolved.
//
// ASINs were read from amazon.com /dp/<ASIN> URLs as they appeared in search
// results and on third-party price-history sites, each cross-checked against a
// second independent source. Amazon product pages were NOT scraped — that
// would violate the Associates Operating Agreement. Confirm each ASIN in
// SiteStripe before relying on it for revenue.
//
// Sourcing note specific to this category: projector brightness is quoted in incompatible units. ISO 21118 lumens and ANSI lumens are NOT interchangeable — where independent measurement exists, ISO figures ran up to 20% optimistic. Every brightness value records the unit the manufacturer actually used. Separately, almost no projector in this price range has a native 4K panel: nearly all use a 1920x1080 chip with pixel shifting. Spec sheets and even industry databases routinely report the DISPLAYED resolution as 'native', which misleads buyers, so each entry states the panel resolution explicitly. Treat every 'dynamic' contrast figure as marketing: independently measured full-on/off contrast is frequently three orders of magnitude below the claim.
// ---------------------------------------------------------------------------

export const projectorProducts: Product[] = raw as Product[];
