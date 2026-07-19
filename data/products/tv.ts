import raw from './tv.json';
import { Product } from '../types';

// ---------------------------------------------------------------------------
// TV & Home Entertainment category — 2026 flagship/mid/entry OLED TVs.
//
// Product data now lives in tv.json, not here, so the admin dashboard
// (/admin/products) can read and rewrite it directly — see
// lib/github-content.ts for how admin edits get committed and deployed.
// This file is just the typed accessor layer; nothing outside /admin
// should import tv.json directly.
//
// Sourcing/scope notes (kept here since JSON can't hold comments):
// Every spec was sourced from manufacturer spec sheets, official press
// releases, and reputable review outlets (RTINGS, FlatpanelsHD, What Hi-Fi,
// TechRadar, Tom's Guide, etc.) gathered via research in July 2026. Where a
// spec could not be independently confirmed, the field holds an honest
// string note (e.g. "Not independently confirmed") rather than an invented
// number.
//
// Data-integrity notes on scope (all surfaced to and confirmed by the site
// owner before this data was written):
// - "LG M6" was requested but does not exist in LG's confirmed 2026 OLED
//   lineup (W6/G6/C6/B6 only) — dropped, not included.
// - "LG C6 Special Edition" / "B6 Special Edition" are not documented as
//   spec-distinct products (evidence points to retail-channel/region SKU
//   variants of the base C6/B6) — dropped as likely duplicates.
// - Philips OLED951/OLED911/OLED811 and Panasonic Z90B are confirmed NOT
//   sold on US Amazon (Philips' US-market TVs come from a different
//   licensee entirely; Panasonic's 2026 US lineup only includes the Z95B
//   and Z80B). Per the site owner's direction, these 4 products are still
//   included for comparison/informational value with `usAvailable: false`,
//   no Amazon ASIN, and pricing converted from their home-market (GBP)
//   price where no official price exists yet — clearly noted in each
//   product's `cons`. AmazonButton renders a non-link state for these.
// - A few products (LG G6, LG W6, Samsung S95H) are real, current 2026 US
//   retail products (confirmed at Best Buy/Target/manufacturer sites) but
//   do not yet have a confirmed live Amazon.com listing as of this
//   research — `amazonAsin` is left as '' rather than guessed, and
//   AmazonButton shows a "Check Price at Retailers" state for these
//   instead of fabricating a link.
// ---------------------------------------------------------------------------

export const tvProducts: Product[] = raw as Product[];
