import raw from './usb-chargers.json';
import { Product } from '../types';

// ---------------------------------------------------------------------------
// USB Chargers category — researched August 2026.
//
// Product data lives in usb-chargers.json, not here, so the admin dashboard
// (/admin/products) can read and rewrite it directly. This file is the typed
// accessor layer plus the sourcing notes that JSON cannot hold.
//
// Sourcing: total wattage, per-port wattage, power-sharing tables, PD/PPS
// support and GaN generation come from first-party manufacturer specification
// pages and manuals, cross-checked against independent measurement (ChargerLAB,
// Wirecutter, Tom's Guide, The Verge). ASINs were read from amazon.com
// /dp/<ASIN> URLs as they appeared in search results and on third-party
// price-history sites, each cross-checked against a second independent source.
// Amazon product pages were NOT scraped — that would violate the Associates
// Operating Agreement. Confirm each ASIN in SiteStripe before relying on it.
//
// Category-specific traps recorded in the data:
//
// 1. POWER SHARING IS THE WHOLE CATEGORY. The headline number is what a single
//    port delivers alone. UGREEN's Nexode 65W, for example, drops to
//    45W + 8.5W + 8.5W once all three ports are occupied — so it cannot fast-
//    charge a laptop and a phone at the same time despite the "65W" on the box.
//    Every product here records the multi-port split where the manufacturer
//    publishes one, because that table, not the peak, decides whether the
//    charger suits a two-device desk.
//
// 2. PPS vs PLAIN PD. Samsung's 45W Super Fast Charging 2.0 and several other
//    fast-charge modes require PPS (Programmable Power Supply), not just USB-C
//    PD. A 65W charger without PPS will charge a Galaxy at 25W. PPS support and
//    its voltage/current range are recorded separately from PD wattage.
//
// 3. USB-A PORTS ARE NOT PD. A USB-A port on a PD charger tops out at Quick
//    Charge speeds and will not fast-charge a modern iPhone or MacBook. Port
//    type and protocol are recorded per port rather than as a single figure.
//
// 4. GaN GENERATION AFFECTS SIZE AND HEAT, NOT SPEED. Marketing tends to imply
//    otherwise. Where a maker publishes dimensions and weight they are recorded,
//    because that is where GaN actually shows up.
//
// Where sources genuinely conflict, the conflict is recorded in the spec value
// itself rather than silently resolved, so a reader can see the uncertainty.
// ---------------------------------------------------------------------------

export const usbChargerProducts: Product[] = raw as Product[];
