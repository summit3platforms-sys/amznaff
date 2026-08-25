import raw from './cordless-vacuums.json';
import { Product } from '../types';

// ---------------------------------------------------------------------------
// Cordless Vacuums category — researched August 2026.
//
// Product data lives in cordless-vacuums.json, not here, so the admin dashboard
// (/admin/products) can read and rewrite it directly. This file is the typed
// accessor layer plus the sourcing notes that JSON cannot hold.
//
// Sourcing: suction ratings, runtime claims, filtration wording, tank and bin
// volumes, battery and dock contents come from first-party manufacturer product
// pages and support documents (dyson.com, sharkninja.com, samsung.com,
// lg.com, mieleusa.com, levoit.com, wyze.com, hoover.com, us.tineco.com,
// us.roborock.com, bissell.com), cross-checked against retailer spec sheets
// with real stock and prices (Abt, Home Depot, Target, Best Buy, RC Willey,
// WebstaurantStore) and against independent measurement from TechGearLab,
// RTINGS, VacuumWars, TechRadar and The Gadgeteer. Street prices are the
// lowest currently-listed US price from a named reputable retailer at the time
// of research; where a maker's list price is materially higher it is recorded
// as msrp. ASINs were read from amazon.com /dp/<ASIN> URLs as they appeared in
// search results and on third-party price-history sites (camelcamelcamel,
// bigbangprice, manuals.plus), each cross-checked against a second independent
// source. Amazon product pages were NOT scraped — that would violate the
// Associates Operating Agreement. Confirm each ASIN in SiteStripe before
// relying on it.
//
// Category-specific traps recorded in the data:
//
// 1. THE RUNTIME NUMBER IS ECO MODE WITH A NON-POWERED TOOL. This is the
//    defining lie of the category and every product carries three fields for
//    it: runtimeEco (the headline), runtimeMax (max power), and
//    runtimePoweredHead (a sentence saying what the headline was measured
//    with). Miele publishes the truth on its own support site — 60 minutes at
//    MIN with the PowerUnit alone, 14-17 minutes at maximum with the
//    electrobrush — and the "120 minutes" on the box is two batteries added
//    together. LG's "120 minutes" is likewise two batteries, in Normal mode,
//    "without power nozzles", in LG's own wording. Shark's "70 minutes" is ECO
//    at the bare handheld with no wand and no floor head. Levoit's "60
//    minutes" is Eco with the crevice tool; fit the motorised head and it is
//    40, and Turbo is 12. Dyson publishes no per-mode figure at all —
//    TechGearLab measured 9 minutes on Boost with the Motorbar head against a
//    claimed 60. Samsung is the outlier that publishes the whole table
//    (100/49/16/1 min), and its 400 AW headline mode lasts one minute.
//
// 2. AIR WATTS vs PASCALS vs MOTOR WATTS. Three different numbers used
//    interchangeably to look strongest, and only air watts describes work done
//    at the cleaning head. Dyson (240 AW), Samsung (400 AW), LG (210 AW, and
//    only on a retailer spec sheet) and Levoit (90 AW) publish air watts.
//    Roborock and Tineco publish Pa, which is sealed suction at a blocked
//    inlet. Wyze quotes both 20,000 Pa and "100 AW" for the same machine.
//    Shark, Hoover, Bissell and Miele publish no suction figure at all — Abt's
//    380 W for the Shark and Hoover's 20 V are input power, not suction. The
//    suctionRating spec says which unit each maker used and why it matters.
//
// 3. "HEPA" ON THE BOX IS NOT SEALED FILTRATION. Only Dyson claims
//    whole-machine sealed filtration outright (and its 99.99% figure is stated
//    for Boost mode). Wyze calls its filter HEPA and then rates it at 95% of
//    sub-0.3-micron particles — real HEPA is 99.97%. Hoover claims 99.4% at an
//    unstated particle size and never says HEPA. Shark markets its
//    Anti-Allergen Complete Seal on the corded PowerDetect but not on this
//    cordless one, and sources conflict on whether the IP1251 has a HEPA
//    element at all. None of the wet-dry washers makes any filtration claim.
//
// 4. WET-DRY SELF-CLEAN CYCLES MOSTLY USE COLD WATER. Tineco's headline
//    "185°F FlashDry" is the drying air temperature, not the wash water —
//    hot-water washing requires the more expensive S7 Stretch Steam. Bissell's
//    self-clean flushes with tank water and has no drying stage at all, so the
//    roller is stored damp. Only the Roborock F25 Ultra genuinely washes hot
//    (194°F water, 356°F steam) and then dries at 203°F. Dyson's V15s
//    Submarine has no self-clean cycle whatsoever. Every washer still needs the
//    dirty-water tank emptied and rinsed by hand; only Roborock's detachable
//    separation module keeps your hand out of the hair slurry.
//
// 5. WHAT IS NOT IN THE BOX. Dyson and Miele ship a wall bracket that must be
//    drilled into a wall and no free-standing dock; Wyze ships a bare AC
//    charger with no mount of any kind. Only LG ships two batteries. Only LG
//    and Samsung include an auto-empty base, and Samsung's is bagged, so the
//    bags are a permanent consumable while LG's tower is bagless. Shark's
//    auto-empty base is a different SKU that cannot be added to the IP1251
//    later. Tineco and Bissell both steer you to their own detergent.
//
// 6. TRIGGER-HOLD vs PUSH-BUTTON. Both Dysons require the trigger to be held
//    for the entire clean; Shark, Miele, LG, Samsung, Levoit and Wyze use a
//    push button. This is recorded in the pros/cons and reflected in the
//    handling score rather than as a separate spec field.
//
// Notes on judgement calls: eufy/Anker was dropped because its US cordless
// stick collection is now empty and the MACH V1 Ultra is delisted at Abt, so
// no current US price could be confirmed; a second Dyson (the V15s Detect
// Submarine) takes that slot instead. Hoover's and Wyze's warranty lengths
// come from the brands' general limited-warranty terms rather than the product
// pages, which do not restate them.
//
// Where sources genuinely conflict, the conflict is recorded in the spec value
// itself rather than silently resolved — see the Shark's filtration and suction
// fields, Samsung's removable-battery field, and Wyze's bin capacity.
// ---------------------------------------------------------------------------

export const cordlessVacuumProducts: Product[] = raw as Product[];
