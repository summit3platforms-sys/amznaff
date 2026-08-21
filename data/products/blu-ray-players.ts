import raw from './blu-ray-players.json';
import { Product } from '../types';

// ---------------------------------------------------------------------------
// Blu-ray Players category — researched August 2026.
//
// Product data lives in blu-ray-players.json, not here, so the admin dashboard
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
// Sourcing note specific to this category: this is a contracting market and most 'best Blu-ray player' articles online list dead hardware. Verified discontinued and deliberately excluded: Reavon (entire range, Aug 2025, no replacement possible due to component supply), LG (entire range, Dec 2024), Pioneer (players ceased around 2020), Cambridge Audio CXUHD (archived), Sony UBP-X800M2 and BDP-S3700, the Magnetar Mk1 series, plus Samsung and Oppo who left years ago. Two corrections worth knowing: Sony exited Blu-ray RECORDERS in Feb 2026, not players, and has stated it continues to produce players; and Pioneer's 2025 exit was from PC optical drives, not from the player market it had already left. Panasonic has announced no discontinuation and no successor, but its US store lists several models sold out, so its players are treated here as late-life supply rather than fresh production.
// ---------------------------------------------------------------------------

export const bluRayPlayerProducts: Product[] = raw as Product[];
