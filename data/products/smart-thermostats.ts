import raw from './smart-thermostats.json';
import { Product } from '../types';

// ---------------------------------------------------------------------------
// Smart Thermostats category — researched August 2026.
//
// Product data lives in smart-thermostats.json, not here, so the admin
// dashboard (/admin/products) can read and rewrite it directly. This file is
// the typed accessor layer plus the sourcing notes that JSON cannot hold.
//
// Sourcing: wiring requirements, stage counts, terminal lists, sensor limits
// and warranty terms come from first-party manufacturer pages and manuals
// (store.google.com's Nest tech-spec and wiring-compatibility pages,
// ecobee.com's per-model spec tabs and CES press releases, honeywellhome.com
// and resideo.com product pages plus Resideo's CES 2025 newsroom release,
// sensi.copeland.com product and support pages plus the ST25/ST76 operation
// manuals, getmysa.com product pages and help.getmysa.com's technical
// specifications and Matter articles, and Google's own support articles on
// Rush Hour Rewards and Nest energy features). Those were cross-checked
// against retail specification tables (Best Buy, Home Depot, honeywellstore
// .com, siglers.com) and independent review outlets (Consumer Reports,
// Reviewed, TechHive, Matter Alpha, Bob Vila, EnergySage, HelpfulHome).
// ASINs were read from amazon.com /dp/<ASIN> URLs as they appeared in search
// results, in review articles' outbound links, and on third-party price-
// history sites (camelcamelcamel), each cross-checked against a second
// independent source. Amazon product pages were NOT scraped — that would
// violate the Associates Operating Agreement. Confirm each ASIN in SiteStripe
// before relying on it for revenue.
//
// Category-specific traps recorded in the data:
//
//  1. THE C WIRE IS THE RETURNS ENGINE, AND EVERY BRAND HANDLES IT
//     DIFFERENTLY. Four distinct states are recorded separately in
//     cWireRequired and cWireWorkaroundIncluded, and they are the whole
//     reason cWireFreedom is this category's trap score dimension.
//     (a) ecobee Premium and Enhanced ship the Power Extender Kit IN THE BOX,
//     so the problem is solved at purchase. (b) ecobee's own Essential does
//     NOT — the identical kit is a $24.99 accessory, which quietly makes the
//     $139.99 Essential a $164.98 thermostat in a four-wire house. (c) Google
//     claims "no C wire required in most homes" on both Nest models, but
//     Google's own store pages state that heating-only, cooling-only,
//     zone-controlled AND heat pump systems all need the $24.99 Nest Power
//     Connector — a very large slice of US housing stock. (d) Amazon, the
//     Honeywell X2S, the Honeywell X8S and the Sensi Touch 2 all require one
//     outright; the X8S at least includes a voucher for a free mail-in
//     adapter, while Copeland charges about $28 and Amazon sells a separate
//     bundle SKU. Copeland's Sensi Lite is the most honest of the lot: the
//     exception is written into the product title itself — "C-Wire Not
//     Required, Except On Heat/Cool Only and Heat Pump Systems".
//
//  2. LINE VOLTAGE AND LOW VOLTAGE ARE NOT INTERCHANGEABLE, AND THE LISTINGS
//     DO NOT SHOUT ABOUT IT. Ten of these twelve are 24VAC devices. The two
//     Mysa baseboard models are 120/240V, 16A line-voltage switches rated
//     3,800W at 240V. A Nest, ecobee, Sensi or Honeywell thermostat cannot
//     control electric baseboard heat and a Mysa baseboard unit cannot
//     control a furnace. Both facts are written into voltageType on every
//     product rather than left implicit, and Home Depot's X8S and Resideo's
//     X2S listings are cited because they are among the few that say
//     "does not work with electric baseboard heat (120-240V)" out loud.
//     The Mysa units carry a second, less obvious limit: they need both line
//     conductors (L1 and L2/neutral) in the gang box, so a two-wire switch
//     loop will not work no matter what the voltage is.
//
//  3. STAGE COUNTS ARE OFTEN UNPUBLISHED OR CONTRADICTORY. ecobee, Copeland
//     and Resideo publish real numbers; Amazon publishes none at all, and the
//     heatCoolStages spec says so verbatim rather than guessing. Resideo is
//     worse than silent: its own X8S page says up to 4 Heat/2 Cool heat pump
//     or 3 Heat/4 Cool conventional, while Home Depot's listing for the same
//     thermostat says 3 Heat/2 Cool or 2 Heat/2 Cool. That conflict is
//     recorded in the spec value, not resolved. The ecobee Essential hides a
//     subtler one: it has a single OB terminal that doubles as W2 or Y2, so
//     "2H/1C or 1H/2C" means one extra stage in total, not one of each.
//
//  4. "REMOTE SENSOR" MEANS THREE DIFFERENT THINGS. Only ecobee's SmartSensor
//     and Resideo's X8S room sensors detect occupancy as well as temperature.
//     Google's Nest Temperature Sensor is temperature-only, and TechHive's
//     Sensi Touch 2 review states plainly that the Sensi Room Sensor reads
//     temperature and humidity with no motion detection. Three products here
//     take no sensor at all: Google says outright that the Nest Thermostat
//     (2020) is not compatible with the Nest Temperature Sensor, the X2S has
//     no sensor option, and the Amazon Smart Thermostat has none either —
//     Best Buy's listing offers "comfort zones" reading temperature off
//     select Echo devices as a substitute, which is not the same thing. Where
//     the maximum count is published it is recorded (ecobee 32, Resideo 20,
//     Nest Learning 6+1); where it is not, Copeland's silence is recorded too.
//
//  5. MATTER CERTIFICATION IS NOT MATTER FUNCTIONALITY. Both Nest models,
//     the X2S and the X8S are Matter certified. Matter Alpha's X8S review
//     found the air-quality data the thermostat measures is not exposed over
//     Matter at all and scheduling still needs the First Alert app; its X2S
//     review found the reviewer could read temperature and mode in
//     SmartThings but could not make setpoint changes stick. Both Resideo
//     models require you to install the First Alert app just to generate the
//     Matter pairing code. Meanwhile ecobee — the brand with the most
//     capable hardware here — lists HomeKit, Alexa, Google, SmartThings and
//     IFTTT on all three spec pages and never mentions Matter; third-party
//     write-ups describe a phased rollout, so matterSupport records it as
//     unconfirmed rather than asserting either way. Mysa's Matter article
//     covers the central-HVAC thermostat only and dates it "expected in early
//     2026", so the baseboard models are recorded as not listed.
//
//  6. UTILITY PROGRAMS PAY YOU TO HAND OVER YOUR SETPOINT. Every product here
//     is ENERGY STAR certified and rebate-eligible, but rebates and demand
//     response are separate things and the second one has a cost. Google's
//     own support page says Rush Hour Rewards, run by Renew Home with your
//     energy provider, makes adjustments "typically up to 4°F" for three to
//     four hours during demand events. ecobee states eco+ Community Energy
//     Savings events move your temperature 1-4°F for a few hours a handful of
//     times a year, across 150+ North American utilities, with a per-event
//     opt-out and enrolment rebates up to $125. Resideo's X2S launch material
//     specifically advertises enabling utility energy-management enrolment.
//     utilityPrograms records the mechanism, not just the rebate.
//
//  7. THE "SMART" FEATURES ARE FREE, THE ACCOUNT IS NOT OPTIONAL. No
//     thermostat here charges a subscription for scheduling, learning,
//     geofencing or remote sensors — that is worth saying plainly, because
//     buyers expect otherwise. But every one requires a vendor account and
//     app: Google retired the standalone Nest app so the Google Home app is
//     mandatory, Amazon's thermostat is close to unconfigurable without the
//     Alexa app because most settings are not on the device screen at all,
//     and both Resideo models need First Alert. ecobee's only paid tier is
//     Smart Security, which is the intrusion-monitoring layer, not climate
//     control. subscriptionRequired records the account requirement, not just
//     the fee.
//
//  8. PRICES MOVED, MOSTLY UPWARD. The ecobee Essential launched at $129.99
//     in March 2025 and lists at $139.99; ecobee's Premium and Enhanced have
//     drifted to $259.99 and $199.99. Against that, the Sensi Touch 2 street
//     price has settled near $189 against a $209.99 list and the Mysa LITE has
//     come down from $109 to $99. Where list and street differ materially the
//     street price is in `price` and the list is in `msrp`.
//
// Where sources genuinely conflict, the conflict is recorded in the spec value
// itself rather than silently resolved — see the X8S stage count and the Mysa
// V2 warranty term (Mysa's own page says 5 years, SupplyHouse's listing for
// MYSA-V2-0 says 2; warrantyMonths follows the manufacturer).
//
// A note on releaseYear: Resideo, Copeland and Mysa do not publish launch
// dates on their product pages. Where a dated source exists it was used
// (Reviewed's X8S review states the thermostat "debuted... in December 2025";
// ecobee's press release dates the Essential to CES January 2025 with March
// 2025 availability; HomeKit News dates the Mysa LITE to September 2023).
// For the Sensi Touch 2, the Sensi Lite and the Mysa baseboard V2, releaseYear
// is the best-supported year of first sale rather than a manufacturer-stated
// launch date, and should be treated as approximate.
//
// Products considered and dropped: the Wyze Thermostat (both SKUs show
// "Sold out" on wyze.com, so no current purchasable price could be
// confirmed); the Honeywell Home T9 (honeywellhome.com marks it discontinued
// and sold out, superseded by the X8S); the Bosch BCC100 (listed as a
// closeout and mostly sold as Renewed stock); ecobee's Smart Thermostat Lite
// (pro-exclusive, no retail price); and SwitchBot's and Aqara's thermostats,
// which are European radiator-valve products with no US 24V HVAC model.
// ---------------------------------------------------------------------------

export const smartThermostatProducts: Product[] = raw as Product[];
