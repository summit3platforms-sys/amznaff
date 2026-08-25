import raw from './smartwatches.json';
import { Product } from '../types';

// ------------------------------------------------------------------
// Smartwatches category — researched August 2026.
//
// Product data lives in smartwatches.json, not here, so the admin dashboard
// (/admin/products) can read and rewrite it directly. This file is the
// typed accessor layer plus the sourcing notes that JSON cannot hold.
//
// Sourcing: manufacturer pages and first-party documentation first —
// apple.com/watch/compare and Apple's Watch buy pages; samsung.com/us
// Galaxy Watch9 and Galaxy Watch Ultra2 product pages; store.google.com
// for Pixel Watch 5, Fitbit Sense 2 and Fitbit Versa 4; oneplus.com/us;
// withings.com/us/en; mobvoi.com TicWatch Atlas spec page; Zepp/Amazfit
// press release and us.amazfit.com/pages/zepp-aura; garmin.com press room
// and the Venu 4 product pages; consumer.huawei.com (Canada) for the
// Watch GT 6, which has no US page at all. Cross-checks and real-world
// battery figures from GSMArena's Galaxy Watch9 review, Android Central's
// TicWatch Atlas review, Engadget (Unpacked July 2026 and Apple Watch
// battery service pricing), droid-life (Pixel Watch 5 pricing), 9to5Mac
// (ITC/Masimo), 9to5Google (Fitbit line status), Samsung Mobile Press
// (US blood-pressure rollout) and Best Buy listings for exact SKU prices.
//
// ASINs were read from amazon.com /dp/<ASIN> URLs as they appeared in
// search results and on third-party price-history sites, each cross-
// checked against a second independent source. Amazon product pages
// were NOT scraped — that would violate the Associates Operating
// Agreement. Confirm each ASIN in SiteStripe before relying on it.
//
// ASIN cross-check status, honestly stated:
//  - Verified on camelcamelcamel AND an amazon.com search-result URL:
//    Apple Watch Series 11 (B0FQFL8PZ5), Apple Watch SE 3 (B0FQFW7M9H),
//    Apple Watch Ultra 3 (B0FQFHVZYL), Withings ScanWatch Nova Brilliant
//    (B0DPLF8TX8), TicWatch Atlas (B0DG2NL4SZ), Amazfit Bip 6
//    (B0DYJN3ZM8), Fitbit Sense 2 (B0B4N2T7GL), Garmin Venu 4 41mm
//    (B0FRGFDWDQ), OnePlus Watch 3 43mm (B0FDK2QHGH).
//  - Launched in August 2026 and therefore not yet carried by any
//    price-history site: Galaxy Watch9 44mm BT (B0H1D9TSCJ), Galaxy Watch
//    Ultra2 47mm (B0H1D46MPG), Pixel Watch 5 41mm Wi-Fi (B0H7X25DRT).
//    These were cross-checked instead against the manufacturers' own SKU
//    pages (Samsung SM-L350NZKAXAA, store.google.com) and Best Buy
//    listings confirming the exact variant and price. Re-confirm in
//    SiteStripe.
//  - B0FDK2QHGH is a variation parent: camelcamelcamel titles it "Black
//    Steel" and amazon.com search results title it "Silver Steel". Both
//    colours are recorded in colorOptions.
//
// Category-specific traps recorded in the data:
//
// 1. PHONE LOCK-IN IS THE CATEGORY, AND IT IS BURIED. Every product has a
//    `phoneCompatibility` spec that spells out iOS vs Android vs the
//    maker's own phone, and an `ecosystemFreedom` score (the category's
//    trap dimension). Apple Watch is iPhone-only, permanently. Galaxy
//    Watch will not pair with an iPhone at all AND loses ECG and blood
//    pressure on any non-Samsung Android, because Samsung Health Monitor
//    only installs on Galaxy phones — it also loses SmartThings camera
//    feeds, Camera Controller, DND/bedtime sync and audio messages.
//    Pixel Watch is Android-only but does NOT gate health features to
//    Pixel phones. Withings, Garmin, Amazfit and Fitbit are the only
//    genuinely neutral options and score 8.5-9.5 accordingly.
//
// 2. BATTERY CLAIMS AND THE ASSUMPTION UNDERNEATH THEM. Every product
//    carries both a numeric `batteryHours` and a `batteryAssumption`
//    string naming the always-on-display state, LTE, workouts and sleep
//    tracking. Apple's 24 h assumes AOD on, one 60-min workout and NO
//    sleep tracking — sleep tracking forces a second daily charge.
//    Huawei's 21-day headline becomes 7 days with AOD on and 40 hours in
//    sport mode; all four of Huawei's own figures are recorded. TicWatch
//    Atlas's 45-day "Essential Mode" turns Wear OS off entirely. Garmin's
//    10 days is with AOD off. Samsung publishes NO hours figure at all for
//    the Galaxy Watch9, so the value stored is GSMArena's measured ~24 h,
//    labelled as such. Galaxy Watch Ultra2 is the one maker here that
//    quotes its 60 h figure with the always-on display ON.
//
// 3. SUBSCRIPTION WALLS. Recorded per product in `subscription`.
//    Google Health Premium (the Fitbit app is now the Google Health app)
//    gates Daily Readiness Score, the workout library and Google Health
//    Coach on Fitbit Sense 2 and on Pixel Watch 5 — 3 months included,
//    then paid. Garmin Connect+ is $6.99/mo for Active Intelligence and
//    premium coaching on a $549.99 watch. Zepp Aura is $11.99/mo or
//    $69.99/yr after a 14-day trial and caps the free tier at one AI
//    message per day with no weekly/monthly sleep analysis. Withings+ is
//    genuinely optional — no baseline metric is withheld. Apple charges
//    for nothing except optional Fitness+.
//
// 4. WHICH HEALTH SENSORS ARE ACTUALLY ENABLED IN THE US.
//    `healthSensorsUS` records what is live, not what the silicon can do.
//    Apple's Blood Oxygen returned on 14 Aug 2025 as a redesigned feature
//    that samples on the watch and CALCULATES ON THE PAIRED IPHONE; the
//    ITC closed the Masimo import-ban case in Apple's favour on 17 Apr
//    2026 but the iPhone-side calculation remains. Apple's hypertension
//    and sleep apnea notifications are FDA-cleared. Samsung's blood
//    pressure began a phased US rollout on 31 Mar 2026 but is NOT
//    FDA-cleared, needs an upper-arm cuff to re-calibrate every 28 days,
//    and runs through the Galaxy-phone-only Samsung Health Monitor app.
//    Pixel Watch 5's headline blood-pressure and insulin-resistance
//    features were announced as "coming this fall" — not shipping at the
//    20 Aug 2026 launch, with no published FDA clearance. OnePlus,
//    TicWatch, Amazfit and Huawei have NO cleared health feature at all.
//
// 5. LTE IS A DIFFERENT SKU, A DIFFERENT PRICE AND A DIFFERENT ASIN.
//    Recorded in `lteOption`. Series 11 +$100, SE 3 +$50, Galaxy Watch9
//    roughly +$50, Pixel Watch 5 +$100 (and Google Fi's included 2 years
//    of data still does not allow calling over LTE). Apple Watch Ultra 3
//    and Galaxy Watch Ultra2 include cellular in the base price. OnePlus,
//    TicWatch, Withings, Amazfit, Fitbit, Garmin Venu 4 and Huawei have no
//    US LTE variant at all. A carrier line is extra in every case.
//
// 6. BATTERY REPLACEMENT AND REPAIRABILITY. Recorded in `batteryService`.
//    Apple is the outlier that will actually do it: a flat $99 out-of-
//    warranty battery service, and AppleCare+ only covers the battery
//    below 80% health. Samsung, Google (both Pixel Watch and Fitbit),
//    OnePlus, Mobvoi, Amazfit and Garmin publish no consumer battery-
//    replacement service — the practical outcome is a whole-unit swap.
//
// 7. "APPS" IS NOT ONE THING. `appEcosystem` separates real stores from
//    marketing. watchOS and Wear OS (Galaxy, Pixel, OnePlus, TicWatch)
//    have genuine third-party stores. Garmin's Connect IQ is real but
//    fitness-skewed. Fitbit OS has effectively nothing: Google shut Fitbit
//    Studio in 2023, leaving Sense 2 and Versa 4 with third-party watch
//    faces but no third-party apps, and EU users lost even the faces in
//    2024. Zepp OS and HarmonyOS are closed. Withings has no app layer at
//    all. TicWatch Atlas has the Play Store but is stranded on Wear OS 4
//    with no Google Assistant and no Gemini.
//
// Products considered and dropped: Xiaomi Watch S4 (no confirmable
// current US price or first-party US channel); Fitbit Versa 4 (kept
// Sense 2 instead — it is the only Fitbit watch with an ECG); Galaxy
// Watch9 Classic (Samsung shipped only two watches at Unpacked July 2026);
// Fitbit Air (a displayless band, not a smartwatch); Garmin Forerunner
// and fenix lines and Coros/Polar/Suunto (dedicated multisport watches,
// a separate category). Huawei Watch GT 6 is the single non-US entry and
// is marked usAvailable: false with an empty ASIN; its price is a USD
// conversion of the roughly EUR 260 European price, for comparison only.
//
// Specs that no manufacturer publishes are written as honest strings in
// the spec value ("Peak brightness is not published by OnePlus"), and
// where sources genuinely conflict the conflict is recorded in the spec
// value itself rather than silently resolved — see Withings ScanWatch
// Nova Brilliant battery life (35 days on Withings' page vs 30 days on
// the Amazon listing) and OnePlus Watch 3 iOS support (OnePlus and the
// Amazon title say Android only; Smartprix's sheet claims iOS).
// ------------------------------------------------------------------

export const smartwatchProducts: Product[] = raw as Product[];
