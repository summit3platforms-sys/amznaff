import raw from './air-purifiers.json';
import { Product } from '../types';

// ---------------------------------------------------------------------------
// Air Purifiers category — researched August 2026.
//
// Product data lives in air-purifiers.json, not here, so the admin dashboard
// (/admin/products) can read and rewrite it directly. This file is the typed
// accessor layer plus the sourcing notes that JSON cannot hold.
//
// Sourcing: the two primary sources that carry this category are both
// first-party registries and both were queried directly rather than read
// second-hand.
//
//   * The AHAM Verifide directory of room air cleaners (ahamdir.com, operated
//     for AHAM by Intertek/TruTesta). The public query endpoint behind the
//     directory UI — gbs.trutesta.io/aham-indexer-services/aham-indexer/
//     public/query-model-details, plus its /brand index — was queried per
//     brand in August 2026. Every "AHAM Verifide" CADR and room size in this
//     file came out of that query, including the directory's own filter-type
//     field (which is how the "HEPA-Type" grading on the Levoit Core Mini and
//     the "Fabric" grading on the Blueair 211i Max got recorded), its
//     annual-energy-consumption field, and its measured watts at the smoke
//     CADR speed.
//   * The California Air Resources Board list of CARB-certified air cleaning
//     devices (ww2.arb.ca.gov/list-carb-certified-air-cleaning-devices), a
//     12,900-row table scraped and parsed in full. Every "Mechanical" or
//     "Electronic" classification, every executive-order number and every
//     notification date quoted in the ionizerOzone spec came from that table.
//
// Prices, filter part numbers, filter prices, replacement intervals, noise
// figures, sensor descriptions and warranty terms come from first-party
// product pages: levoit.com (Core Mini-P, Core 300S-P, Core 300-P, Vital
// 200S-P), cowaymega.com (AP-1512HH product page and the AP-1512HH/200M
// filter-set record read from the Shopify product JSON), winixamerica.com
// (5510 and C545), blueair.com (Blue Pure 211i Max), medifyair.com (MA-40 and
// the MA-40 filter page), sharkninja.com (HP302), dyson.com (Purifier Cool
// Gen1 TP10), alen.com (BreatheSmart 75i), molekule.com (Air Pro and its
// filter page), ikea.com (UPPÅTVIND and its filter), honeywellpluggedin.com
// (InSight HPA180) and honeywellstore.com / honeywellconsumerstore.com
// (HPA300 and HPA200 filter part numbers and prices, both of which those
// stores now mark DISCONTINUED). Best Buy supplied the Honeywell HPA180B
// street price. One third-party source is cited in the data by name:
// cleanairadviser.com's 2026 analysis of the test conditions behind Shark's
// five-year filter claim.
//
// ASINs were read from amazon.com /dp/<ASIN> URLs as they appeared in search
// results and on third-party price-history sites (camelcamelcamel), each
// cross-checked against a second independent source. Amazon product pages
// were NOT scraped — that would violate the Associates Operating Agreement.
// Confirm each ASIN in SiteStripe before relying on it. The IKEA UPPÅTVIND
// carries an empty ASIN on purpose: it is US-available but IKEA does not sell
// it through Amazon, so there is no listing to link.
//
// Category-specific traps recorded in the data:
//
//  1. THE HEADLINE SQUARE FOOTAGE IS A ONE-AIR-CHANGE-PER-HOUR NUMBER, AND IT
//     IS ROUGHLY FIVE TIMES THE USEFUL FIGURE. One air change an hour does
//     almost nothing against smoke, pollen or wildfire particulate, which
//     keep being generated or keep leaking in; the working standard is 4.8
//     ACH, which is also the basis AHAM uses for its suggested room size.
//     `coverageClaim` records the claim AND its air-change basis for every
//     product, and `coverageHonesty` is this category's trap score dimension.
//     The gaps are enormous and entirely legal: Blueair's own page says 674
//     ft² at 4.8 ACH while its retail listing title says "up to 3,235 Sq Ft"
//     (674 × 4.8). Honeywell's HPA180B is AHAM-Verifide for 206 ft² and sold
//     as "990 Ft² Rooms in 1 Hour" (206 × 4.8). Coway's AP-1512HH publishes
//     the whole ladder — 1,748 ft² at 1 ACH, 874 at 2 ACH, 361 at 4.8 ACH —
//     and the box says 1,748. Levoit prints "1051 ft² (1 ACH) / 219 ft² (4.8
//     ACH)" and every round-up quotes 1051. Alen sells 2,800 ft² at 1 ACH
//     when its own CADR implies roughly 580 ft² at 4.8. IKEA is the sole
//     exception in the file: UPPÅTVIND is sold as 75 ft² at five air changes
//     per hour and no larger number appears anywhere.
//
//  2. "AHAM VERIFIDE" IS CLAIMED FAR MORE OFTEN THAN IT IS HELD. Querying the
//     directory's brand index in August 2026 returns 58 brands. Levoit,
//     Winix, Blueair, Honeywell, IKEA, GermGuardian, Dreo and Medify Air are
//     in that index; Coway, Dyson, Molekule, Shark, Alen, Smartmi, Xiaomi,
//     Rabbit Air and Bissell are not in it at all. Two findings are recorded
//     verbatim in the `ahamCadr` spec. First, Medify Air appears in the brand
//     index with ZERO currently certified models, while every product tile on
//     medifyair.com carries an "AHAM Verified" badge. Second, Levoit's Core
//     300S-P retail listing also carries an "AHAM VERIFIDE" badge, but the
//     Levoit models actually in the directory are LAP-C171, LAP-C201S,
//     LAP-C311S, LAP-C341S and LAP-P501S — none of which is identifiable as
//     the Core 300S, whose 141 CFM does not match any of them. Where a CADR
//     is genuinely Verifide (IKEA, Levoit Core Mini, Winix, Honeywell,
//     Blueair) the spec says so and gives the model code; where it is
//     self-reported (Coway, Medify, Alen) the spec says that instead; where
//     none exists at all (Shark, Dyson, Molekule) the spec says that too.
//
//  3. FILTERS COST MORE THAN THE MACHINE. `annualFilterCost` is computed from
//     published part prices and published intervals wherever both exist. The
//     spread is a factor of ten. Coway is the cheapest real option at $54.99
//     a year, because its filter set is deliberately one HEPA (12 months)
//     plus two deodorisation filters (6 months each) — exactly one year in a
//     box — and its pre-filter is washable. Winix is one $55.99–79.99 part a
//     year. Molekule is the extreme: $174.99 every six months, $349.98 a
//     year, about a third of the machine's own price annually and more over
//     three years than the Blueair, Winix and Coway cost to buy combined.
//     Medify sits at $120–180 depending on which of its own pages you
//     believe: the filter page sets the subscription cadence at 120 days, the
//     purifier page at 180 days, and the body copy says "up to 3,000 hours or
//     4-5 months". Shark inverts the model with a five-year filter — but see
//     trap 6. Honeywell publishes intervals for the HPA180's G filter and A
//     pre-filter and no price for either, so the spec says exactly that and
//     quotes the comparable HPA300-series part prices for scale rather than
//     inventing a figure.
//
//  4. "TRUE HEPA", "H13" AND "HEPA-TYPE" ARE THREE DIFFERENT CLAIMS, AND SO
//     IS "SEALED". The AHAM directory records a filter-type field per model,
//     and it does not always agree with the marketing. AHAM logs the Levoit
//     Core Mini platform and the Core 200S as "HEPA-Type"; it logs the
//     Blueair Blue Pure 211i Max as "Fabric", which is the honest description
//     of charged-media HEPASilent. Medify's H13/H14 claim is footnoted on its
//     own site as "Tested by Intertek Lab for HEPA filter material" — a media
//     grade, not a whole-unit rating. IKEA does not claim HEPA at all and
//     specifies EPA 12 to EN 1822-1, one class below H13, with a 99.5% PM2.5
//     figure. Dyson is the only unit here that claims the machine itself is
//     sealed to H13 so air cannot bypass the filter, which is a materially
//     stronger claim than a media grade. Winix's 99.99% rests on a Korean KCL
//     report to a modified SPS-KACA method rather than EN 1822 or IEST, and
//     that is recorded too. `prefilter` separately records whether the
//     pre-filter is a washable part (Coway, Winix, Blueair) or a consumable
//     you keep buying (Honeywell, every quarter).
//
//  5. IONISERS, PLASMA AND PCO — AND WHAT "CARB CERTIFIED" ACTUALLY MEANS.
//     CARB certification is not a clean bill of health; the list has two
//     classes. "Mechanical" means filtration only. "Electronic" means the
//     device is capable of generating ozone and was certified because it
//     tested at no more than 0.050 ppm. `ionizerOzone` records the class, the
//     executive-order number and the notification date for every product.
//     Five of these twelve are Electronic: the Coway AP-1512HH (its fourth
//     filtration stage is a bipolar ionising device — note the revised
//     AP-1512HHC and the Mighty2 AP-1512N are certified Mechanical), the
//     Winix 5510 (PlasmaWave), the Blueair 211i Max (HEPASilent ion
//     charging), the Alen BreatheSmart 75i_V2 and the Molekule Air Pro (PECO
//     photocatalysis). Switchability varies and matters: Coway, Winix and
//     Alen all give the stage its own control, and Alen goes further than
//     anyone by publishing ozone at both settings ("0 PPM when disengaged,
//     less than 0.001 PPM with ionizer engaged"). Winix publishes a measured
//     8-hour TWA of 0.22 ppbv in a 30 m³ chamber. Blueair's ion charging is
//     integral to how HEPASilent works and there is no off switch, and
//     Blueair's page makes no ozone statement at all. Molekule's own FDA
//     criteria table says the Air Pro "does not product ozone" while CARB
//     lists it — and every Molekule model back to the 2017 Home One — as
//     Electronic. Medify is the encouraging case in the other direction: the
//     2021 MA-40 and the MA-40UV are Electronic, while MA-40-V3.0 and the
//     current MA-40-V4.0 are certified Mechanical.
//
//  6. LONG-LIFE AND LIFETIME CLAIMS COME WITH CONDITIONS BURIED IN THE TEST
//     METHOD OR THE SUBSCRIPTION TERMS. Shark's five-year NeverChange filter
//     is the headline reason to buy the HP302; independent analysis of
//     Shark's own stated conditions (cleanairadviser.com, 2026) reports the
//     figure is measured in a 300 ft² room, 12 hours a day at maximum fan
//     speed, to an endpoint that permits clean-air delivery to fall by 50% —
//     the filter is "still working" at half the airflow it shipped with.
//     Alen's "Forever Guarantee" is printed on its own page as "with Product
//     Registration & Active Air Filter Subscription": the lifetime warranty
//     is contingent on continuing to buy filters, which is why warrantyMonths
//     for the 75i is 0 and the condition is spelled out in `warrantyTerms`.
//     Blueair's warranty is 1 year and only reaches 3 if you register.
//     Medify's limited lifetime warranty, by contrast, carries no
//     subscription condition — the one lifetime claim here that is not
//     coupled to a recurring purchase.
//
//  7. SENSORS RANGE FROM SIX-CHANNEL LASER SUITES TO NOTHING AT ALL, AND THE
//     MIDDLE IS DELIBERATELY VAGUE. `sensor` records what the manufacturer
//     actually says, not what the box implies. Molekule (PM1/2.5/10 + VOC +
//     CO2 + RH), Alen (PM2.5 + TVOC + eCO2 + temp + RH) and Blueair
//     (PM1/2.5/10) publish real multi-channel particulate sensing. Dyson puts
//     numeric PM2.5 and PM10 on an LCD rather than a traffic light. Coway
//     calls the AP-1512HH's element a "dust sensor" and reserves the phrase
//     "MegaScan laser sensor (PM 1, 2.5, 10)" for the newer Mighty2 — which
//     tells you what the older sensor is not, and Levoit's "AirSight Plus" is
//     described nowhere as a laser counter either. Alen's eCO2 is flagged in
//     the spec because estimated CO2 on this class of device is normally
//     inferred from the VOC element rather than measured with an NDIR cell,
//     and Alen does not say which it is. Three units have no sensor and
//     therefore no auto mode at any price: the IKEA UPPÅTVIND, the Levoit
//     Core Mini-P and — at $249.99 — the Medify MA-40, whose own control list
//     ends at timers, three speeds, sleep mode and a filter indicator.
//
//  8. NOISE AT THE SETTING YOU WOULD ACTUALLY SLEEP WITH. `noiseRange` gives
//     both ends where both are published, and says so plainly where they are
//     not. The good end: Levoit Core 300S-P 22–50 dB, Blueair 23–53 dB, Winix
//     23.5 dB minimum, Alen 25–51 dBA, Levoit Core Mini-P 25–44 dB. The bad
//     end: Molekule's floor is 33 dBA and its ceiling 64 dBA, and Medify
//     publishes only "as low as 40.5 dBA" for sleep mode and nothing for full
//     speed — 40.5 dBA is louder than most of this field's mid speeds.
//     Honeywell, Shark and Dyson publish no decibel figure at either end for
//     these models, and that omission is recorded rather than filled in.
//
//  9. OFFLINE OPERATION IS A REAL DIFFERENTIATOR HERE. `smartFeatures`
//     records whether the machine needs an account. Six of the twelve have no
//     radio at all — IKEA, both Levoit Core Minis' tier, Coway AP-1512HH,
//     Medify, Honeywell, Shark and Dyson Gen1 — and will behave identically
//     in ten years. Of the connected ones, Winix and Blueair keep every mode
//     on the physical panel and use the app only for remote control and
//     history; Levoit's VeSync gates scheduling and voice control behind a
//     login; Alen's dependency is commercial rather than technical (see trap
//     6). Two hardware notes worth flagging: the Shark HP302's remote is the
//     only controller and Shark sells it as a $16.99 replacement part, and
//     the Dyson TP10's body has one button.
//
// Where sources genuinely conflict, the conflict is recorded in the spec
// value itself rather than silently resolved — see the Alen 75i CADR (375 on
// Alen's spec table vs 350 in Alen's own product description on the same
// page) and the Medify MA-40 filter interval (120 days on the filter page vs
// 180 days on the purifier page vs "3,000 hours or 4-5 months" in the body
// copy).
//
// A note on warrantyMonths: three products carry 0. That does not mean "no
// warranty". IKEA publishes no manufacturer warranty term for UPPÅTVIND (it
// offers a 365-day return window instead), and Medify and Alen both offer
// lifetime warranties that cannot be expressed as a month count — Alen's
// conditionally, Medify's not. In all three cases the real terms are in the
// `warrantyTerms` spec.
//
// A note on releaseYear: only Blueair, Shark, Dyson and the Coway Mighty2
// have well-anchored launch dates. For the rest, releaseYear is the earliest
// CARB executive-order notification date for the model family, which is the
// best-supported proxy for first US sale and should be treated as
// approximate. The Coway AP-1512HH's 2013 reflects a design that has been in
// continuous production since then, not a stale product.
//
// Products considered and dropped: the Honeywell HPA300 and HPA200, the two
// models most buyers search for, are both marked DISCONTINUED on Honeywell's
// own store and "no longer available in new condition" at Best Buy, and
// neither appears in the current AHAM directory — the InSight HPA180B takes
// the Honeywell slot because it is currently AHAM Verifide, currently CARB
// certified and currently priced. The Winix 5500-2 was dropped for the 5510
// for the same reason: winixamerica.com no longer carries a 5500-2 page,
// while the 5510 is in stock at a first-party price and shares the 5520/5530
// certification. Smartmi's Air Purifier P1 was researched fully (ZMKQJHQP11,
// CARB Mechanical, a genuine dual-purpose laser particle sensor, $169 down
// from $219, HomeKit support) but every variant on us.smartmiglobal.com shows
// as unavailable in August 2026, so it was dropped rather than priced from a
// listing nobody can buy; Xiaomi's Smart Air Purifier 4 line has no official
// US retail channel at all. Coway's newer Mighty2 (AP-1512N, $269.99) was
// passed over for the AP-1512HH because the older model is the one still
// selling in volume and because its bipolar ioniser and Electronic CARB
// classification are the more instructive data points — the Mighty2 is
// certified Mechanical and uses a laser sensor, both of which are noted in
// the AP-1512HH's specs. GermGuardian is AHAM Verifide and would have fitted,
// but was left out to keep one slot per brand across the twelve the buyer
// actually cross-shops. The Molekule Air Pro is retained despite showing as
// sold out on molekule.com, because it is the category's defining trap and is
// still stocked by third parties — that status, and Molekule Inc.'s 2023
// Chapter 11 filing, are recorded in its cons and in `warrantyTerms`.
// ---------------------------------------------------------------------------

export const airPurifierProducts: Product[] = raw as Product[];
