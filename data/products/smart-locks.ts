import raw from './smart-locks.json';
import { Product } from '../types';

// ---------------------------------------------------------------------------
// Smart Locks category — researched August 2026.
//
// Product data lives in smart-locks.json, not here, so the admin dashboard
// (/admin/products) can read and rewrite it directly. This file is the typed
// accessor layer plus the sourcing notes that JSON cannot hold.
//
// Sourcing: grades, radios, battery chemistry, hub requirements and door-fit
// limits come from first-party manufacturer product and support pages
// (schlage.com and Schlage Residential's Zendesk security-ratings article,
// shopyalehome.com, august.com, kwikset.com, level.co, us.aqara.com,
// us.switch-bot.com, ultraloq.com, lockly.com, wyze.com, eufy.com), cross-
// checked against independent review outlets (Tom's Guide, PCWorld, PCMag,
// TechHive, AppleInsider, The Verge, Popular Mechanics, Wired, MacSources,
// Gizmodo). ASINs were read from amazon.com /dp/<ASIN> URLs as they appeared
// in search results, in review articles' outbound links, and on third-party
// price-history sites (camelcamelcamel), each cross-checked against a second
// independent source. Amazon product pages were NOT scraped — that would
// violate the Associates Operating Agreement. Confirm each ASIN in SiteStripe
// before relying on it for revenue.
//
// Category-specific traps recorded in the data. Smart-lock marketing hides
// more of the decisive facts than any other category on this site:
//
//  1. THE ANSI/BHMA GRADE IS USUALLY MISSING. Only Schlage (Encode Plus:
//     A156.36 Grade 1 AND A156.40 Grade AAA), Level (Grade 1/A, BHMA AAA,
//     250,000 cycles) and Kwikset (BHMA Grade AAA plus a UL 20-minute fire
//     rating) publish anything checkable. Aqara says only "BHMA-certified".
//     Lockly publishes no grade at all on a $349 lock. Ultraloq's "ANSI
//     Grade 1" exists in marketing and reviews but not in a certification
//     listing. eufy's E30 is Grade 3 — the weakest residential grade — which
//     only surfaced in PCWorld's review. Worst of all, Schlage markets the
//     $399 Sense Pro as an "AAA Certified Deadbolt" while Tom's Guide and
//     AppleInsider both report ANSI Grade 2, and Schlage's own ratings
//     article silently omits Sense Pro. Every one of those states is written
//     into the ansiBhmaGrade spec verbatim rather than smoothed over.
//
//  2. "WORKS WITH MATTER / APPLE HOME" IS NOT THE SAME AS WORKING. Four
//     distinct arrangements are recorded separately in smartRadio and
//     hubRequired. Wi-Fi in the lock (Wyze, eufy, August, Kwikset, Schlage
//     Encode Plus, Lockly) works remotely with no extra box. Matter over
//     Thread (Aqara U200, Ultraloq, Level, plus Schlage Sense Pro) needs a
//     Thread border router you must already own — the lock is inert to the
//     outside world without one. Bluetooth-only-plus-hub (SwitchBot Lock Pro,
//     whose maker states outright "Lock Pro is not directly Matter enabled")
//     means the hub is the smart device. And a bridge in the box (Yale
//     Approach on this SKU) is different again from the cheaper Approach
//     listings that omit it. Kwikset's Halo Select adds a fifth wrinkle: it
//     has both Wi-Fi and Thread, but Kwikset's own comparison shows that in
//     Matter mode you lose access-code add/remove, code scheduling, event
//     history and door-sensor settings — those stay in the Kwikset app.
//
//  3. APPLE HOME KEY IS CLAIMED FAR MORE OFTEN THAN IT IS HELD. In this set
//     only the Aqara U200, Schlage Encode Plus, Level Lock Pro, Lockly Visage
//     and Schlage Sense Pro actually do it. August supports HomeKit control
//     but not tap-to-unlock. Ultraloq's Bolt series has no NFC unlock at all,
//     and U-tec confirms this in its own FAQ. UWB is narrower still: it works
//     on UWB-equipped iPhones only, on both the Sense Pro and Ultraloq's Bolt
//     Mission, with Aliro support for Android announced and not shipped.
//
//  4. BATTERY CLAIMS COLLAPSE UNDER TESTING. August's own page says up to
//     3 months on two CR123A cells, and owners report replacing them every
//     90 days. Schlage publishes no figure for the Encode Plus and owners
//     report 2-3 months. Lockly claims up to 8 months while Tom's Guide found
//     the default settings wanted monthly charging. Tom's Guide's Sense Pro
//     was at 51% after two weeks. Schlage's Sense Pro page even names the
//     wrong cell size (AAA) against two reviewers who counted four AAs. The
//     manufacturer's number lives in batteryClaimMonths; the conflict lives
//     in the spec string or the cons, never resolved silently.
//
//  5. NO KEY, NO EMERGENCY CONTACT, NO WAY IN. The failSafeAccess score is
//     this category's trap dimension. The $399 Schlage Sense Pro has no
//     physical keyway at all — the only fallback is a USB-C port under the
//     escutcheon. The $349 Level Lock Pro has keys and fobs but no emergency
//     power contact, so a flat CR2 means the metal key. The $80 Wyze has both
//     a key and a USB-C contact. Price and fail-safe access are close to
//     inversely correlated here.
//
//  6. RETROFIT LOCKS KEEP YOUR EXISTING EXTERIOR KEYWAY — WHICH IS A
//     SECURITY FACT, NOT A CONVENIENCE ONE. SwitchBot Lock Pro, Aqara U200,
//     Yale Approach and the August Wi-Fi Smart Lock all bolt over the inside
//     thumbturn. Your keys keep working, which is excellent when the battery
//     dies and terrible if the deadbolt underneath is an ungraded builder's
//     special. A retrofit cannot raise the grade of the lock it sits on, so
//     ansiBhmaGrade says so explicitly on all four rather than leaving the
//     field blank.
//
//  7. DOOR THICKNESS AND BACKSET QUIETLY DISQUALIFY BUYERS. Level Lock Pro
//     fits doors 1.75-2.0 in thick only, which excludes a great many 1-3/8 in
//     American doors — it is the narrowest window here and it is buried in
//     Level's technical specifications. Kwikset publishes a full 1-3/8 to
//     1-3/4 in range with backset and bore. Most other makers publish nothing
//     at all, and doorFit records that absence. Aqara adds a second limit:
//     the U200's wireless keypad must sit within about 6 ft of the lock, and
//     slim-profile US deadbolts need replacing before the retrofit will fit.
//
//  8. AUTO-UNLOCK AND GEOFENCING ARE NOT THE SAME MECHANISM. Bluetooth or
//     GPS geofencing (August, SwitchBot, Kwikset) fires on a radius and is
//     the source of most "it unlocked while I was in the back garden"
//     complaints. UWB (Sense Pro) measures the distance to the door itself.
//     Lockly's Visage uses radar to recognise a face rather than a phone.
//     These are recorded as separate specs (uwbUnlock) rather than folded
//     into one "auto-unlock" tick.
//
// Where sources genuinely conflict, the conflict is recorded in the spec value
// itself rather than silently resolved, so a reader can see the uncertainty.
//
// warrantyMonths reflects the electronics warranty where the manufacturer
// publishes one (Schlage 36, Yale Assure 24, Ultraloq 18) and otherwise the
// 1-year US limited term; lifetime mechanical and finish cover, where offered,
// is noted in the product's features or pros instead.
// ---------------------------------------------------------------------------

export const smartLockProducts: Product[] = raw as Product[];
