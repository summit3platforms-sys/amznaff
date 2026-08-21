import raw from './portable-power-stations.json';
import { Product } from '../types';

// ---------------------------------------------------------------------------
// Portable Power Stations category — researched August 2026.
//
// Product data lives in portable-power-stations.json, not here, so the admin
// dashboard (/admin/products) can read and rewrite it directly. This file is
// the typed accessor layer plus the sourcing notes that JSON cannot hold.
//
// Sourcing: capacity (Wh), inverter continuous/surge wattage, chemistry, cycle
// life and recharge times come from first-party manufacturer specification
// pages, cross-checked against independent testing (HoboTech, Will Prowse,
// Tom's Guide, TechRadar, Wirecutter). ASINs were read from amazon.com
// /dp/<ASIN> URLs as they appeared in search results and on third-party
// price-history sites, each cross-checked against a second independent source.
// Amazon product pages were NOT scraped — that would violate the Associates
// Operating Agreement. Confirm each ASIN in SiteStripe before relying on it.
//
// Category-specific traps recorded in the data:
//
// 1. LiFePO4 vs NMC. LiFePO4 (LFP) cells are rated for roughly 3,000–4,000
//    cycles to 80% capacity; older NMC cells for roughly 500–800. For a unit
//    cycled weekly that is the difference between a decade and about three
//    years. Chemistry is recorded as a first-class spec for every unit because
//    it, not headline capacity, is the main determinant of lifetime value.
//
// 2. "SURGE" THAT IS ACTUALLY VOLTAGE REDUCTION. BLUETTI's "Power Lifting" and
//    EcoFlow's "X-Boost" do not deliver more watts — they lower output voltage
//    so a resistive load (a kettle, a heater) draws less current and appears to
//    run. They will not start an inductive load such as a compressor or pump,
//    and they are not equivalent to true inverter surge headroom. The specs
//    distinguish the two explicitly.
//
// 3. USABLE vs RATED CAPACITY. Inverter conversion losses and the reserve the
//    BMS holds back mean roughly 85% of rated Wh reaches an AC load. Where a
//    maker publishes a measured usable figure it is recorded alongside rated.
//
// 4. RECHARGE TIME CAVEATS. Fast AC recharge figures usually assume the unit is
//    in a high-power mode that runs the fan loudly and, on some chemistries,
//    shortens cell life. Where the manufacturer documents that trade-off it is
//    recorded.
//
// 5. SOLAR INPUT is a maximum, gated by voltage and current windows that most
//    panel arrays never simultaneously satisfy. The spec records the window,
//    not just the headline watt figure.
//
// Where sources genuinely conflict, the conflict is recorded in the spec value
// itself rather than silently resolved, so a reader can see the uncertainty.
// ---------------------------------------------------------------------------

export const portablePowerStationProducts: Product[] = raw as Product[];
