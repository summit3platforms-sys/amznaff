import raw from './smart-lights.json';
import { Product } from '../types';

// ---------------------------------------------------------------------------
// Smart Lights category — researched August 2026.
//
// Product data lives in smart-lights.json, not here, so the admin dashboard
// (/admin/products) can read and rewrite it directly. This file is the typed
// accessor layer plus the sourcing notes that JSON cannot hold.
//
// Sourcing: lumen figures, colour-temperature ranges, CRI, dimming floors,
// switch-cycle counts, warranty terms, IP ratings and hub requirements were
// read off first-party specification tables — philips-hue.com/en-us product
// pages (046677590857 for the Chromasync A19, 046677592592 for the Essential
// A19, 7820231U7 for the Play light bar, plus the Bridge and Bridge Pro
// listings), tp-link.com/us for the Tapo L530E, support.wyze.com's Bulb Color
// spec article and wyze.com's own limited-warranty terms, lifx.com's SuperColor
// spec block, us.aqara.com's LED Bulb T2 E26 page and its /pages/limited-warranty
// table, nanoleaf.me's Shapes tech-spec accordion and its warranty page,
// us.govee.com for the Floor Lamp 2 (H607C) and the Matter FAQ, and
// us.switch-bot.com for the LED Strip Light 3. Prices are August 2026 US
// listings from the manufacturers' own US stores (Philips Hue, LIFX, Wyze,
// Aqara, SwitchBot, Govee, Nanoleaf), Walmart (Tapo L530E 4-pack, $21.95 from
// $29.00), Best Buy (Hue Play 2-pack, $189.99, matching Signify's own store)
// and camelcamelcamel (Hue Essential 4-pack, $47.95 on 11 Aug 2026 against
// Signify's $59.99 list). Govee's LED Strip Light M1 price is Govee's own
// launch press release ($59.99 for the 6.56 ft), corroborated by The Verge and
// The Ambient. Cross-checks and trap-hunting used The Verge's and The Ambient's
// M1 reviews, Wirecutter's smart strip-light guide, 9to5Mac's Aqara T2 review,
// and Govee's, SwitchBot's and Signify's own FAQ and comparison copy — several
// of the best traps in this file are makers contradicting themselves on their
// own product pages.
//
// ASINs were read from amazon.com /dp/<ASIN> URLs as they appeared in search
// results and on third-party price-history sites, each cross-checked against a
// second independent source (camelcamelcamel, ubuy/desertcart/tiendamia ASIN
// listings, manuals.plus, eBay MPN fields, liquidation-auction listings).
// Amazon product pages were NOT scraped — that would violate the Associates
// Operating Agreement. Confirm each ASIN in SiteStripe before relying on it.
//
// TWO PRODUCTS DELIBERATELY CARRY AN EMPTY amazonAsin. The Philips Hue
// Chromasync-generation A19 2-pack and the Wyze Bulb Color BR30 4-pack are both
// real, both currently priced on the manufacturer's own US store, and both
// belong in the comparison — but no ASIN for those exact variants could be
// cross-checked against a second independent source, and inventing one would be
// worse than shipping without a buy button. Their cons arrays say so plainly.
// The Govee M1's ASIN (B0BWLHHV8M) rests on The Verge's Amazon link plus
// Govee's own press release for the product and price; it is the thinnest
// ASIN evidence in the file and should be SiteStripe-checked first.
//
// Category-specific traps recorded in the data:
//
// 1. THE LUMEN NUMBER IS A WHITE NUMBER. Every product in this file is sold on
//    a single headline brightness figure, and in every case that figure is
//    measured on white light. Not one of the twelve publishes lumens at a
//    saturated colour. The lumensColor spec therefore says "Not published by
//    the manufacturer" twelve times out of twelve — which is itself the
//    finding. Three makers at least admit the gap exists: TP-Link prints
//    "Brightness may vary in color mode" on its own US spec page, SwitchBot's
//    retail listing says "up to 1200lm brightness (varies by color)", and
//    Aqara publishes two separate white figures (1,100 lm at 6500K, 950 lm at
//    2700K — a 14% spread) rather than one flattering one. Signify is the worst
//    offender at the top of the market: the $98.99 Chromasync A19 publishes
//    "Lumen output at 4000K: 810" and nothing else, no 2700K figure and no
//    colour figure, while its own cheaper Essential bulb publishes both white
//    points. That asymmetry is why "Colour-Output Honesty" is this category's
//    trap score dimension.
//
// 2. "NO HUB REQUIRED" IS ALMOST NEVER TRUE. Only LIFX, Tapo and the two Wyze
//    bulbs work fully with nothing else bought. Hue bulbs pair over Bluetooth
//    but Signify's own spec sheet carries the row "Voice assistants (Hue Bridge
//    required)", and the Hue Play bar's product page states flatly "Philips Hue
//    Bridge required" — the Bridge is $69.99 for 50 lights and 12 accessories,
//    the Bridge Pro $139.99 for 150+ lights, and neither is in any box. Aqara's
//    T2 needs a Thread border router in Thread mode or an Aqara hub in Zigbee
//    mode. Govee's own Matter FAQ says "a Matter hub — or a Matter controller
//    is required", and adds that an IPv6 network is mandatory. SwitchBot's page
//    says "Matter hub required". Nanoleaf's works-with index marks Matter as
//    "Compatible Matter Hub Needed" and Thread as "Required: Thread Border
//    Router". The hubRequired spec spells out which hub, for which feature, at
//    what price.
//
// 3. MATTER IS FOUR TRAITS, NOT A FEATURE SET. Govee's Matter FAQ states the
//    supported feature list outright: "switching on/off, brightness adjustment,
//    color temperature adjustment, and color changing. More features TBD."
//    Every gradient, scene, music mode and DreamView group stays locked in the
//    vendor app. The same FAQ answers "Thread or Wi-Fi?" with "Wi-Fi", and
//    warns that changing Wi-Fi networks from inside the Govee app disables
//    Matter until the device is reset and re-commissioned. Govee also confirms
//    that only the 2 m M1 is Matter-native; the 5 m version "requires a
//    Matter-enabled control box". The protocol and localControl specs record
//    Matter-over-Wi-Fi versus Matter-over-Thread versus Zigbee separately,
//    because they behave completely differently in an outage.
//
// 4. LOCAL CONTROL VS CLOUD. Hue (Zigbee via Bridge, spec row "WiFi: Works
//    without Wi-Fi") and Aqara (Thread or Zigbee, both executed locally) keep
//    running with the internet down. LIFX keeps LAN and Matter control but
//    loses remote access. Govee and SwitchBot are halfway: Matter and Bluetooth
//    are local, but the scenes people actually bought the product for are not.
//    Tapo and both Wyze bulbs are cloud-only — no Matter, no local API, no
//    fallback beyond the wall switch. localControl says which.
//
// 5. CRI IS THE SPEC THAT IS NOT WHERE YOU EXPECT IT. The $5.49-a-bulb Tapo
//    publishes CRI >= 90; the $11.11-a-bulb Wyze publishes 90+; the $23.99
//    Aqara publishes Ra > 90. The $49.50-a-bulb Philips Hue publishes ">80" —
//    the identical figure it prints on its own $11.99 Essential bulb. LIFX
//    publishes 82. Nanoleaf publishes 80. Signify publishes no CRI at all for
//    the Play light bar, Govee publishes none for either of its products, and
//    SwitchBot publishes none for its strip. The cri spec carries the maker's
//    own wording, ">80" and ">= 90" included, because the inequality is the
//    point.
//
// 6. DIMMING FLOORS SPAN TWO ORDERS OF MAGNITUDE, AND FLICKER IS NEVER
//    PUBLISHED. Hue's Chromasync A19 reaches 0.2% and is marked "Deep dimmable:
//    Yes"; Hue's own Essential stops at 2% and is marked "Deep dimmable: No" —
//    a tenfold difference inside one brand. Tapo, LIFX and SwitchBot publish
//    1%. Wyze publishes an absolute 30 lm floor, about 2.7% of its 1,100 lm.
//    Govee, Nanoleaf, Aqara and the Hue Play bar publish no dimming floor at
//    all. Not one maker in this category publishes a PWM frequency or a
//    percent-flicker figure, which is an accessibility problem for the people
//    who get headaches from it; LIFX at least calls its method "Software
//    dimming" in its own spec row, which is PWM by another name. The single
//    citable flicker fact in the file is The Verge's explicit
//    photosensitive-epilepsy warning about the rapid flashing in Govee's
//    built-in M1 scenes, recorded in that product's cons.
//
// 7. "TUNABLE WHITE" RANGES ARE REAL BUT WILDLY UNEVEN, AND ONE OF THEM IS A
//    DEAD END. Hue's Chromasync A19 spans 1000-20000 K, Aqara 2000-9000 K, LIFX
//    1500-9000 K, Wyze 1800-6500 K, Hue Essential 2200-6500 K, Tapo 2500-6500 K.
//    Govee's M1 light strip spans 2700-4000 K — it physically cannot make a
//    daylight white, a limitation buried in reviewers' spec boxes rather than
//    in Govee's marketing.
//
// 8. AN "RGBIC" STRIP MAY NOT BE ADDRESSABLE, AND THE MAKER MAY SAY SO ITSELF.
//    SwitchBot's own comparison table, printed on the LED Strip Light 3 product
//    page, marks that strip "Equipped with IC Chip: no", "Can only display solid
//    colors" and "Segmented Dynamic Scenes: no" against its dearer RGBICWW
//    sibling. The Amazon listing calls it "RGB LED Strip Lights"; the SwitchBot
//    store calls it "3-in-1 RGBCCT". Govee does the same thing from the other
//    direction: the Floor Lamp 2 page's bullets and comparison table both say
//    "RGBICWW", while the FAQ at the bottom of that same page says the lamp
//    "lacks segmented lighting control, and uses simpler RGB and white LEDs
//    (instead of RGBICWW)". Both contradictions are recorded in the cons.
//
// 9. THE FINISH CHANGES THE LUMENS. Nanoleaf's own brightness table lists
//    Hexagons (White) at 100 lm per panel and Hexagons (Black) at 10 lm — a
//    tenth of the output for a finish most buyers pick on looks. It is in the
//    lumensWhite spec and the cons, because nothing in Nanoleaf's marketing
//    surfaces it.
//
// 10. POWER-CUT BEHAVIOUR IS DOCUMENTED BY THREE MAKERS OUT OF NINE. Aqara
//    publishes a configurable "Power Off Memory" that works in both Zigbee and
//    Thread modes; Wyze publishes a "Power Loss Recovery" support article for
//    its colour bulbs; Hue and LIFX expose a power-on behaviour or power-on
//    scene in their apps. TP-Link, Govee, SwitchBot and Nanoleaf publish
//    nothing, so powerOnBehavior says "Not published by the manufacturer"
//    rather than guessing.
//
// 11. WHAT IS NOT IN THE BOX. The Hue Play 2-pack ships one power supply for
//    two bars with a hard limit of three bars per supply; TV colour matching
//    needs the $384.99 Play HDMI Sync Box 8K. Nanoleaf's Shapes kit includes
//    adhesive mounting plates only — the screw kit is sold separately — and its
//    42 W supply caps a hexagon wall at 21 panels. Every Hue product needs a
//    Bridge for the features its own spec sheet ties to one.
//
// 12. WARRANTY IS NOT WHERE PRICE SUGGESTS. Wyze's own terms carry "the three
//    (3) year express warranty given above for the Wyze Bulb products" on $11
//    bulbs. TP-Link gives Smart Lighting two years. Aqara's published table
//    gives Smart Lighting twelve months. Govee gives the Floor Lamp 2 one year
//    but the M1 strip two. And Signify contradicts itself on one page: the
//    Chromasync A19's specification table says "Warranty: 3 year(s)" while the
//    buy box on the same page shows a "2 Year Warranty" badge.
//
// Where sources genuinely conflict, the conflict is recorded in the spec value
// itself rather than silently resolved — see the Hue Play bar's lumensWhite
// (500 lm on Signify's spec table against the 530 lm on Best Buy's listing and
// in most reviews).
//
// Deliberately not included: the GE Cync Full Color BR30 4-pack (ASIN
// B0DNGG1DQL is solidly cross-checked, but no current US price for that exact
// 4-pack could be confirmed from a reputable source — GE's own store sells only
// single BR30s at $15.99 — so under the "price required" rule it was dropped);
// the Govee Strip Light 2 Pro (a genuinely better strip than the M1 on paper —
// 10 addressable segments per metre, 2700-6500 K, $69.99 for 16.4 ft on Govee's
// store — but no ASIN for any length could be found at all); the Philips Hue
// Flux strip light 16 ft ($99.99, 2,000 lm, new for 2026) for the same reason;
// and Twinkly, Sengled and Amazon Basics, none of which yielded a current,
// first-party-priced US model that also had a cross-checkable ASIN.
// ---------------------------------------------------------------------------

export const smartLightProducts: Product[] = raw as Product[];
