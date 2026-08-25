import raw from './humidifiers.json';
import { Product } from '../types';

// ---------------------------------------------------------------------------
// Humidifiers category — researched August 2026.
//
// Product data lives in humidifiers.json, not here, so the admin dashboard
// (/admin/products) can read and rewrite it directly. This file is the typed
// accessor layer plus the sourcing notes that JSON cannot hold.
//
// Sourcing: capacities, output rates, runtimes, coverage claims, filter part
// numbers and cleaning procedures come from first-party manufacturer pages and
// owner's manuals — levoit.com and us.vesync.com product pages, the Honeywell
// HCM-350 and HWM845 owner's manuals (honeywellstore.com and
// honeywellpluggedin.com PDFs), honeywellpluggedin.com and honeywellstore.com
// product pages, vickshumidifiers.com's product page and its V150 FAQ,
// aircare.com's MA1201 page, venta-air.com's LW25 Original and LW25 Comfort
// Plus pages, getcanopy.co's device and filter-subscription pages,
// hellocarepod.com, dreo.com's HM713S page and support.dreo.com's warranty
// policy, pureenrichment.com, and Crane's own EE-5301 owner's manual. Those
// were cross-checked against retail specification tables (Home Depot, Lowe's,
// Walmart, Target, Best Buy, Anthropologie, Sylvane, National Allergy,
// FiltersFast, honeywellconsumerstore.com) and independent testing
// (TechGearLab's measured 38.5 dB and white-dust findings on the Classic 300S,
// AirQualityNest's measured output and time-to-45%-RH figures on the Canopy
// 2.0, TechGadgetsCanada on the Superior 6000S, humidifierprices.com's
// MS031S2 spec sheet for the Carepod). The white-dust and cleaning-frequency
// language is quoted from the EPA's "Use and Care of Home Humidifiers"
// (Indoor Air Facts No. 8), epa.gov/system/files/documents/2022-07.
//
// ASINs were read from amazon.com /dp/<ASIN> URLs as they appeared in search
// results, in review articles' outbound links, and on third-party price-history
// sites (camelcamelcamel), each cross-checked against a second independent
// source. Amazon product pages were NOT scraped — that would violate the
// Associates Operating Agreement. Confirm each ASIN in SiteStripe before
// relying on it for revenue. Two need extra care: B07GQ2CF4T resolves to the
// Honeywell HWM845 warm mist humidifier but the confirming price-history entry
// is the Canadian HWM845BC listing, and B0916J478T (Carepod One) could only be
// corroborated by a third-party page citing the ASIN rather than by a price
// tracker.
//
// Category-specific traps recorded in the data:
//
//  1. WHITE DUST IS THE WHOLE CATEGORY, AND NO ULTRASONIC LISTING MENTIONS IT.
//     An ultrasonic humidifier atomises the water mechanically, so every
//     dissolved mineral in the tank leaves with the mist and lands on the
//     furniture as white powder. The EPA's own humidifier fact sheet states
//     that ultrasonic and impeller units "are very efficient at dispersing
//     minerals in tap water into the air" and that they "can disperse
//     materials, such as microorganisms and minerals, from their water tanks
//     into indoor air" — the second half of that sentence is the part nobody
//     quotes. Evaporative units (Superior 6000S, HCM350, Canopy, Venta,
//     AIRCARE) trap the minerals in the wick or disc stack, and boiled-steam
//     units (HWM845B, Vicks V150) drop them out as scale. Neither can produce
//     white dust at all. Six of these twelve are ultrasonic and every one of
//     them carries this in the `whiteDust` spec and in a con, with the fix and
//     its cost: Levoit and Carepod sell no demineralisation cartridge for their
//     models so distilled water is the only remedy; Pure Enrichment's is a
//     $12.99 six-month accessory whose own product copy admits it "reduces
//     white dust from minerals in tap water"; Crane's manual tells you outright
//     to use filtered or distilled water, and its accessory carries two
//     different part numbers depending on the retailer (HS-1932 at Home Depot,
//     HS-3161 at FiltersFast). `whiteDustRisk` is this category's trap score
//     dimension for exactly this reason.
//
//  2. TANK CAPACITY, RATED OUTPUT AND QUOTED RUNTIME DESCRIBE THREE DIFFERENT
//     SETTINGS, AND THE NUMBERS DO NOT RECONCILE. This is recorded as three
//     separate spec fields precisely so the contradiction is visible in the
//     comparison table. The Honeywell HCM350's manual rates it at "2 US gallons
//     (7.6 liters) output per day" from a 1.1 gallon tank quoted at "up to 24
//     hours" — the two claims are a factor of two apart. Crane's EE-5301 manual
//     rates 2.3 gal/day from a 1 gallon tank. The AIRCARE MA1201 is the extreme
//     case: 12 gal/day rated output from a 3.6 gallon reservoir quoted at 36
//     hours, so the headline output requires roughly three refills a day and
//     the headline runtime is one fifth of rated output. Dreo is the only unit
//     here that publishes enough to check itself, and it fails: 6 L at its own
//     published 300 mL/hr cool-mist rate is 20 hours, not the advertised 60.
//     Where a manufacturer publishes no output figure at all — Levoit for both
//     models, Honeywell for the HWM845, Vicks, Venta, Canopy, Carepod — the
//     spec value says so verbatim rather than inventing one.
//
//  3. "HUMIDISTAT" USUALLY MEANS FIXED SPEEDS AND A TIMER. Only four of these
//     twelve have a genuine closed loop: the Levoit Classic 300S, the Levoit
//     Superior 6000S, the Dreo HM713S (±5%, 30-90% setpoint) and the AIRCARE
//     MA1201 (25-65% in 5% increments with an auto fan mode). Everything else
//     is open-loop and the `humidistat` spec says so. Two cases deserve calling
//     out. Venta charges $299.99 for the LW25 Original with no humidity sensing
//     whatsoever and sells the "digital hygrostat for measuring and controlling
//     the relative humidity" as a separate $399.99 Comfort Plus model of the
//     same LW25. Canopy's "auto" mode is described by Target's own listing as
//     light-sensitive — it reacts to room light, not humidity. The Vicks V150
//     has no output control at all: one switch, full 638W boil, until the tank
//     is dry.
//
//  4. "WARM MIST" IS TWO COMPLETELY DIFFERENT MACHINES. The Honeywell HWM845's
//     manual says "The tank feeds water into the boiling chamber where it is
//     heated to a steam vapor" and warns "DO NOT touch the steam vapor. Steam
//     can cause burns" — that output is genuinely sterilised, and genuinely a
//     scald hazard. The Dreo HM713S is sold on the same two words but its own
//     spec sheet says warm mode "reaches 86°F in 5 minutes": 30°C water pushed
//     through the same piezo disc, which sterilises nothing and still makes
//     white dust, for 280W instead of 26W. `mistTemperature` records the actual
//     temperature and the mechanism for every product rather than repeating the
//     marketing phrase.
//
//  5. THE VICKS VAPORIZER CANNOT RUN ON DISTILLED WATER. The V150 boils by
//     passing current through the water itself, so pure water will not conduct
//     and the unit simply will not steam. Vicks' own FAQ says "These units
//     require water with minerals in it in order to function properly", tells
//     owners to "Add one or two pinches (1/8 tsp) of salt" — up to half a
//     teaspoon — and warns that "too much salt can cause excessive boiling or
//     blow a fuse". Nothing on the box or the retail listings says this. The
//     same FAQ prescribes flushing the steam unit "until black particles are no
//     longer emitted", which are carbon shed from the element.
//
//  6. FILTER-FREE IS NOT CONSUMABLE-FREE, AND THE CHEAPEST MACHINE IS OFTEN THE
//     MOST EXPENSIVE TO OWN. Canopy sells a $159 humidifier that eats a $17
//     paper filter every 45 days by its own instruction — roughly $96-136 a
//     year, more than half the device price annually. Venta advertises
//     "filter-free" and then specifies $17.99 Water Treatment Additive at every
//     10-14 day service plus $16.99 cleaner twice a year. The Honeywell HCM350
//     stacks two consumables: a HAC-504 wick (Honeywell's own 3-pack is $32.95,
//     a compatible FiltersFast 3-pack $22.99) on a 30-60 day cycle, plus a
//     30-day Protec cartridge. AIRCARE's MAF1 wick is quoted by AIRCARE as one
//     per season and by Home Depot's listing for the same part as lasting "30
//     to 90 days, depending on the quality of your water" at $23.09 each.
//     Against all of that, the $19.79 Vicks vaporizer and the $279 Carepod are
//     the only two units here with genuinely zero required consumables.
//
//  7. CLEANING INTERVALS NOBODY KEEPS, AND WHAT ACTUALLY MAKES THEM KEEPABLE.
//     The EPA says "Clean portable humidifiers every third day to reduce the
//     buildup of scale and microorganisms." Honeywell's HWM845 manual says
//     weekly with a two-cup vinegar soak; Crane's manual says empty daily and
//     deep-clean weekly; Vicks says weekly vinegar plus a bleach disinfection;
//     Venta says every 10-14 days. Almost nobody does any of this, which is why
//     `cleaningBurden` records tank-opening access and dishwasher-safe parts
//     rather than just the interval. Only three products make the interval
//     realistic: the Honeywell HCM350 (manual states the tank and water tray
//     are top-rack dishwasher safe below 158°F), the Canopy 2.0 (tank, cap and
//     tray dishwasher-safe plus a disposable filter and an auto-dry fan cycle),
//     and the Carepod One (three stainless parts Carepod says are "99.9%
//     sterilizable" by boiling — note Carepod's own page says hand-wash or
//     boil, so retail listings calling them dishwasher-safe overstate it).
//
//  8. ANTIMICROBIAL AND UV CLAIMS ARE WATER-SIDE CLAIMS, NOT AIR CLAIMS, AND
//     SOME ARE NOT THE MANUFACTURER'S AT ALL. Honeywell's "Up to 99.9% Germ
//     Free*" is footnoted in its own manual to independent testing of microbial
//     reduction after two hours of UV exposure in the water tray. Canopy's UV
//     LED is likewise a before-evaporation water claim. The Crane EE-5301 is
//     the worst case: Home Depot's listing says it is "made with clean control
//     anti-microbial material which reduces mold and bacteria growth by up to
//     99.96%", FiltersFast's listing for the same model states no antimicrobial
//     claims are made, and Crane's own manual contains no such claim anywhere.
//     That is recorded in the spec as unsubstantiated rather than repeated.
//
// Where sources genuinely conflict, the conflict is recorded in the spec value
// itself rather than silently resolved — see the Crane EE-5301 coverage (250
// ft² in Crane's manual vs 500 ft² on Home Depot and Lowe's), the Honeywell
// HWM845 coverage (400 ft² at Walmart vs 520 ft² on office-supply listings vs
// "medium" on Honeywell's own store), the Vicks V150 runtime and coverage (24 h
// / 600 ft² per Vicks vs 18 h / 300-500 ft² per Target), the Carepod One
// coverage (500 ft² per Carepod vs 92 ft² on a third-party spec sheet), and the
// Carepod humidistat, where Carepod describes settings and a timer while a
// third-party sheet lists a humidistat.
//
// A note on releaseYear: none of these manufacturers publishes a launch date.
// For the legacy models — Honeywell HCM350, Crane Drop EE-5301, Venta LW25,
// Vicks V150, Pure Enrichment MistAire, AIRCARE MA1201 — releaseYear is the
// best-supported year of first US sale and should be treated as approximate.
// The Levoit, Dreo and Canopy figures are firmer, being anchored to first
// retail tracking of the current SKU.
//
// Products considered and dropped: the Honeywell HWM705B (honeywellstore.com
// marks it discontinued and out of stock, superseded by the HWM845); the Vicks
// V745A warm mist humidifier (real and current, but mechanically a duplicate of
// the HWM845B boiling-chamber design — the V150 vaporizer earns the Vicks slot
// because its electrode mechanism is a genuinely different trap); Govee's smart
// humidifiers and Elechomes (no first-party US spec page with a confirmable
// current price could be found in August 2026); the Levoit LV600S (heavily
// discounted and inconsistently priced across retailers, so no defensible
// street price); and Venta's LW25 Comfort Plus, dropped in favour of the
// Original specifically because the Original's missing humidistat is the more
// instructive data point. The Honeywell HCM350 is retained despite
// honeywellstore.com marking it discontinued, because honeywellpluggedin.com
// still carries the product page and the model is widely stocked and priced —
// that status conflict is recorded in the product's cons.
// ---------------------------------------------------------------------------

export const humidifierProducts: Product[] = raw as Product[];
