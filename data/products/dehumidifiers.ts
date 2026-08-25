import raw from './dehumidifiers.json';
import { Product } from '../types';

// ---------------------------------------------------------------------------
// Dehumidifiers category — researched August 2026.
//
// Product data lives in dehumidifiers.json, not here, so the admin dashboard
// (/admin/products) can read and rewrite it directly. This file is the typed
// accessor layer plus the sourcing notes that JSON cannot hold.
//
// Sourcing: the load-bearing source for this category is the US EPA/DOE
// ENERGY STAR Certified Dehumidifiers dataset, queried directly through the
// Socrata API at data.energystar.gov/resource/mgiu-hu4z.json (plus the ENERGY
// STAR Most Efficient dehumidifiers dataset, b88x-mifp). That dataset carries,
// for every certified model, the manufacturer's own filed DOE Appendix X1
// water-removal capacity in pints/day, the Integrated Energy Factor in L/kWh,
// annual energy consumption in kWh/yr, refrigerant type and charge, and a
// meets_most_efficient_criteria flag. Every `verifiedDoeCapacity`,
// `energyStar` and `runningCost` value in this file is anchored to that
// dataset or explicitly says no entry exists.
//
// Around that: manufacturer product pages and dealer spec sheets —
// frigidaire.com and totalhomesupply.com/abt.com spec tables for the FHDD
// generation, midea.com's US store and Walmart's MAD50PS1QWT-A listing,
// geappliances.com and Home Depot for ADSE50XWT/ADEL50LZ/ADHE50PWF,
// honeywellstore.com, honeywellconsumerstore.com and honeywellaircomfort.com
// for the TP-Fit and TP70 lines, homelabs.com and Walmart for the hOmeLabs
// 50-pint, waykar.com for the PD160B, ivationproducts.com plus Best Buy and
// Walmart for the desiccant, alorair.com and amgair.com for the Sentinel
// HDi90, and shop.aprilaire.com plus amgair.com for the E070 and E080.
// Recall facts are quoted from CPSC.gov release pages. The explanation of the
// 2012-to-2019 test change and its conversion table is from Honeywell's own
// air-comfort blog, "What are Dehumidifier Testing Standards, and What Do They
// Mean Today?", cross-checked against the AHAM/DOE figures published by
// AprilAire and AlorAir on their own spec sheets.
//
// ASINs were read from amazon.com /dp/<ASIN> URLs as they appeared in search
// results and in review articles' outbound links, each cross-checked against a
// second independent source (Ubuy mirrors, manuals.plus manual pages keyed by
// ASIN, device.report, brandclub, eBay catalogue entries, vikoc, fakespot).
// Amazon product pages were NOT scraped — that would violate the Associates
// Operating Agreement; camelcamelcamel is Cloudflare-gated and returned 403 to
// every request, so price history could not be used here. Confirm each ASIN in
// SiteStripe before relying on it for revenue. Three need extra care:
// B0FNQJ2LJS (GE) is cross-checked via Ubuy, whose mirrored title names the
// "Smart Dry for Wet Spaces" pump variant while the Amazon title's 5,000 sq ft
// coverage matches the ADSE50XWT priced here — GE runs several near-identical
// 50-pint pump SKUs concurrently and retires them fast. B07X43RGML (Ivation)
// could only be corroborated by a third-party round-up citing the ASIN, and
// Ivation sells two near-identical 19-pint desiccants (with and without Wi-Fi)
// at the same $299.99. B0CQRYS6N1 (AprilAire E080) is one of at least four
// concurrent Amazon listings for the same appliance (bundle, Pro, DIY kit,
// bare unit) at different prices.
//
// Category-specific traps recorded in the data:
//
//  1. THE 2019 DOE PINT-RATING CHANGE IS THE WHOLE CATEGORY, AND NOBODY LABELS
//     IT CONSISTENTLY. Before 2019 DOE rated portable dehumidifiers at
//     80°F/60% RH; since 2019 the test condition is 65°F/60% RH. Cooler air
//     holds less water, so the same unchanged machine tests lower: the
//     published conversion runs roughly 30 -> 20, 50 -> 30, 70 -> 40-45 and
//     90 -> 55 pints. Nothing about the hardware changed. Every listing,
//     review and forum post written before 2019 — and a great many written
//     after — uses the old scale, which makes cross-shopping actively
//     misleading. `ratedCapacity` records which scale each published figure
//     uses; `verifiedDoeCapacity` records the DOE Appendix X1 number the
//     manufacturer itself filed with ENERGY STAR. Retailers occasionally say
//     it out loud, and those are the honest ones: Appliance Guys sells the
//     Frigidaire as "50 Pint Dehumidifier (Old 70 Pint)" and Walmart's
//     hOmeLabs title reads "50 Pint (Previously 70 Pint)". A third scale is in
//     circulation on top of the two DOE ones: the saturation figure taken at
//     roughly 95°F/90% RH, which is what Waykar's "34 pints", hOmeLabs' "MAX
//     120 Pint at 95°F, 90% RH" and Colzer's "232 Pints" all are. And whole-
//     home units use a fourth point — Appendix X1 tests them at 73°F/60% RH
//     rather than 65°F/60% RH, which is why AprilAire's E080 files at 65.00
//     pints/day while being sold as an 80-pint.
//
//  2. THE WAYKAR PD160B IS SOLD AS 34 PINTS AND ITS OWN ENERGY STAR FILING
//     SAYS 9.81. This is the sharpest single data point in the category.
//     Waykar's own product page rates the PD160B at "34 pints / day" under
//     95°F, 90% RH; a Ubuy mirror of the same Amazon ASIN calls it a
//     "40-Pint"; and the ENERGY STAR Certified Dehumidifiers database records
//     Waykar's filed DOE Appendix X1 capacity for model PD160B as 9.81
//     pints/day (IEF 1.73, 122 kWh/yr, R290). The marketing figure is 3.5x the
//     verified one. The PD160B-PRO variant files at 10.16 pints/day and does
//     carry ENERGY STAR Most Efficient — a Most Efficient badge on a ten-pint
//     machine sold as a 34-pint. The same database also shows the PD160B
//     platform filed under the joint partner string "waykar, KESNOS, YAUFEY,
//     Fehom", i.e. several Amazon dehumidifier "brands" are one OEM.
//
//  3. COMPRESSORS STOP WORKING IN THE ROOM YOU BOUGHT THEM FOR. A refrigerant
//     dehumidifier frosts its coil below roughly 65°F; auto-defrost recovers
//     the coil but spends runtime doing it. Every portable here has a 41°F
//     floor, which is where it stops, not where it works. A 50-55°F basement
//     or garage is the single most common mis-buy in the category, and the fix
//     is either a desiccant rotor (the Ivation runs from 33°F and does not
//     care about coil temperature at all) or a hot-gas-defrost crawlspace unit
//     (the AlorAir Sentinel HDi90 runs from 33.8°F). `lowTempOperation`
//     records the published floor, the defrost mechanism, and where the
//     manufacturer publishes nothing — Midea, Waykar and hOmeLabs all publish
//     no minimum operating temperature for the models here.
//
//  4. THERMOELECTRIC "MINI DEHUMIDIFIERS" REMOVE ABOUT HALF A PINT A DAY.
//     Walmart's spec table for the Pro Breeze PB-02-US states it "Collects up
//     to 9oz of water per day" — 0.56 pints, roughly one ninetieth of a
//     50-pint compressor unit — while the same product is listed against a
//     215 sq ft coverage claim. `ratedCapacity` records the ounce figure and
//     the pint conversion rather than the coverage claim. Peltier units are
//     outside the DOE test scope entirely, so no verified figure exists for
//     any of them.
//
//  5. THREE ENERGY STAR CLAIMS IN THIS FILE ARE NOT IN THE ENERGY STAR
//     DATABASE. honeywellaircomfort.com and honeywellstore.com both market the
//     TPFIT50PWK as "Most Efficient ENERGY STAR certified"; the ENERGY STAR
//     record for TPFIT50PWK carries meets_most_efficient_criteria = No and the
//     model is absent from the Most Efficient list. amgair.com sells the
//     AprilAire E070 as "Most Efficient | Energy Star Rated" and the AlorAir
//     Sentinel HDi90 as "Energy Star listed"; neither model appears in the
//     certified database at all (AprilAire's E080/E100/E130 and AlorAir's
//     Helios D35/Sentinel HD55S/Sentinel Pro35X do). hOmeLabs' 50-pint is sold
//     under "Energy Star Dehumidifier" titles while only its 24-pint (HME0088)
//     and 32-pint (HME0089) models are currently certified. And Midea's older
//     Cube listings still carry "ENERGY STAR Most Efficient 2022/2023" in the
//     title while the current MAD50PS1QWT-A/MAD50S1QWT-A records say No. The
//     AprilAire E080 is the only product in this file whose Most Efficient
//     claim survives a look at the database.
//
//  6. HONEYWELL PUBLISHES THE TWO SCALES BACKWARDS. honeywellstore.com's
//     TPFIT50PWK page reads "50 pints/day (70 pints per 2019 DOE standard)".
//     The 2019 standard produces a *lower* number, so that is inverted;
//     myhomeclimate.com sells the sibling TP70PWKN as "70 Pint (50 Pint 2019
//     DOE Standard)", the same two numbers the right way round. Honeywell's
//     own ENERGY STAR filing for TPFIT50PWK settles it at 49.66 pints/day. A
//     buyer trusting the manufacturer's page would believe they were getting
//     40% more machine than they are. The same page also publishes R-410A as
//     the refrigerant while Honeywell's ENERGY STAR filing for the same model
//     number records HFC-32.
//
//  7. TANK CAPACITY AND PINTS-PER-DAY ARE TWO HALVES OF ONE NUMBER, AND
//     NOBODY PRINTS THEM TOGETHER. The GE ADSE50XWT is rated 49.64 pints/day
//     with a 10-pint tank — five emptyings a day if the pump is not plumbed
//     in. The hOmeLabs 50-pint pairs 50 pints/day with 1.6 gallons: four a
//     day. The Frigidaire's 1.9 gallons is still under half a day. Only the
//     Midea Cube meaningfully solves it, and Midea publishes no gallon figure
//     for it at all — Walmart's spec table says 7.5 gallons while Midea's own
//     pages offer only "up to 3 times more water tank capacity than
//     traditional dehumidifiers". The three whole-home/crawlspace units have
//     no tank at all and are plumbed appliances.
//
//  8. "CONTINUOUS DRAINAGE" MEANS FOUR DIFFERENT THINGS. Gravity port with no
//     hose in the box and the unit needing to stand above the drain
//     (Frigidaire 22 and 50, hOmeLabs); gravity port with a hose included
//     (Waykar, Ivation, AprilAire's 10 ft of tubing); a real pump with lift
//     (Midea, GE at 16 ft, Honeywell at 15 ft, AlorAir); and pump-only with no
//     bucket as a fallback (AlorAir). Two of the three most expensive machines
//     here — both AprilAires, at $1,441 and $1,507 — are gravity-drain only,
//     so a crawlspace without a low drain needs a condensate pump on top.
//     `drainage` records which of the four each unit is.
//
//  9. RUNNING COST IS THE REAL PRICE. The mainstream 50-pints all file between
//     515 and 521 kWh/yr, which is about $88/yr at $0.17/kWh — roughly a third
//     of the purchase price, every year, on a machine that runs most of the
//     year. That makes the $419.95 Honeywell and the $299 GE identical to own
//     from year two onward on everything except the pump lift and the warranty.
//     It also reframes the small units: the Pro Breeze costs about $34/yr to
//     run for 0.56 pints/day, which is the worst cost-per-pint in the file by
//     an order of magnitude, while the Waykar's genuinely low $21/yr is low
//     because the machine is genuinely small. Where no ENERGY STAR entry
//     exists — hOmeLabs, Ivation, AlorAir, AprilAire E070 — `runningCost` says
//     so rather than inventing a figure.
//
// 10. THIS CATEGORY HAS HAD THREE ENORMOUS FIRE RECALLS AND FOUR OF THESE
//     BRANDS ARE ON THEM. CPSC, 4 August 2021: New Widetech recalled ~2
//     million 25-74 pint dehumidifiers sold February 2009 - August 2017 after
//     107 overheating/fire incidents and ~$17M in property damage; the brand
//     list includes Honeywell, Ivation, Danby, Whirlpool, Haier, Friedrich,
//     Whynter and others, and the remedy was "stop using the dehumidifiers
//     immediately". CPSC, 16 August 2023: Gree recalled ~1.56 million units
//     sold 2011-2014 under Kenmore, GE, SoleusAir, Norpole and Seabreeze after
//     at least 23 fires and 688 overheating incidents. Earlier Gree recalls in
//     2013 and 2016 covered Frigidaire, Danby, Kenmore and others. None of
//     these recalls covers a current model in this file — different
//     manufacturers, different decades — but `recallHistory` records the
//     brand's position on each list, because a buyer looking at a used
//     dehumidifier of any of these brands genuinely needs to check.
//
// Where sources genuinely conflict, the conflict is recorded in the spec value
// itself rather than silently resolved. The notable ones: the Ivation's
// capacity (13 pints/day at 68°F on Ivation's own page vs "19 pints per day"
// at every retailer) and tank (0.75 gal per Ivation vs 0.5 gal per Best Buy);
// the Pro Breeze's coverage (150 / 205 / 215 sq ft across Walmart, Pro Breeze
// and Amazon) and tank (16 / 17 / 18 oz); the Midea Cube's warranty (1 year on
// Midea's own store, 2 years parts and labour on Walmart for the same model
// number) and tank (7.5 gal on Walmart, unpublished by Midea); the Honeywell's
// warranty stated three ways across two Honeywell-operated sites (1 year
// limited / 5 years parts and sealed system / 1 year parts-labour plus 4 years
// sealed system) and its refrigerant (R-410A vs HFC-32); the AprilAire E070's
// coverage (2,200 sq ft on aprilaire.com, 2,800 on Amazon, 4,400 on a dealer
// spec sheet); the AlorAir's warranty (6 years on AlorAir and Amazon, 5 on a
// reseller); and the Frigidaire 22-pint's coverage (350 sq ft at Home Depot vs
// 1,500 sq ft on a Walmart listing for the same platform).
//
// A note on releaseYear: dehumidifier makers do not publish launch dates. The
// figures here are anchored to the "date available on market" field in each
// model's ENERGY STAR certification where one exists (Waykar 2025, Frigidaire
// 2024, Midea and GE 2025, Honeywell 2026, AprilAire E080 2021), and otherwise
// to the best-supported year of first US sale (Pro Breeze, Ivation, hOmeLabs,
// AlorAir, AprilAire E070) — treat those as approximate.
//
// Products considered and dropped: LG's brand-new PuriCare Sonoran DT501BKR0
// is real and ENERGY STAR certified at 49.81 pints/day (on market 19 January
// 2026), but no US retailer or dealer surveyed published a price — every
// dealer page listed it without one or as sold out — so it fails the
// price-required rule. Colzer's commercial line is genuinely interesting for
// this category (its crawlspace CD70P is listed on Amazon with both numbers in
// the title: "145 Pints/Day (Saturation) 70 Pints/Day (AHAM)", and its 232 PPD
// unit is documented at 232 pints saturation vs 110 pints AHAM) but
// colzer.com is bot-gated and no reputable current US price could be confirmed
// for any Colzer SKU. Danby is dropped because danby.com's US site marks every
// 50-pint pump model (DDR050BLPBDB, DDR050EBPWDB, DDR050BJPWDB) discontinued
// even though DDR050BL3BDB is freshly ENERGY STAR certified — no priceable
// current SKU. Toshiba's TDDP5013ES2 is available only renewed or on eBay, is
// absent from the ENERGY STAR list, and its parts are catalogued under Midea;
// it has effectively left the US market. Vremi has no current ENERGY STAR
// listing and no confirmable current SKU. GE's APER50LZ, ADEL50LZ and
// ADHE50PWF were all considered and dropped in favour of the ADSE50XWT
// because GE's own site marks the first three "no longer being manufactured".
// The AprilAire E070 is retained despite not being ENERGY STAR certified
// precisely because the false certification claim on its dealer listing is the
// instructive data point, and because it is the crawlspace unit a buyer will
// actually be quoted.
// ---------------------------------------------------------------------------

export const dehumidifierProducts: Product[] = raw as Product[];
