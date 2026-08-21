import raw from './smart-plugs.json';
import { Product } from '../types';

// ---------------------------------------------------------------------------
// Smart Plugs category — researched August 2026.
//
// Product data lives in smart-plugs.json, not here, so the admin dashboard
// (/admin/products) can read and rewrite it directly. This file is the typed
// accessor layer plus the sourcing notes that JSON cannot hold.
//
// Sourcing: electrical ratings (amps, watts, HP), dimensions, IP ratings,
// operating-temperature ranges and warranty terms come from first-party
// specification pages, datasheets and manuals — tp-link.com (EP25P4, KP125M,
// EP40A, EP40M, HS300 datasheet, Tapo P316M), meross.com and shop.meross.com,
// shop.emporiaenergy.com, us.aqara.com, us.switch-bot.com and the SwitchBot
// 15A Plug Mini manual, evehome.com, wyze.com, and the Zooz ZEN15 800LR manual
// and support specs page. Prices are August 2026 US listings from named
// retailers — B&H (EP40M $25.99, Tapo P316M $49.99), Best Buy (Amazon Smart
// Plug $24.99, P316M $59.99), Home Depot (Eve Energy $39.95), The Smartest
// House (Zooz ZEN15 800LR $37.95), and the manufacturers' own stores
// (Emporia, SwitchBot, Aqara, Meross, Wyze). Cross-checks and trap-hunting
// used BGR's KP125M review, HomeTechHacker's MSS315 teardown, TechRadar's
// Amazon Smart Plug review, Engadget's smart-plug guide, the python-kasa
// project discussions, TP-Link's own community forum, the Hubitat community,
// and CPSC recall 23-274. Two widely-cited "best smart plug 2026" listicles
// (smarthomeexplorer.com among them) were discarded outright: they invented
// accuracy figures, claimed a "TP-Link bridge (included)" that does not
// exist, and described the single-outlet KP401 as a dual-outlet plug.
//
// ASINs were read from amazon.com /dp/<ASIN> URLs as they appeared in search
// results and on third-party price-history sites, each cross-checked against
// a second independent source. Amazon product pages were NOT scraped — that
// would violate the Associates Operating Agreement. Confirm each ASIN in
// SiteStripe before relying on it.
//
// Category-specific traps recorded in the data:
//
// 1. THE 15A / 1,800W NUMBER IS RESISTIVE, AND THE MOTOR RATING IS THE REAL
//    LIMIT. Nearly every plug here says "15A / 1,800W". TP-Link's own EP25P4
//    sheet then adds "1/6 HP motor" — about 125 W of motor. The outdoor EP40M
//    is 1/2 HP, and the Zooz ZEN15 is 1 HP. Most makers (Meross, Eve, Aqara,
//    SwitchBot, Amazon, Emporia) publish no motor rating at all. The
//    motorLoadRating spec carries the real figure or an honest "not published"
//    string. Space heaters are worse still: a 1,500W heater sits at 83% of a
//    1,800W plug indefinitely, and the Zooz manual — the most load-serious
//    device here — explicitly prohibits electric heaters.
//
// 2. EMPORIA IS A 10A PLUG WEARING A 15A LABEL. Emporia's own store lists
//    "10A max continuous" with 15A allowed only as a peak for up to one hour
//    a day, and separately quotes "1800W @ 120V" on the same page. Both
//    figures are recorded in the maxLoad spec as a conflict rather than
//    silently resolved. Emporia also publishes a do-not-use list (fridges,
//    freezers, pumps, pet heat lamps, routers) that eliminates most of the
//    loads people buy an energy-monitoring plug to measure.
//
// 3. ENERGY MONITORING IS NOT ONE FEATURE. Three different things are sold
//    under the name. (a) Real measurement you can see: Emporia, Zooz (W, A, V
//    and kWh), Tapo P316M (per outlet). (b) Real measurement locked in the
//    vendor's own app: the Kasa KP125M measures power but Matter does not
//    carry it, so in Apple Home or Google you see nothing — BGR's review is
//    blunt about this. (c) None at all: the Amazon Smart Plug and, notably,
//    the Matter outdoor EP40M, where TP-Link staff told a customer on TP-Link's
//    own forum that "the energy monitoring feature cannot be added through a
//    firmware update" and marked the request Declined. The energyMonitoring
//    spec says which of the three each product is.
//
// 4. "NO HUB REQUIRED" USUALLY MEANS "NO HUB FOR OUR APP". Aqara is Zigbee and
//    needs an Aqara hub (its Amazon title literally shouts REQUIRES AQARA HUB).
//    Zooz is Z-Wave and needs a gateway. Eve is Matter over Thread and is inert
//    without a Thread border router. And the Matter-over-Wi-Fi plugs are only
//    hub-free inside their own app — Meross's store page states plainly that
//    "A Matter-Compatible hub is required", and the Kasa/Tapo Matter devices
//    need a HomePod, Echo, Nest Hub or SmartThings hub to appear in those
//    ecosystems. None of these hubs is in any box. The hubRequired spec
//    records the requirement in full.
//
// 5. LOCAL CONTROL VS CLOUD. Eve (Thread, no account at all), Zooz (Z-Wave),
//    Aqara (Zigbee, hub-executed) and the Kasa/Tapo Matter plugs keep working
//    through an internet outage. The Amazon Smart Plug, Emporia and Wyze do
//    not — control, schedules and voice all route through a vendor cloud.
//    SwitchBot is a halfway case: Bluetooth LE keeps working in range while
//    remote control does not. The localControl spec states which.
//
// 6. HOMEKIT AND MATTER ARE SKU-LEVEL, NOT BRAND-LEVEL. SwitchBot sells the
//    Plug Mini in two physically similar variants — the standard W1901400 in
//    this file has no HomeKit, while a dearer "HomeKit Enabled" SKU does, and
//    Matter needs a SwitchBot Hub on top of either. TP-Link's line shows the
//    same fracture from the other direction: the EP25 has native HomeKit but
//    no Matter, the KP125M has Matter but reaches Apple Home only through a
//    Matter controller, and the launch-era "with Energy Monitoring" wording
//    has since disappeared from the EP25 4-pack listing title even though the
//    2022 press release led with it.
//
// 7. OUTDOOR IP RATINGS DESCRIBE THE BOX, NOT THE INSTALLATION. Both outdoor
//    plugs here are IP64 — dust-tight and splash-resistant. Neither TP-Link nor
//    Wyze publishes any rating for a socket with a cord plugged into it, which
//    is the only state an outdoor plug is ever actually in, and both expect the
//    sockets to face downward. The weatherRating spec says so explicitly rather
//    than repeating "IP64" as though it settled the question.
//
// 8. MULTI-PACK PRICING MAKES PER-UNIT COMPARISON MISLEADING. Prices in this
//    file are the price of the pack actually cited, and every product also
//    carries packSize and pricePerOutlet so the comparison pages can rank on
//    cost per switched outlet. That spread is enormous: $7.50 for a SwitchBot
//    in a 4-pack against $39.95 for a single Eve Energy — and $8.33 per outlet
//    for a six-outlet Tapo strip that shares one 1,875W budget between them.
//
// 9. RECALL HISTORY. CPSC recall 23-274 (September 2023) covered roughly
//    80,000 Emporia North America Smart Plugs sold July 2022 to May 2023 for
//    inadequate grounding and an electric-shock hazard. It is recorded in the
//    Emporia product's cons and reflected in its Build & Safety score.
//
// Where sources genuinely conflict, the conflict is recorded in the spec value
// itself rather than silently resolved — see Emporia's maxLoad, and the Zooz
// entry where retail marketing ("for 110V AC units, sump pumps") and the 800LR
// manual's prohibited-device list do not agree.
//
// Deliberately not included: the Kasa HS300 power strip, which is the older
// non-Matter sibling of the Tapo P316M and duplicates it on every axis but
// Matter; the Tapo P125M, which is the KP125M without energy monitoring; and
// any 20A NEMA 5-20 plug — no mainstream vendor ships one, and the "20 amp
// smart plug" search results are 15A devices with 20A-rated pass-through
// marketing copy.
// ---------------------------------------------------------------------------

export const smartPlugProducts: Product[] = raw as Product[];
