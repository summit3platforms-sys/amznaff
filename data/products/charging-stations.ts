import raw from './charging-stations.json';
import { Product } from '../types';

// ---------------------------------------------------------------------------
// Charging Stations category — researched August 2026.
//
// Covers multi-device desktop and bedside charging hubs: multi-port GaN docks,
// 3-in-1 and 4-in-1 stands, and desktop units that combine AC outlets with USB.
//
// Product data lives in charging-stations.json, not here, so the admin
// dashboard (/admin/products) can read and rewrite it directly. This file is
// the typed accessor layer plus the sourcing notes that JSON cannot hold.
//
// Sourcing: port counts, per-port wattage, power-sharing tables, AC outlet
// ratings and protection features come from first-party manufacturer
// specification pages and manuals, cross-checked against independent review and
// measurement outlets (ChargerLAB, Wirecutter, Tom's Guide, The Verge).
// ASINs were read from amazon.com /dp/<ASIN> URLs as they appeared in search
// results and on third-party price-history sites, each cross-checked against a
// second independent source. Amazon product pages were NOT scraped — that would
// violate the Associates Operating Agreement. Confirm each ASIN in SiteStripe
// before relying on it for revenue.
//
// Category-specific traps recorded in the data:
//
// 1. NO SURGE PROTECTION ON UNITS WITH AC OUTLETS. Anker's Prime 140W 6-in-1
//    carries two AC outlets and no surge protection. It is a power *strip* in
//    that respect, not a protected one, and plugging a desktop or monitor into
//    it does not give that gear the protection a surge strip would. Surge
//    protection (and its joule rating, where published) is recorded as its own
//    spec for every unit with AC outlets.
//
// 2. TOTAL WATTAGE IS A BUDGET, NOT A PER-PORT PROMISE. A "140W" station splits
//    that figure across everything plugged in, and the split is rarely even.
//    The published sharing table is recorded for every product that has one.
//
// 3. STANDARD MIXING. A single station commonly combines USB-C PD, PPS, Qi or
//    Qi2 wireless, and an Apple-Watch puck that may or may not be a licensed
//    fast charger. Each is recorded separately — "wireless charging" alone
//    tells a buyer nothing about speed.
//
// 4. WATCH PUCKS ARE NOT INTERCHANGEABLE. An unlicensed Apple Watch puck will
//    not fast-charge, and Galaxy Watch charging is a different standard again.
//    Licensing status is recorded where the manufacturer states it.
//
// Where sources genuinely conflict, the conflict is recorded in the spec value
// itself rather than silently resolved, so a reader can see the uncertainty.
// ---------------------------------------------------------------------------

export const chargingStationProducts: Product[] = raw as Product[];
