import raw from './tv.json';
import { Product } from '../types';

// ---------------------------------------------------------------------------
// TV & Home Entertainment category — 2026 flagship/mid/entry OLED, QLED, and
// Mini-LED TVs (47 products across 14 brands as of the July 2026 QLED/
// Mini-LED expansion).
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
//
// QLED/Mini-LED expansion (July 2026) — the site owner supplied a 10-brand,
// 34-product list to publish; research turned up naming/model-year errors
// in several brands' lists (same category of issue as "LG M6" above), all
// corrected here rather than published as given, and surfaced to the site
// owner:
// - Samsung: QN90F/QN80F/QN70F don't exist as 2026 models (2026 uses "H"
//   naming: QN80H/QN70H; QN90 was discontinued, replaced by the new R85H
//   Micro RGB tier). QN85F, Q8F, and Q7F don't exist in Samsung's real
//   lineup at all (Q8F/Q7F do exist, but as 2025 products, not 2026, and
//   were not included here per the site owner's direction). Published
//   instead: QN990F, QN900F (current 8K, carryover), QN80H, QN70H (real
//   2026 Neo QLED 4K), R85H (new 2026 Micro RGB tier), M90H, M80H, M70H
//   (new 2026 Mini LED tier).
// - TCL: QM8K/QM7K were superseded for 2026 by QM8L/QM7L (published the
//   2026 names). QM6K itself carries over unchanged into 2026, so it's
//   published as-is. "Q6K" does not exist — TCL's non-Mini-LED entry QLED
//   tier is named "Q6" (no "K") — published under the correct name.
// - Hisense: U9QG and U8QG are real (2025-generation, carried into 2026
//   without a refresh). "U7QG"/"U6QG" do not exist — the real 2026
//   mid/entry tiers are named U7SG/U7SF and U6SF/U6SF Pro — published as
//   U7SG and U6SF Pro. "QD7QG" — a QD7 tier exists, but its exact
//   generation suffix could not be confirmed, so it's published as
//   "Hisense QD7" rather than guessing a specific suffix.
// - Sony: BRAVIA 9 and BRAVIA 7 were succeeded for 2026 by BRAVIA 9 II and
//   BRAVIA 7 II (Sony's new True RGB Mini LED backlight) — published under
//   the correct "II" names. BRAVIA 5 has no "II" revision and was
//   confirmed correct as given.
// - LG: "QNED99" does not exist anywhere in LG's confirmed 2026 QNED evo
//   lineup (flagship is QNED90) — dropped, not included, same as the
//   earlier "LG M6" situation. QNED90, QNED85, and QNED82 are real and
//   published as given.
// - Philips: "The Xtra" 2026 successor (MLED981, RGB Mini-LED) has no
//   announced price as of this research, so the current, priced "Xtra"
//   generation (PML9008) is published instead. "MiniLED Series" is
//   published as the PQS9001 ("The One") QD LCD lineup. Both confirmed NOT
//   sold on US Amazon, same treatment as the Philips OLED products above
//   (`usAvailable: false`, pricing converted from EUR).
// - Amazon, Toshiba, Roku, Sharp: all model names given were confirmed
//   accurate as provided; published without correction.
//
// ASIN backfill (August 2026) — the catalogue shipped with only 7 of 47
// products carrying an Amazon ASIN, which left 68% of its comparison pages
// unable to earn anything. 28 ASINs were added, taking the total to 35 of 47.
// Every ASIN was matched to the EXACT screen size recorded in that product's
// specs, because Amazon lists each size as a separate ASIN and a size mismatch
// sends a buyer to the wrong television. Renewed listings, third-party bundles
// (TV plus mount, soundbar or warranty) and non-US Amazon domains were all
// rejected — several of those outranked the real listing in search results.
//
// Twelve products still carry no ASIN, in two groups:
// - 6 are usAvailable: false and correctly have none (the Philips models and
//   the Panasonic Z90B, none of which are sold on US Amazon).
// - 6 are US products with genuinely no Amazon listing: the LG G6 in any size
//   and the Sony BRAVIA 9 II (both flagship halo products routed through
//   LG.com/Sony dealers and Best Buy), the LG W6 at 77 inches (only the 83 is
//   listed), the Samsung S95H (only an unverified reseller entry), the Samsung
//   R85H at 65 inches (only the 55 is listed), and the Hisense U9QG (no US
//   listing for the television in any size). Each records the reason in its
//   cons. AmazonButton renders "Check Price at Retailers" for these.
//
// Corrections made during the backfill, because the ASIN search surfaced
// facts that contradicted what had been published:
// - LG QNED90, QNED85 and QNED82 do not exist in LG's 2026 US lineup, which
//   is QNED92B and QNED84B only. Sizes and prices matched the real SKUs
//   exactly, so these were misnamed rather than wrong products and were
//   renamed in place. Their old URLs are 301-redirected in next.config.js.
//   (QNED85B does exist — in Europe and the UK, not the US.)
// - Amazon rebranded its television line from Fire TV Omni to Amazon Ember in
//   April 2026. Same products, same ASINs, new names.
// - Hisense QD7 runs Fire TV, not Google TV, and its model number is 65QD7QF.
// - TCL Q6 at 65 inches is the 2024 65Q651G; TCL has released no 2025 or 2026
//   65-inch Q6, so it is current by default rather than by refresh. Its price
//   was corrected from $599.99 to the verified street range.
// - Sharp AQUOS QLED is a 2025 model (4T-C55HP7050U), not 2026.
// - Toshiba M550 and the Amazon Ember QLED both carried prices that did not
//   match the product actually being linked, and were corrected.
// ---------------------------------------------------------------------------

export const tvProducts: Product[] = raw as Product[];
