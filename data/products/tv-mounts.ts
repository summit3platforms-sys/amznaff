import raw from './tv-mounts.json';
import { Product } from '../types';

// ---------------------------------------------------------------------------
// TV Mounts category — researched August 2026.
//
// Product data lives in tv-mounts.json, not here, so the admin dashboard
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
// Sourcing note specific to this category: TV mounts are heavily white-labelled and listing data drifts. Six of the products researched had their advertised screen-size range revised on an unchanged Amazon listing over time, so screen-size range is the least reliable field here. Weight capacity and VESA pattern are the two specs that actually determine whether a mount is safe for a given TV, and both are confirmed at manufacturer level for every product published. Where a brand publishes no numeric VESA maximum, the field says so rather than inferring one — inferring a VESA ceiling could put a TV on the floor. Products whose price could not be verified from any source were excluded rather than published with a guessed figure, which is why this category is smaller than the others.
// ---------------------------------------------------------------------------

export const tvMountProducts: Product[] = raw as Product[];
