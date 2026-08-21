import raw from './power-banks.json';
import { Product } from '../types';

// ---------------------------------------------------------------------------
// Power Banks category — researched August 2026.
//
// Product data lives in power-banks.json, not here, so the admin dashboard
// (/admin/products) can read and rewrite it directly. This file is the typed
// accessor layer plus the sourcing notes that JSON cannot hold.
//
// Sourcing: capacity, output wattage, port counts and cable arrangements come
// from first-party manufacturer specification pages, cross-checked against
// independent measurement outlets (ChargerLAB, Tom's Guide, Wirecutter,
// TechRadar, The Verge). ASINs were read from amazon.com /dp/<ASIN> URLs as
// they appeared in search results and on third-party price-history sites, each
// cross-checked against a second independent source. Amazon product pages were
// NOT scraped — that would violate the Associates Operating Agreement. Confirm
// each ASIN in SiteStripe before relying on it for revenue.
//
// Category-specific traps recorded in the data:
//
// 1. CELL CAPACITY vs USABLE CAPACITY. The mAh figure on the box is the rating
//    of the internal 3.6–3.7V cells. Charging a phone requires stepping that up
//    to 5V or higher, and conversion is roughly 60–70% efficient in practice.
//    A "10,000mAh" bank delivers roughly 6,000–6,800mAh at 5V. Where a maker
//    publishes a Wh figure it is recorded, because Wh is the only comparable
//    number across banks — and it is also the number airlines regulate (100Wh
//    is the usual carry-on limit without airline approval).
//
// 2. CELL-COUNT MARKETING FIGURES. Ekrist's "25,800mAh" is a sum across cells
//    rather than a rated pack capacity, and no Wh figure is published anywhere
//    first-party. That is recorded as a note in the spec rather than restated
//    as fact.
//
// 3. POWER SHARING. Peak wattage is almost always a single-port figure. With
//    two or three ports loaded, per-port output drops sharply. Where the
//    manufacturer publishes the split, it is recorded; where it does not, the
//    spec says so instead of implying the peak holds across all ports.
//
// 4. PASS-THROUGH AND RECHARGE TIME. Recharge input wattage is frequently far
//    below output wattage, so a 100W bank can still take four hours to refill.
//    Input wattage is recorded separately from output wattage for this reason.
//
// Where sources genuinely conflict, the conflict is recorded in the spec value
// itself rather than silently resolved, so a reader can see the uncertainty.
// ---------------------------------------------------------------------------

export const powerBankProducts: Product[] = raw as Product[];
