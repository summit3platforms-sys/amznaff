import raw from './wireless-chargers.json';
import { Product } from '../types';

// ---------------------------------------------------------------------------
// Wireless Chargers category — researched August 2026.
//
// Product data lives in wireless-chargers.json, not here, so the admin
// dashboard (/admin/products) can read and rewrite it directly. This file is
// the typed accessor layer plus the sourcing notes that JSON cannot hold.
//
// Sourcing: charging standard, wattage, magnet arrangement, certification and
// in-box contents come from first-party manufacturer specification pages and
// from the Wireless Power Consortium's Qi2 certification listings, cross-
// checked against independent review outlets (ChargerLAB, Wirecutter, Tom's
// Guide, The Verge, 9to5Mac). ASINs were read from amazon.com /dp/<ASIN> URLs
// as they appeared in search results and on third-party price-history sites,
// each cross-checked against a second independent source. Amazon product pages
// were NOT scraped — that would violate the Associates Operating Agreement.
// Confirm each ASIN in SiteStripe before relying on it for revenue.
//
// Category-specific traps recorded in the data — this category has more
// misleading marketing than any other on the site:
//
// 1. THE Qi2 TRAP. "MagSafe compatible" and "magnetic" describe the magnets,
//    not the charging standard. A pad can have a perfect magnetic ring and
//    still be plain Qi at 7.5W. The ESR HaloLock in this set is exactly that.
//    Qi2 (15W, WPC-certified Magnetic Power Profile) and "magnets plus Qi" are
//    recorded as separate spec fields so the difference cannot be blurred.
//
// 2. THE ADAPTER IS OFTEN NOT INCLUDED. Six of the twelve chargers here ship
//    without a power adapter, and several need a specific PD wattage to reach
//    their rated speed. That is a real $20–40 addition to the price. In-box
//    contents and the required adapter spec are recorded for every product.
//
// 3. "UP TO 15W" ON ANDROID. Qi2's 15W applies to Qi2-capable phones. Many
//    Android handsets fall back to 5W or the maker's proprietary rate. Where
//    the manufacturer documents per-device rates they are recorded.
//
// 4. MULTI-DEVICE PADS SHARE POWER, exactly as wired chargers do. A 3-in-1
//    stand rarely delivers its phone-pad maximum while a watch and buds are
//    also charging. The split is recorded where published.
//
// 5. CASE THICKNESS LIMITS. Magnetic alignment and charge rate both degrade
//    past roughly 3mm of case. The manufacturer's stated limit is recorded.
//
// Where sources genuinely conflict, the conflict is recorded in the spec value
// itself rather than silently resolved, so a reader can see the uncertainty.
// ---------------------------------------------------------------------------

export const wirelessChargerProducts: Product[] = raw as Product[];
