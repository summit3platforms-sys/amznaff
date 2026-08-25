import raw from './gps-running-watches.json';
import { Product } from '../types';

// ------------------------------------------------------------------
// GPS Running Watches category — researched August 2026.
//
// Product data lives in gps-running-watches.json, not here, so the admin
// dashboard (/admin/products) can read and rewrite it directly. This file
// is the typed accessor layer plus the sourcing notes that JSON cannot hold.
//
// Sourcing: manufacturer product and spec pages first (garmin.com,
// coros.com, us.suunto.com, polar.com/us-en), cross-checked against
// DC Rainmaker in-depth reviews, the5krunner spec sheets, the garminrumors
// spec wiki (wiki.garminrumors.com), OutdoorGearLab, iRunFar, The Run
// Testers, Tom's Guide, Wareable and Android Police. Prices are US list
// prices confirmed on the manufacturer's own US store or, where that page
// renders its price client-side, on two independent review outlets.
// ASINs were read from amazon.com /dp/<ASIN> URLs as they appeared in
// search results and inside affiliate redirects on third-party review
// sites, each cross-checked against a second independent source. Amazon
// product pages were NOT scraped — that would violate the Associates
// Operating Agreement. Confirm each ASIN in SiteStripe before relying on it.
//
// ASIN confidence, stated honestly:
//   - Variant-level, two or more independent sources: coros-pace-4
//     (B0FYGTCX83), coros-apex-4 (B0FR92Z7C6, 42 mm), amazfit-t-rex-3-pro
//     (B0FM2DDQ21, 48 mm), garmin-fenix-8-pro (B0FPMHZYMN, 47 mm AMOLED),
//     suunto-race-2 (B0FJYB53ZB, stainless steel), suunto-vertical-2
//     (B0FNMNMBHN, stainless steel), coros-vertix-2s (B0D12865TW).
//   - Model-level confirmed by two sources, child ASIN chosen from the
//     source whose listing title named the variant: garmin-forerunner-970
//     (B0F8QWPVNK), garmin-forerunner-570 (B0F8QZF3GS, 47 mm black),
//     garmin-instinct-3-solar (B0DSG9VCRH, 45 mm black). These families
//     carry several colour child ASINs; verify the colourway in SiteStripe.
//   - Deliberately EMPTY because only one source could be found:
//     garmin-forerunner-170 and polar-grit-x2. Both are US-available and
//     priced; they simply get no buy button until an ASIN is confirmed.
//
// Category-specific traps recorded in the data:
//
// 1. THE GNSS-MODE BATTERY TRAP. Every headline battery figure in this
//    category is the slowest, least accurate satellite mode. The COROS
//    VERTIX 2S is sold on "118 hours of GPS" — that is single-band standard
//    GPS; the dual-frequency mode you bought it for is 43 h, a 63% cut.
//    The Amazfit T-Rex 3 Pro's 85 h is power-saving GPS; accurate dual-band
//    is 38 h. Polar's 90 h is Eco mode; Performance is 30 h. Every product
//    therefore carries THREE separate battery specs —
//    batterySmartwatchDays, batteryGpsSingleBandHours and
//    batteryGpsMultibandHours — plus a batteryAlwaysOn string, and
//    "Battery Honesty" is the category's trap score dimension.
//
// 2. THE AMOLED ALWAYS-ON TAX. AMOLED watches quote smartwatch battery
//    with the screen off between glances. Always-on takes the Forerunner
//    170 from 10 days to 4, the COROS PACE 4 from 19 days to 6, the
//    Forerunner 970 from 15 days to 7 and its multiband GPS from 21 h to
//    15 h, and the fenix 8 Pro 47 mm from 15 days to 8. The MIP watches
//    (Instinct 3 Solar, APEX 4, VERTIX 2S) pay no such tax and that is
//    recorded explicitly in batteryAlwaysOn.
//
// 3. MULTIBAND IS A TIER, NOT A GIVEN. Multiband L1+L5 is the difference
//    between a usable trace in a city or under canopy and a useless one.
//    The $299.99 Forerunner 170 does NOT have it — DC Rainmaker's hands-on
//    and the garminrumors spec wiki both confirm single-band only, while
//    the5krunner's spec page loosely calls it "multi-frequency". That
//    conflict is written into the gnssBands value rather than resolved
//    silently. The $249 COROS PACE 4 does have it.
//
// 4. MAPS VS BREADCRUMBS, AND WHAT THEY COST. A "navigation" bullet often
//    means a breadcrumb line. Real routable offline topo maps are on the
//    Forerunner 970, fenix 8 Pro, APEX 4, VERTIX 2S, both Suuntos, Grit X2
//    and T-Rex 3 Pro; the Forerunner 170, 570, PACE 4 and Instinct 3 Solar
//    have none. Garmin's $549.99 Forerunner 570 still has no maps. Suunto
//    and Amazfit maps are free but must be pulled down over Wi-Fi region by
//    region, and Android Police called the Zepp map transfer "messy and
//    time-consuming". Garmin Connect+ resells 3D topo and Trails+ routing.
//
// 5. SUBSCRIPTIONS AND UPSELLS. Garmin Connect+ is $6.99/mo but no core
//    training metric sits behind it; the real Garmin upsells are the
//    HRM-600 chest strap, without which the Forerunner 970's headline
//    Running Economy and Step Speed Loss metrics do not exist at all, and
//    the fenix 8 Pro's $7.99–$29.99/mo satellite/LTE plan, without which
//    the feature that names the watch is dead. COROS, Polar and Suunto
//    have no paid tier at all; Amazfit's Zepp Aura AI layer is paid but
//    does not gate training data. Recorded in trainingPlatform.
//
// 6. WRIST HR AND STRAPS. DC Rainmaker's Grit X2 testing "missed every
//    single interval" on 400 m repeats and logged 3,100 m for a ~1,900 m
//    open-water swim — recorded in its cons and its heartRate score.
//    Separately, only Garmin supports ANT+; COROS, Polar, Suunto and
//    Amazfit are Bluetooth-only, which rules out ANT+-only power meters.
//    Recorded per product in externalSensors.
//
// 7. GENERATIONAL TIMING. Garmin announced the fenix 9 / fenix 9 Pro /
//    Enduro 4 line on 25 August 2026, the day this data was compiled, with
//    no confirmed US pricing yet. The fenix 8 Pro is kept here because it
//    is the priced, verifiable, in-market flagship; its cons say so.
//
// Where sources genuinely conflict, the conflict is recorded in the spec
// value itself rather than silently resolved: the Forerunner 970's
// multiband figure (21 h the5krunner vs 19 h garminrumors wiki), the
// VERTIX 2S smartwatch life (40 days spec sheet vs 36 days on COROS'
// current product page), the Instinct 3 Solar's GPS-only figure (40 h vs
// 50 h) and its storage (32 GB per the wiki vs ~120–128 MB per DC
// Rainmaker and Tom's Guide), and the Suunto Race 2's smartwatch life
// (18 days Suunto vs 16 days DC Rainmaker).
// ------------------------------------------------------------------

export const gpsRunningWatchProducts: Product[] = raw as Product[];
