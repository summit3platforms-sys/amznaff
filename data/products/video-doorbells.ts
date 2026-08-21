import raw from './video-doorbells.json';
import { Product } from '../types';

// ---------------------------------------------------------------------------
// Video Doorbells category — researched August 2026.
//
// Product data lives in video-doorbells.json, not here, so the admin dashboard
// (/admin/products) can read and rewrite it directly. This file is the typed
// accessor layer plus the sourcing notes that JSON cannot hold.
//
// Sourcing: resolutions, aspect ratios, fields of view, Wi-Fi bands, wiring
// voltages, battery claims and storage arrangements come from first-party
// manufacturer product, spec and support pages (ring.com and ring.com/eu,
// store.google.com, eufy.com plus eufy's own E340 specification support
// article, us.aqara.com, us.arlo.com and arlo.com/en_gb, wyze.com,
// reolink.com and store.reolink.com, support.blinkforhome.com,
// simplisafe.com and support.simplisafe.com, tp-link.com/us, lorex.com),
// cross-checked against independent outlets (Tom's Guide, SafeWise,
// Security.org, Linkd Home, Forbes, TechRadar, Gearbrain, aboutamazon.com)
// and against retailer spec sheets (Best Buy, Home Depot, B&H, BJ's, Newegg,
// BrandsMart, ADI Global). ASINs were read from amazon.com /dp/<ASIN> URLs as
// they appeared in search results, in review articles' outbound links and on
// third-party price-history and retailer sites (camelcamelcamel, Best Buy,
// Home Depot, manuals.plus), each cross-checked against a second independent
// source. Amazon product pages were NOT scraped — that would violate the
// Associates Operating Agreement. Confirm each ASIN in SiteStripe before
// relying on it for revenue.
//
// Category-specific traps recorded in the data. In this category the spec
// sheet and the marketing disagree more often than they agree:
//
//  1. "2K" AND "4K" ARE MARKETING WORDS, NOT PIXEL COUNTS. Every doorbell
//     here that shoots a square frame counts total pixels, not width. Ring's
//     "Retinal 2K" is 1920 x 1920, and Blink's $39.99 "2K+" is the identical
//     1920 x 1920 — Ring charges $99.99 for it. Ring's "Retinal 4K" is
//     2880 x 2880, which is 960 pixels narrower than UHD. Arlo's 2K is
//     1944 x 1944. Wyze's 2K is 2048 x 1536 in 4:3, i.e. 3.1MP. Meanwhile
//     the genuinely higher-resolution sensors sit on cheaper products:
//     Reolink and Tapo both shoot a real 5MP 2560 x 1920, and the Lorex is
//     8MP. The `resolution` spec always carries the actual pixel figure and
//     the source that published it, and says so when the maker publishes
//     none (Google gives no pixel count for the Nest's "2K HDR" at all).
//
//  2. ASPECT RATIO DECIDES WHETHER YOU SEE THE PARCEL. A 1:1 or 3:4 frame
//     shows a visitor head-to-toe and the doormat; 16:9 and 4:3 do not.
//     SimpliSafe sells a 16:9 1080p camera for $169. Wyze is 4:3 at 135°
//     horizontal. Reolink is the strangest case in the set: the same product
//     name ships 4:3 in black and 3:4 in white, so the colour you pick
//     changes the framing. eufy sidesteps the problem with a second
//     downward-facing lens. `aspectRatio` records each of these, including
//     the two live contradictions — Google's own page says 1:1 while Tom's
//     Guide's review says 3:4, and Aqara lists a 4:3 ratio beside a
//     16:9 sensor output on the same page.
//
//  3. THE SUBSCRIPTION IS THE PRODUCT. `subscriptionFreedom` is this
//     category's trap score dimension, and `subscriptionFree` /
//     `paywalledFeatures` are the specs behind it. With no plan, a Ring
//     doorbell — including the $249.99 4K Pro — records nothing and fires no
//     person or package alerts; it is a live-view intercom. Arlo is worse:
//     Tom's Guide describes the unsubscribed doorbell as "stripped to a
//     grossly basic live view and motion detector functionality", and Arlo
//     Secure has risen from $2.99 to $4.99 to $7.99 a month for one camera.
//     SimpliSafe's cheapest recording plan is $9.99/mo. Wyze paywalls person
//     and package detection at $2.99/mo but leaves 24/7 microSD recording
//     free. Google is the outlier among the cloud brands: person, package,
//     vehicle and animal alerts plus six hours of event previews cost
//     nothing. eufy, Aqara, Reolink, Tapo and Lorex charge nothing at all.
//
//  4. BATTERY FIGURES WITHOUT AN EVENT COUNT ARE NOT SPECIFICATIONS. Ring
//     publishes no runtime number whatsoever for either battery doorbell in
//     this set. Arlo claims "up to 6 months, dependent on usage" with no
//     event count. Aqara claims five months on six AA cells, again with no
//     count. eufy publishes nothing, and Linkd Home's 30-day heavy-use test
//     projected roughly 78 days. SafeWise's tester recharged the $249.99
//     Ring 4K Pro about every two weeks on a busy porch while Tom's Guide
//     lost under 25% in a fortnight on a quiet one — same product, an order
//     of magnitude apart. Only TP-Link states the assumption behind its
//     number: 180 days at 10-20 events a day. `batteryLife` records the
//     claim, the missing event count, and the measured results side by side.
//
//  5. THE TRANSFORMER IS THE REAL COMPATIBILITY GATE. Wired models split
//     into two camps and the split is invisible in marketing. Google's Nest
//     demands 16-24VAC at 10-40VA, Wyze demands 16-24VAC at 10VA+, and the
//     Lorex demands 16-24VAC — none will run on the 8-10VAC transformer
//     common in older US houses. Ring accepts 8-24VAC, SimpliSafe 8-24VAC at
//     30VA max, Blink 12-24VAC, Aqara 12-24VAC, Reolink 12-24VAC and it
//     ships an indoor plug-in adapter so no transformer is needed at all.
//     Two further gotchas live in `chimeIncluded`: Blink's own FAQ states the
//     Wired Doorbell 2K+ "does not ring your existing in-home mechanical
//     chime" and requires a bypass cable that disables it, and SimpliSafe
//     supports mechanical chimes only, not digital ones.
//
//  6. "LOCAL STORAGE" OFTEN MEANS "BUY A SECOND BOX". Aqara, Reolink, Wyze,
//     Lorex and Tapo record to a card the buyer controls (Lorex ships one
//     fitted; Tapo's card goes in the included hub). eufy is the only one
//     with storage inside the doorbell itself — 8GB of eMMC, expandable only
//     by adding a HomeBase S280/S380 sold separately. Blink needs a Sync
//     Module 2 or Sync Module XR, neither of which is in the $39.99 box.
//     Arlo needs a SmartHub or Base Station. Ring, Nest and SimpliSafe have
//     no local storage path at any price.
//
//  7. MATTER ON A DOORBELL DOES NOT MEAN VIDEO. Matter carries no camera
//     stream, so a Matter badge on a doorbell refers to something else
//     entirely. The Aqara G410 is the only Matter device here and its Matter
//     role is as a controller and Thread border router for other people's
//     gear — its own video reaches Apple Home through HomeKit Secure Video,
//     not Matter, and HKSV downgrades the stream: Aqara states "when using
//     the HSV, the maximum resolution is 1200p". Real Apple Home support in
//     this set is Aqara (HKSV) and Arlo (Apple Home for 2nd-gen devices,
//     confirmed by Arlo's community manager in March 2025 after a long
//     delay). Ring, Nest, eufy, Wyze, Reolink, Blink, SimpliSafe, Tapo and
//     Lorex have none.
//
//  8. 5GHz WI-FI IS THE EXCEPTION, NOT THE RULE. Only five of the twelve
//     have a 5GHz radio: the Ring 4K Pro (Wi-Fi 6, and it wants 15 Mbps
//     upload), the Nest 3rd gen (802.11ac), the Aqara G410, the Reolink and
//     the Lorex. The $99.99 Ring Battery Doorbell 2K is single-band
//     Wi-Fi 4 while its own $249.99 stablemate is dual-band Wi-Fi 6.
//     Everything else — Arlo, eufy, Wyze, Blink, SimpliSafe, Tapo — is
//     2.4GHz only, which is recorded verbatim in `wifiBands`.
//
// Where sources genuinely conflict, the conflict is recorded in the spec
// value itself rather than silently resolved — eufy's product page and
// eufy's own support article disagree on both the E340's wiring voltage
// (8-24V vs 16-24V) and its sensor resolution (2048 x 1536 vs a retailer's
// 2560 x 1920), and Google's spec page and Tom's Guide disagree on the Nest's
// aspect ratio. Those read as "Sources conflict: …" in the data.
//
// warrantyMonths is the US limited hardware warranty as published by each
// maker: 24 months for Reolink, 12 for everyone else. Two extensions are
// noted in features rather than in the number — Wyze gives 18 months when
// bought direct from wyze.com, and SimpliSafe extends to as much as 3 years
// while a qualifying monitoring plan stays active.
// ---------------------------------------------------------------------------

export const videoDoorbellProducts: Product[] = raw as Product[];
