import raw from './smart-displays.json';
import { Product } from '../types';

// ---------------------------------------------------------------------------
// Smart Displays category — researched August 2026.
//
// Product data lives in smart-displays.json, not here, so the admin dashboard
// (/admin/products) can read and rewrite it directly. This file is the typed
// accessor layer plus the sourcing notes that JSON cannot hold.
//
// Sourcing: hardware specs come from Amazon's own published "Technical Details"
// tables and aboutamazon.com launch posts, and from store.google.com product and
// category pages plus support.google.com's Matter/Thread hub list. Those were
// cross-checked against TechRadar, PCMag, Tom's Guide, The Ambient, Reviewed,
// CNET, 9to5Google and Matter Alpha. Pricing was taken from the vendors' own
// storefronts (Google Store) and from retail listings at Best Buy, Home Depot
// and Amazon's own device comparison tables, in August 2026.
//
// ASINs were read from amazon.com /dp/<ASIN> URLs as they appeared in search
// results and on third-party sites (camelcamelcamel, homedepot.com listing
// slugs, which embed the ASIN, and affiliate links in review round-ups), each
// cross-checked against a second independent source. Amazon product pages were
// NOT scraped — that would violate the Associates Operating Agreement. Confirm
// each ASIN in SiteStripe before relying on it for revenue.
//
// WHAT HAS LEFT THIS MARKET (and why the list is 11, not 12)
//
// This category has genuinely consolidated to two vendors. Everything below was
// checked and deliberately excluded rather than padded in:
//
//   * Meta / Facebook Portal — the whole line was discontinued in 2022 and
//     Meta exited consumer smart displays entirely. Not sold new.
//   * Lenovo Smart Clock, Smart Clock 2 and Smart Clock Essential — Lenovo's
//     own store now returns "Lenovo Smart Clock Essential with Alexa Built-in
//     is no longer available", and the Google-Assistant Smart Clock 2 died when
//     Google withdrew the third-party Assistant display programme. Lenovo has
//     left the category.
//   * JBL Link View and the other third-party Google Assistant displays — all
//     long discontinued; no successors exist because Google closed the
//     programme.
//   * Amazon Echo Show 10 (3rd Gen), the motorised one — replaced by the fixed
//     Echo Show 11 in November 2025 and no longer in Amazon's line-up.
//   * Amazon Echo Show 8 (3rd Gen, 2023) — superseded by the 2025 4th Gen.
//     Several 2026 "best of" round-ups still recommend it; it is now clearance
//     and renewed stock, so it is out.
//   * Apple — the long-rumoured HomePod-with-a-screen still had not shipped as
//     of August 2026 (reporting points to "October or early next year"). There
//     is no Apple smart display to compare.
//   * Google Home Display — a real product name found in Google Home app code
//     and alluded to by Google's head of Home, but unreleased. The Nest Hub
//     line therefore has no announced successor, which is a buying risk and is
//     recorded in the Nest Hub cons.
//   * Digital photo frames (Aura, Skylight, Nixplay) — none has a built-in
//     voice assistant, so none is a smart display. Excluded on the brief's own
//     test. The Echo Show 15/21 cover the photo-frame use case.
//   * Fire tablets in Show Mode — a Fire HD 10 in a dock is cross-shopped by
//     some buyers, but it is a tablet that borrows a display mode, not a
//     smart display, and the dock/model combinations could not be priced as a
//     single verifiable variant. The Pixel Tablet IS included because Google
//     markets Hub Mode as the product's headline smart-display feature.
//
// Category-specific traps recorded in the data:
//
// 1. ALEXA+ IS A PAID SUBSCRIPTION ON ECHO HARDWARE. Every 2025/2026 Echo Show
//    is marketed on Alexa+. Amazon's own Alexa+ FAQ states plainly: "there is
//    not a free experience for Alexa+ on Echo" — it needs Prime or a $19.99/mo
//    Standard plan. On a device category where the assistant IS the product,
//    that is the single most important line on the page. It is recorded in the
//    voiceAssistant and assistantSubscription spec of all seven Echo products.
//
// 2. HOME-SCREEN ADS THAT CANNOT BE TURNED OFF. Amazon's own help page
//    ("Manage Ads and Other Suggested Content on Your Echo Devices") says of
//    Sponsored cards: "You can't turn off these ads, but you can skip an ad by
//    swiping." Turning off Home Content and Themes reduces the volume; it does
//    not remove Sponsored placements. Google's Nest Hubs carry no sponsored
//    cards at all — they monetise through Google Home Premium instead. This is
//    the category's trap score dimension, `adFreedom`.
//
// 3. THE 2025 ECHO SHOW 8 AND 11 DELETED THE PHYSICAL CAMERA SHUTTER. Every
//    earlier Echo Show had a sliding lens cover; the redesigned 2025 Show 8 and
//    Show 11 have only a button that electronically disables camera and mics.
//    Confusingly, the OLDER and CHEAPER Show 5, and the larger Show 15 and 21,
//    all still have real shutters. Several 2026 round-ups still assert that
//    "all Echo Show displays feature a physical sliding shutter" — that is now
//    false, and the cameraShutter spec records it per model.
//
// 4. THE HUB RADIOS ARE THE REAL REASON TO BUY THE BIGGER MODEL. Echo Show 8
//    (2025), Show 11 (2025), Show 15, Show 21 and Echo Hub carry a Zigbee hub,
//    a Matter controller and Thread. Echo Show 5, Echo Show 5 Kids and Echo
//    Spot carry Matter over Wi-Fi ONLY — no Zigbee, no Thread border router.
//    On the Google side, Google's own support page names exactly three Thread
//    border routers: Nest Hub (2nd gen), Nest Hub Max and Nest Wifi Pro — so
//    the $99.99 Nest Hub out-hubs the $399 Pixel Tablet.
//
// 5. ASSISTANT LOCK-IN IS THE PURCHASE. An Echo Show will not speak to Apple
//    HomeKit, will not run Google Meet, and its video calling never leaves the
//    Alexa network (Skype died with Skype in May 2025). A Nest Hub will not run
//    Alexa Skills, and its video calling is Google Meet only — Duo was folded
//    into Meet in October 2025 and Zoom was dropped in 2023. Matter narrows the
//    gap for lights, plugs and locks but nothing else. Only the Pixel Tablet,
//    because it runs full Android, escapes this — which is why it scores 8.5 on
//    `ecosystemFreedom` while every Echo Show scores 4.5.
//
// 6. MAINTENANCE MODE, MEASURED RATHER THAN ASSUMED. Both Nest Hubs are still
//    on sale, still receiving firmware (Google previewed Thread 1.4 firmware
//    for Nest displays in August 2026) and have been migrated to Gemini for
//    Home — but Google has also quietly deleted most of the on-device "apps"
//    (Netflix, Podcasts, Meet, Reminders and more are gone), the Nest Hub Max
//    dates from 2019 and several colourways are sold out, and the successor
//    "Google Home Display" has not shipped. That mixed picture is recorded in
//    the cons rather than flattened into "abandoned" or "supported".
//
// 7. ACCESSORIES THAT ARE NOT IN THE BOX. Echo Show 15 and 21 ship with a wall
//    mount but the counter stand is $99.99 and the decorative frames $34.99 /
//    $39.99. Echo Hub supports Power over Ethernet but no PoE splitter is
//    included. The Pixel Tablet is the worst case: the Charging Speaker Dock
//    that makes it a smart display at all used to be in the box and is now a
//    $129 accessory, so the real price of a Pixel Tablet smart display is $528.
//
// 8. NO FIRST-PARTY AMAZON LISTING FOR GOOGLE'S DISPLAYS. Nest Hub (2nd gen)
//    and Nest Hub Max are US-available and priced on the Google Store, but the
//    amazon.com listings that surface for them are renewed units, international
//    models or third-party "value bundles" with 90-day warranties — none of
//    which matches the variant priced here. Rather than attach a wrong ASIN,
//    both carry an empty `amazonAsin`. They remain `usAvailable` (the key is
//    simply omitted) because they are genuinely sold new in the US.
//
// Where sources genuinely conflict, the conflict is recorded in the spec value
// itself rather than silently resolved: Echo Show 8 (2025) and Echo Show 11
// (2025) resolutions are unpublished by Amazon and third parties disagree, and
// one third-party FAQ denies the Echo Show 21's Thread border router in
// contradiction of Amazon's own tech specs.
// ---------------------------------------------------------------------------

export const smartDisplayProducts: Product[] = raw as Product[];
