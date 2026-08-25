import raw from './fitness-trackers.json';
import { Product } from '../types';

// ---------------------------------------------------------------------------
// Fitness Trackers category — researched August 2026.
//
// Product data lives in fitness-trackers.json, not here, so the admin dashboard
// (/admin/products) can read and rewrite it directly. This file is the typed
// accessor layer plus the sourcing notes that JSON cannot hold.
//
// Scope: wrist bands and tracker-class wearables only. Full smartwatches
// (Galaxy Watch, Pixel Watch, Apple Watch) and dedicated GPS running watches
// (Forerunner, vivoactive) are separate categories. Screenless recovery bands
// — WHOOP, Fitbit Air, Amazfit Helio Strap, Polar Loop — are in scope because
// they are the fastest-growing part of the tracker market and because they
// carry the category's defining trap.
//
// Sourcing: specifications come from first-party pages and spec sheets
// (store.google.com Fitbit Charge 6 / Inspire 3 tech specs, blog.google's
// Fitbit Air announcement, garmin.com's vivosmart 5 press release,
// us.amazfit.com, mi.com Global, news.samsung.com, polar.com/us-en/loop,
// withings.com US shop, whoop.com press center and membership pages),
// cross-checked against independent reviews and reporting (Tom's Guide,
// Engadget, Android Central, Android Authority, Wareable, TechRadar,
// MassDevice/STAT on the FDA action against WHOOP, and the FDA's own warning
// letter index). Heart-rate accuracy claims are grounded in peer-reviewed
// validation work (MDPI Bioengineering 10(2):254; JMIR Cardio 2025;e67110),
// not in vendor marketing. ASINs were read from amazon.com /dp/<ASIN> URLs as
// they appeared in search results and on third-party price-history sites
// (camelcamelcamel), each cross-checked against a second independent source.
// Amazon product pages were NOT scraped — that would violate the Associates
// Operating Agreement. Confirm each ASIN in SiteStripe before relying on it
// for revenue. Two caveats worth knowing: the Fitbit Air sells under several
// colour-specific ASINs (B0GTMVZB39 is the Lavender variant; B0GTMTZF3V and
// B0GTMJF7PV also appear in retail coverage at the same $99.99), and the
// Xiaomi Smart Band 10 ASIN is a "Global Version" import listing rather than a
// US-warranty SKU.
//
// Category-specific traps recorded in the data:
//
// 1. SUBSCRIPTION LOCK-IN — the defining trap. WHOOP has no purchase price at
//    all: the hardware is not sold separately at any tier, Peak is $239/year
//    and Life (the only tier with the MG and its FDA-cleared ECG) is
//    $359/year, and WHOOP states it stops collecting, uploading and analysing
//    data once the membership ends. The cheapest $199 One tier quietly ships a
//    certified pre-owned band and the old wired charger rather than the
//    wireless PowerPack. On the Fitbit side, Fitbit Premium became Google
//    Health Premium in May 2026 and rose from $79.99 to $99.99/year ($9.99/mo);
//    Daily Readiness Score, the Sleep Score breakdown, the Stress Management
//    breakdown, the workout library and the Gemini/Google Health Coach layer
//    sit behind it, with three months bundled so the bill lands after the
//    return window. Every product carries a `subscriptionModel` string saying
//    precisely what is free and what is not, plus a numeric
//    `annualSubscriptionUsd` so the comparison tables can sort on it. The
//    `subscriptionFreedom` score is the category's trap dimension.
//
// 2. CONNECTED GPS vs BUILT-IN GPS — the most common mis-buy. Only two devices
//    here have a GPS chip: the Fitbit Charge 6 (GPS + GLONASS) and the $79.99
//    Amazfit Bip 6 (five-system GNSS with offline maps). Everything else —
//    including the $149.99 Garmin vivosmart 5, the $249.95 Withings ScanWatch
//    Light and both WHOOPs — borrows the phone's GPS or has no GPS story at
//    all. Xiaomi does not even list GNSS on the Smart Band 10 spec sheet, and
//    reviewers measured the Galaxy Fit3 undermeasuring a known 5km track by
//    50m+ when phone-free. The `gpsType` spec says unambiguously which is
//    which and what you lose without a phone; `gpsIndependence` scores it.
//
// 3. BATTERY CLAIMS AND THEIR ASSUMPTIONS. Every headline figure here assumes
//    something switched off. Google's Charge 6 spec sheet states outright that
//    always-on display and SpO2 "will require more frequent charging"; Samsung
//    prints "with Always On Display turned off (default setting)" next to the
//    13-day claim and independent testing returned 7–10; Xiaomi publishes all
//    three of 21 days typical / 9 with AOD / 8 heavy-load; WHOOP's "14+ days"
//    is the 4-day band plus the PowerPack accessory. Rather than restate the
//    marketing number alone, every product carries a separate
//    `batteryAssumptions` string spelling out the conditions.
//
// 4. WRIST OPTICAL HEART RATE AT HIGH INTENSITY. No maker discloses this.
//    Peer-reviewed validation (MDPI Bioengineering 10(2):254, 1,286 paired
//    samples) found wrist PPG accuracy holds to about 150bpm and deteriorates
//    sharply above it, with Fitbit and Samsung units underestimating during
//    intense work, and concluded that "an effective intervention is required to
//    register accurate HR readings at high-intensity levels." This matters most
//    for the devices whose entire product is a derived score — WHOOP Strain,
//    Body Battery, PAI — and it is recorded in their cons rather than buried.
//
// 5. FDA CLEARANCE, CLAIMED vs HELD. WHOOP MG's ECG and AFib detection are
//    FDA-cleared. Its Blood Pressure Insights feature is not: the FDA issued
//    WHOOP a warning letter in July 2025 for marketing it without
//    authorisation, and closed the letter only in June 2026 after WHOOP
//    relabelled it as a wellness feature. Fitbit's ECG app is FDA-cleared and
//    present on the Charge 6, though Google's current Charge 6 spec sheet does
//    not restate the clearance. Withings sells cardiologist ECG review under
//    Withings+, but the ScanWatch *Light* has no ECG hardware, so that benefit
//    does not apply to the model priced here. `ecgAfibStatus` records the real
//    position for every device.
//
// 6. PROPRIETARY CHARGERS AND STRAPS. Every device here except the Amazfit
//    Bip 6 uses a proprietary charger, and several are mutually incompatible
//    within the same brand (the Charge 5/6/Luxe cable does not fit an Inspire
//    3). Samsung ships no wall adapter; Amazfit's own US page for the Bip 6
//    states a cable is not included at all, which is recorded as written
//    rather than assumed away. On straps, the Fitbit Air is the worst case —
//    Google's replacements start at $34.99 and no third-party straps have
//    appeared — while the Bip 6's standard 22mm quick-release fitting makes
//    replacements a few dollars.
//
// 7. DATA PORTABILITY. Garmin, Polar and Withings let you export your own
//    history in documented formats (GPX/TCX/CSV plus public APIs). Fitbit
//    requires a Google Takeout archive. Xiaomi and Amazfit publish no bulk
//    export at all. WHOOP's export exists only while the membership does.
//    `dataExport` records this per device.
//
// 8. PLATFORM LOCK-OUT. The Samsung Galaxy Fit3 has no iOS app — it is
//    Android-only, which disqualifies it outright for iPhone owners and is
//    stated in `phoneCompatibility` rather than left to be discovered after
//    purchase. Fitbit devices now require a Google account to set up at all.
//
// Where sources genuinely conflict, the conflict is recorded in the spec value
// itself rather than silently resolved — see the Withings ScanWatch Light's
// battery life (30 vs 35 days) and its connected-GPS support.
// ---------------------------------------------------------------------------

export const fitnessTrackerProducts: Product[] = raw as Product[];
