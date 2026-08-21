import raw from './security-cameras.json';
import { Product } from '../types';

// ---------------------------------------------------------------------------
// Security Cameras category — researched August 2026.
//
// Product data lives in security-cameras.json, not here, so the admin dashboard
// (/admin/products) can read and rewrite it directly. This file is the typed
// accessor layer plus the sourcing notes that JSON cannot hold.
//
// Sourcing: resolutions, frame rates, apertures, IP ratings, Wi-Fi bands, power
// requirements and storage limits come from first-party manufacturer product,
// spec and support pages (ring.com and Ring Support, store.google.com and
// Google Home/Nest Help, us.arlo.com and kb.arlo.com, eufy.com, wyze.com and
// support.wyze.com, reolink.com and support.reolink.com, blinkforhome.com
// Support, tp-link.com and us.store.tapo.com, us.aqara.com and aqara.com news,
// lorex.com plus the E895AB series datasheet PDF, store.ui.com and
// techspecs.ui.com), cross-checked against independent outlets (Trusted
// Reviews, PCWorld, The Ambient, How-To Geek, TechRadar, Tom's Guide, 9to5
// Google, HomeCamCafe, Security.org, SafeWise, iFeeltech). ASINs were read from
// amazon.com /dp/<ASIN> URLs as they appeared in search results and on
// third-party sites — camelcamelcamel price-history pages, Best Buy and Home
// Depot listings that carry the ASIN in the product title or URL, and Amcrest's
// own published "Amazon Checkout Url" — each cross-checked against a second
// independent source. Amazon product pages were NOT scraped; that would violate
// the Associates Operating Agreement. Confirm each ASIN in SiteStripe before
// relying on it for revenue.
//
// Category-specific traps recorded in the data. Security-camera marketing hides
// the two facts that decide whether the camera is any use — the frame rate at
// the advertised resolution, and what happens when you stop paying:
//
//  1. THE SUBSCRIPTION IS THE PRODUCT, AND THE FREE TIER IS OFTEN NOTHING.
//     noSubscriptionBehaviour is a required spec on every product because the
//     spread is enormous and never advertised. Ring, Arlo Pro 6 and Arlo Ultra
//     3 all drop to live view plus a push notification with no plan — nothing
//     is recorded, ever, and Arlo's own Ultra 3 FAQ says so in writing. Nest's
//     free tier is 6 hours of "Event Video Previews", which Google's help pages
//     define as 10-second clips, not the event recordings the older 3-hour free
//     tier gave. Blink gives motion alerts but paywalls person and vehicle
//     detection. Wyze is the outlier among the paywalled brands: 12-second
//     cloud clips and 14 days of history are free, but a 5-minute cooldown
//     between clips means a ten-minute burglary produces one clip. eufy,
//     Reolink, Tapo, Aqara, Lorex and Ubiquiti need no plan at all, which is
//     what cheapestPlanMonthly (0 for those six) is there to surface.
//
//  2. "4K" AND "2K" ALMOST NEVER RUN AT 30 FPS. topResolutionFrameRate is this
//     category's headline trap and it is a required spec. Lorex's own E895AB
//     datasheet says 4K at 15 fps and 30 fps only at 5MP. eufy's own S3 Pro spec
//     sheet says up to 15 fps at 4K. Reolink's Argus 4 Pro spec page says 15 fps
//     — and its "4K" is a stitched 5120x1440 dual-lens panorama with a 50-degree
//     vertical field, not a 3840x2160 frame. Wyze publishes 20 fps by day and
//     15 fps at night. Blink publishes 24 fps at 2K. Only the UniFi G6 Instant
//     does 4K at 30 fps. Ring, Google, Arlo, TP-Link and Aqara publish no frame
//     rate at all, and the spec value says exactly that rather than guessing.
//     Arlo Ultra 3 adds a second layer: 4K recording and streaming require the
//     higher Arlo Secure Plus tier, and Trusted Reviews measured the 4K stream
//     running at the same bitrate as the 2K Pro 6, so the extra pixels are paid
//     for in compression.
//
//  3. COLOUR NIGHT VISION MEANS TWO COMPLETELY DIFFERENT THINGS. Sensor-based
//     colour (eufy MaxColor Vision, Reolink ColorX, Aqara G5 Pro) uses a large
//     sensor and an f/1.0 lens and costs nothing in battery. Spotlight-based
//     colour (Arlo Pro 6, Arlo Ultra 3, Wyze, Lorex, Tapo) needs a lamp burning,
//     which on a battery camera is the single biggest drain there is. Blink's
//     "colour vision in low light" is neither: it is dusk colour that reverts to
//     850nm infrared in real darkness. The UniFi G6 Instant has no colour night
//     mode and rates its IR to just 6 m. The nightVision spec names the
//     mechanism on every product rather than ticking a box.
//
//  4. BATTERY CLAIMS ARE MEASURED AT SETTINGS YOU WOULD NOT USE. Blink's
//     two-year figure is, in Blink's own FAQ, "based on battery efficiency
//     settings with 1080p resolution" — not the 2K the camera is named after.
//     Arlo claims 8 months (Pro 6) and 6 months (Ultra 3) and publishes no
//     events-per-day assumption for either; Trusted Reviews' tester put the
//     Ultra 3 nearer four months. Ring publishes no figure at all for the
//     Outdoor Cam Plus, only that batteries "are designed to go months between
//     charges". Reolink publishes no runtime in days either, just "30% more
//     battery life" than an unnamed IR camera. eufy is the honest exception and
//     shows its working: 450-900 mAh harvested per day against 100-200 mAh used.
//
//  5. LOCAL STORAGE USUALLY MEANS BUYING SOMETHING ELSE. Blink's bundled Sync
//     Module Core has no USB port and no card slot, so the "local storage"
//     Blink advertises needs a Sync Module 2 plus a USB drive or a Sync Module
//     XR plus a microSD — all sold separately, 256 GB ceiling. Arlo needs a
//     SmartHub; the Ultra 3 kit includes one but the microSD never is, and a
//     single or add-on Ultra 3 includes neither. Reolink battery cameras need
//     the extra-cost Home Hub before any third-party software can see them.
//     Ring's local option, Ring Edge, requires a Ring Alarm Pro base station
//     AND the top $19.99/mo plan. Nest has no local storage of any kind. Every
//     microSD camera here ships without the card.
//
//  6. WIRED DOES NOT MEAN THE POWER IS IN THE BOX. Wyze's Cam v4 includes an
//     indoor-rated 5V/1A adapter; mounting it outdoors needs Wyze's $19.98
//     Outdoor Power Adapter. Aqara's G5 Pro PoE ships a power cable and an RJ45
//     waterproof kit but no PoE injector or switch. Lorex ships an Ethernet
//     extension cable and no injector, switch or 12V adapter. Ring sells the PoE
//     adapter for its Outdoor Cam Plus separately at $29.99 and its solar panels
//     at $39.99-$59.99. The UniFi G6 Instant does include a USB-C adapter but
//     needs a $199-and-up UniFi Protect console before it records anything at
//     all, which makes its real entry price about $378.
//
//  7. 2.4 GHz-ONLY IS STILL COMMON AT EVERY PRICE. The $429.99 eufyCam S3 Pro
//     kit is 2.4 GHz only, and so are the Tapo C120, the Wyze Cam v4 and the
//     Blink Outdoor 2K+ (Ring's own $59.99 Indoor Cam Plus, not in this set, is
//     single-band Wi-Fi 4, so the problem is not confined to cheap brands). The
//     $99.99 Ring Outdoor Cam Plus does dual-band Wi-Fi 6, and so does the
//     $179.99 Reolink. The UniFi G6 Instant, launched in 2025, is Wi-Fi 5.
//     Google does not publish the bands for the 3rd-gen Nest Cam at all, and
//     the wifiBands spec says so.
//
//  8. RTSP / ONVIF DECIDES WHETHER THE CAMERA OUTLIVES ITS APP. Only three of
//     these twelve will stream to Blue Iris, Frigate, Synology or a generic
//     NVR: the Tapo C120 (RTSP and ONVIF Profile S — no two-way audio, a camera
//     account must be enabled, and TP-Link permits only two of {Tapo Care, SD
//     recording, NVR/ONVIF} at once), the Aqara G5 Pro (RTSP and SMB NAS from
//     launch, ONVIF added in firmware 4.3.4), and arguably the Lorex, for which
//     ONVIF and RTSP are simply not published. Reolink's own support article
//     states its battery cameras do "not support RTSP, RTMP, ONVIF" standalone.
//     Ring, Nest, Arlo, eufy and Blink support none of it. Ubiquiti's camera is
//     adopted only by a UniFi Protect console — though UniFi Protect will now
//     adopt ONVIF third-party cameras such as the Aqara, which is the one
//     interoperability story in this category that got better in 2025-26.
//
//  9. NAMES AND PLANS MOVED UNDER BUYERS' FEET IN 2026. Ring renamed every
//     subscription on 14 January 2026 (Home Basic became Ring Solo at $4.99,
//     Home Standard became Ring Multi at $9.99, Ring Pro is $19.99). Nest Aware
//     became Google Home Premium in 2025 at $10 and $20 a month. Wyze raised
//     annual Cam Plus from $19.99 to $29.99 per camera in March 2026. Any
//     comparison written before those dates prices the wrong thing.
//
// Where sources genuinely conflict, the conflict is recorded in the spec value
// itself rather than silently resolved: the Reolink microSD ceiling (512 GB on
// Reolink's page vs 128 GB in The Ambient's review) and the UniFi G6 Instant
// microSD slot (listed in Ubiquiti's tech specs, denied in iFeeltech's hands-on
// review) are both written out in full.
//
// warrantyMonths reflects the US limited warranty the manufacturer publishes:
// Reolink 24, everyone else 12. Aqara's own warranty page lists 12 months for
// smart cameras and TP-Link's US warranty table lists 1 year for security
// cameras — both are shorter than buyers usually assume, so they are recorded
// rather than rounded up.
//
// Prices are current US street or manufacturer-store prices as of August 2026,
// each taken from the manufacturer's own store or a camelcamelcamel current
// reading. Where the kit configuration matters, the model string names it: the
// Arlo Ultra 3 price and ASIN are the 2-camera kit with SmartHub, and the
// eufyCam S3 Pro price and ASIN are the 2-camera kit with HomeBase 3. The Ultra
// 3 kit is sold in white and black under separate ASINs; B0FLLCF2Q6 is the one
// recorded here.
// ---------------------------------------------------------------------------

export const securityCameraProducts: Product[] = raw as Product[];
