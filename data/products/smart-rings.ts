import raw from './smart-rings.json';
import { Product } from '../types';

// ---------------------------------------------------------------------------
// Smart Rings category — researched August 2026.
//
// Product data lives in smart-rings.json, not here, so the admin dashboard
// (/admin/products) can read and rewrite it directly. This file is the typed
// accessor layer plus the sourcing notes that JSON cannot hold.
//
// Scope: finger-worn health trackers sold to US consumers and actually
// shipping in August 2026. This is a young, volatile category with an unusual
// amount of vapourware, so every model here was confirmed on the
// manufacturer's own storefront with a live US price before it was included.
// Eleven products, not twelve, is the honest count — see the DROPPED section.
//
// Sourcing: prices and specifications come from first-party storefronts and
// support pages (ouraring.com store pages for Ring 5 / Ring 4 / Ring 4
// Ceramic, ouraring.com/membership and ouraring.com/warranty, samsung.com/us
// Galaxy Ring, ringconn.com product pages for Gen 3 / Gen 2 / Gen 2 Air,
// ultrahuman.com/ring/buy/us, shop.circular.xyz, us.amazfit.com,
// renpho.com). Those were cross-checked against independent reporting and
// hands-on reviews: TechCrunch's Oura Ring 5 review (4 June 2026), Forbes
// (David Phelan) on the Ring 5 price rise, The Gadgeteer's seven-night
// RingConn Gen 3 review, Tom's Guide's three-week Circular Ring 2 review,
// Live Science on the Renpho LYNX, TechRadar and Athletech News on the ITC
// patent case, gadgetsandwearables and TechTimes on Ultrahuman's shipping
// dates, Wikipedia's Galaxy Ring entry for the Android-only requirement, and
// 9to5Google on the Galaxy Ring 2 slipping to 2027.
//
// ASINs were read from amazon.com /dp/<ASIN> URLs as they appeared in search
// results and in the outbound affiliate links of third-party review articles
// (droid-life, Android Authority, Forbes Vetted, Live Science, The Gadgeteer,
// liveworksleep, smartwearables.io, fitnesstechtrends), each cross-checked
// against a second independent source. Amazon product pages were NOT scraped
// — that would violate the Associates Operating Agreement. Confirm each ASIN
// in SiteStripe before relying on it for revenue.
//
// ASIN caveat specific to this category: smart rings are sold as one ASIN per
// size AND per finish, so a single model can carry twenty or more live ASINs.
// The ASIN recorded here is the variant that two independent sources pointed
// at; a buyer clicking through must still pick their own size. Two products
// carry an empty ASIN on purpose: the Oura Ring 5 (US-available direct from
// Oura since 4 June 2026, but no Amazon listing could be confirmed from two
// sources at the time of writing) and the Ultrahuman Ring PRO and Circular
// Ring 2 (both direct-to-consumer only). Empty is correct — inventing an ASIN
// would be worse than losing the buy button.
//
// Category-specific traps recorded in the data:
//
// 1. THE SUBSCRIPTION, AND THE THREE-YEAR PRICE IT HIDES. Oura is the only
//    brand here that charges a recurring fee, and it charges it on every
//    model: $5.99/month or $69.99/year, first month free so the bill lands
//    after the return window. Oura's own FAQ is unusually candid — without a
//    membership "your Oura Ring and Oura App will still function, but the
//    insights, personal health data, and benefits you receive will be much
//    more limited." You keep three headline scores; the 50+ metrics behind
//    them go away. Because a sticker-price comparison is therefore
//    meaningless in this category, every product carries a numeric
//    `threeYearCostUsd` spec — hardware plus 36 months of whatever recurring
//    fee is genuinely required — so the comparison tables can sort on it. A
//    base Oura Ring 5 is $608.97 over three years; a RingConn Gen 2 Air is
//    $199.00 over the same three years. `subscriptionFreedom` is the
//    category's trap score dimension.
//
//    The counter-trap: "no subscription" is now a marketing line and it does
//    not always mean what it says. Ultrahuman advertises no subscription and
//    then sells AFib detection, ovulation tracking and metabolic insight as
//    annual PowerPlugs at $24-$39 each. Circular has no mandatory
//    subscription today but has announced a future premium tier for glucose
//    and blood pressure with neither price nor date. Both are recorded in
//    `subscriptionModel` in the vendor's own terms and then contradicted in
//    the cons.
//
// 2. SIZING IS A ONE-WAY DOOR, AND THE SIZE RANGE IS SHRINKING. Rings cannot
//    be resized, so `sizeRange`, `sizingKit` and `returnExchange` are three
//    separate spec fields rather than a footnote. The findings that matter:
//    the Oura Ring 5 covers only US 6-13 where the Ring 4 covered 4-15 —
//    Oura told TechCrunch the new smaller form factor is harder to
//    manufacture at the extremes, so this generation silently dropped the
//    smallest and largest fingers. The Amazfit Helio Ring is worse: three
//    sizes exist, 8, 10 and 12, and that is the entire catalogue. RingConn
//    and Ultrahuman both warn that their sizes do not map to standard US ring
//    sizes, so an Oura size does not transfer. On the kit itself: Oura,
//    Samsung, RingConn and Ultrahuman all ship a free sizer BEFORE the ring,
//    which adds roughly one to two weeks to delivery; Renpho puts the sizer
//    in the box with the ring; and Circular is the only brand offering a
//    camera-based digital sizing flow that skips the wait entirely (its
//    physical kit is $5). Return windows are where this bites — RingConn and
//    Circular give 14 days, Renpho gives 30, and Oura does not publish a
//    return window on its warranty page at all.
//
// 3. BATTERY CLAIMS AND WHAT THEY ASSUME. Every headline figure assumes
//    something. RingConn's "up to 14 days" on the Gen 3 assumes vibration
//    alerts off — RingConn itself quotes 10-12 with them on, and The
//    Gadgeteer measured 34% remaining after seven days of full use, which
//    extrapolates to about ten. Samsung's "up to 14 days" is seven days of
//    wear plus a charge held in the cradle, and Samsung notes the smallest
//    sizes reach only six. Oura publishes a range, 6-9 days, and states
//    plainly that ring size moves it. Ultrahuman's "45 days" is 15 days plus
//    the PRO charging case. Rather than restate the marketing number alone,
//    every product carries a separate `batteryAssumptions` string.
//
// 4. MEASURED vs INFERRED, AND THE BLOOD-PRESSURE PROBLEM. `sensorReality`
//    records what the hardware actually does. Almost every ring here has the
//    same three sensors — PPG optical, skin temperature, accelerometer — and
//    everything marketed as stress, readiness, recovery or resilience is a
//    score computed from them, not a measurement. SpO2 is a further trap:
//    Oura reports blood oxygen as an overnight figure rather than an all-day
//    continuous trace, while RingConn tracks it continuously. The clearest
//    case is RingConn's Vascular Trends, sold as the world's first vascular
//    feature on a ring: reviewers found in the fine print that it requires an
//    external cuff reading to calibrate before it will show anything, so it
//    trends a number you supplied rather than measuring blood pressure. Oura's
//    Blood Pressure Signals, announced with the Ring 5, is likewise not a
//    cuff-equivalent measurement. Only the Circular Ring 2 has genuine ECG
//    electrodes.
//
// 5. FDA CLEARANCE, CLAIMED vs HELD. `fdaClearance` is a spec field precisely
//    because the marketing in this category is careful never to raise the
//    subject. Of the eleven rings here, exactly one has a clearance: the
//    Circular Ring 2 is FDA-cleared to monitor for irregular heartbeats
//    indicating AFib, per Circular and confirmed in Tom's Guide's review —
//    and that clearance covers the AFib feature, not the other 140
//    "biosignals" it advertises. Oura, Samsung, RingConn, Amazfit and Renpho
//    publish no clearance at all and market everything as general wellness.
//    Ultrahuman sells AFib detection as a paid PowerPlug and no FDA clearance
//    for it appears in the coverage of its US relaunch. Note also that
//    Samsung's FDA-cleared ECG and blood-pressure features are Galaxy WATCH
//    features — the ring has no electrodes and cannot do either.
//
// 6. DURABILITY AND WHAT THE WARRANTY EXCLUDES. Oura's warranty page is
//    explicit that the limited warranty covers manufacturing defects only and
//    NOT "normal wear and tear, such as scratches and dents caused by
//    everyday handling", and that batteries are a non-covered consumable.
//    Oura's own Ring 4 Ceramic page states that minor scratches from everyday
//    use are expected. Tom's Guide found the Circular Ring 2's titanium
//    scratch-prone and its interior sensors protruding enough to mark the
//    finger. Water ratings also split the field: 100m/10ATM for Oura, Samsung,
//    RingConn and Ultrahuman; 5ATM/50m for Renpho; and for Circular the
//    sources genuinely conflict — its own store page lists IP68 only while
//    Tom's Guide states 50m — which is recorded in the spec value rather than
//    resolved.
//
// 7. PLATFORM LOCK-OUT. The Samsung Galaxy Ring has no iOS app of any kind.
//    An iPhone is a disqualification, not a degraded experience, and several
//    features assume a Samsung Galaxy phone specifically rather than any
//    Android device. Every other ring here supports both platforms; RingConn
//    was the only one an independent reviewer explicitly confirmed as having
//    no platform-specific feature gaps.
//
// 8. CHARGERS AND DATA PORTABILITY. Every charger here is proprietary, but
//    they are not equally bad. Oura ships a SIZE-SPECIFIC dock — a charger
//    made for one ring size does not fit another, so a replacement has to
//    match your ring. RingConn's Gen 3 case is size-universal and good for
//    150+ days. Amazfit's own US page states the USB-C cable is not included
//    in the box. Ultrahuman's PRO charging case is a $100 accessory bundled
//    into the $479 configuration; the $399 configuration ships without it.
//    On export, only Samsung (Health Connect plus a Samsung account data
//    download) and Renpho (Apple Health and Google Health Connect) let your
//    history leave the vendor app by a documented route. Oura documents a
//    personal-access-token Cloud API but no one-click history download.
//    RingConn, Circular, Ultrahuman and Amazfit publish no export at all —
//    which matters in a category where companies fold.
//
// 9. COMPANIES FOLD, AND PATENTS BAN PRODUCTS. This is not a hypothetical
//    risk here. In September 2025 the ITC ruled for Oura against both
//    Ultrahuman and RingConn; Ultrahuman was banned from US import effective
//    21 October 2025 and only returned in 2026 with a redesigned Ring PRO,
//    while RingConn settled and took a multi-year patent licence, so its US
//    supply is licensed rather than provisional. Ultrahuman's ship date has
//    moved repeatedly and the sources conflict: TechTimes reported shipping
//    from 20 June 2026, gadgetsandwearables reported a slip to 10 August
//    2026, and Ultrahuman's own US buy page states orders ship "September
//    15th onwards". That conflict is recorded in the product's cons rather
//    than silently resolved.
//
// DROPPED, and why:
//
//   * Movano Evie Ring — the category's cautionary tale, and the reason trap
//     9 exists. eviering.com currently shows "Evie Rings are temporarily out
//     of stock" with no purchasable price, the app is iOS-only and US App
//     Store only, and Movano Health has taken a Nasdaq deficiency notice for
//     a late filing and executed a reverse stock split. No confirmable
//     current US price means it fails the price rule outright.
//   * Ultrahuman Ring Air — banned from US import in October 2025 and
//     superseded by the Ring PRO. Units still surface on deal sites around
//     $210 but that is clearance and grey-market stock, not a live SKU.
//   * Noise Luna Ring / Luna Ring Gen 2 — reviewed by Wareable but recorded
//     there as currently unavailable in the US.
//   * COLMI R10 — a real, purchasable $65.98 ring, dropped only because no
//     source could pin its release year and the brief forbids guessing one.
//   * Samsung Galaxy Ring 2, Amazfit Helio Ring 2 — both confirmed as future
//     products (Galaxy Ring 2 reportedly early 2027, Helio Ring 2 H2 2026),
//     neither purchasable in August 2026.
//   * Leep Ring, Renpho-adjacent white-label rings — either iOS-exclusive or
//     without a confirmable manufacturer storefront price.
//
// Where sources genuinely conflict, the conflict is recorded in the spec
// value itself rather than silently resolved — see the Circular Ring 2's
// water rating, and the Ultrahuman Ring PRO's ship date in its cons.
// ---------------------------------------------------------------------------

export const smartRingProducts: Product[] = raw as Product[];
