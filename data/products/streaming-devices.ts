import raw from './streaming-devices.json';
import { Product } from '../types';

// ---------------------------------------------------------------------------
// Streaming Devices category — streaming sticks and set-top boxes currently
// sold in the US (14 products across 6 brands, researched August 2026).
//
// Product data lives in streaming-devices.json, not here, so the admin
// dashboard (/admin/products) can read and rewrite it directly — see
// lib/github-content.ts. This file is the typed accessor layer plus the
// sourcing notes that JSON cannot hold.
//
// Sourcing: specs come from first-party documentation wherever it exists —
// Amazon's developer device-specification pages, Roku's developer hardware
// table and support articles, apple.com tech specs, and store.google.com
// tech specs — cross-checked against reputable review outlets (RTINGS,
// The Verge, Tom's Guide, TechRadar, PCWorld, What Hi-Fi, Android
// Authority, FlatpanelsHD, AFTVnews). Where a manufacturer does not publish
// a figure, the field holds an honest string note rather than a guess.
//
// ASINs: every ASIN below was taken from an amazon.com /dp/<ASIN> URL as it
// appeared in search results or on third-party price-history sites, and
// cross-checked against a second independent source. Amazon product pages
// were NOT scraped — that would violate the Associates Operating Agreement.
// Confirm each ASIN in SiteStripe before relying on it for revenue.
//
// Scope decisions made during research (all deliberate):
// - Fire TV Stick 4K (2nd Gen) and Fire TV Stick HD (2024) are superseded by
//   the 4K Plus and the 2026 HD respectively — excluded as stale SKUs.
// - Fire TV Stick Lite and Fire TV Stick (3rd Gen) were discontinued in late
//   2024. Some roundups still list them; they are not included here.
// - Roku Express and Express 4K+ were discontinued in April 2025 and replaced
//   by the Streaming Stick and Streaming Stick Plus. Roku Streaming Stick 4K+
//   and Roku Ultra LT are likewise no longer in Roku's line. All excluded.
// - The Google TV Streamer's "Hazel" colour has its own Amazon ASIN, but it is
//   the same hardware as "Porcelain". It is recorded as a colour option rather
//   than a second product, to avoid publishing two near-duplicate pages that
//   would compete with each other in search.
// - NVIDIA SHIELD TV (the non-Pro "tube") is excluded: NVIDIA confirmed in
//   July 2026 that it is out of stock with no availability update, and B&H
//   lists it as discontinued. The SHIELD TV Pro remains available and is
//   included, with its age and end-of-life risk stated plainly in its cons.
// - onn. 4K Pro (2026) is included with `usAvailable: false` and no ASIN. It
//   is the strongest price-to-performance device in the category and is
//   actively cross-shopped, but onn. is a Walmart house brand with no
//   authorised Amazon listing — every onn. listing on Amazon is a third-party
//   reseller. AmazonButton renders a non-link state for it. Same treatment as
//   the non-US Philips and Panasonic TVs in the TV category.
// - Xiaomi TV Box S (3rd Gen) is sold on Amazon US only as a grey-market
//   import and is not officially marketed in the US — excluded.
// - Dune HD Homatics Box R 4K Plus and Formuler Z11 Pro Max are genuinely on
//   Amazon but are niche enthusiast/IPTV boxes with unverifiable current
//   pricing — excluded rather than published with guessed prices.
//
// Pricing: `price` is the current official US list price. For Roku, that
// reflects the across-the-board increase of 25 July 2026 (memory component
// shortages); Roku is simultaneously running a promotion at the old prices,
// which is noted in each Roku product's cons. For Apple, `msrp` holds the
// pre-June-2026 price so the size of the increase stays visible. Street
// prices — especially on Fire TV sticks — move constantly and are not
// recorded here.
// ---------------------------------------------------------------------------

export const streamingDeviceProducts: Product[] = raw as Product[];
