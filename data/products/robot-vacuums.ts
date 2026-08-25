import raw from './robot-vacuums.json';
import { Product } from '../types';

// ---------------------------------------------------------------------------
// Robot Vacuums category — researched August 2026.
//
// Product data lives in robot-vacuums.json, not here, so the admin dashboard
// (/admin/products) can read and rewrite it directly. This file is the typed
// accessor layer plus the sourcing notes that JSON cannot hold.
//
// Sourcing: suction claims, mop-lift heights, dock temperatures, bag ratings,
// battery capacities, runtimes and accessory prices come from first-party
// manufacturer product, spec, accessory and warranty pages (us.roborock.com
// including the Saros 10R feature page and the accessories store,
// irobot.com product pages plus the iRobot Limited Warranty PDF and the
// P.O.O.P. Promise page, dreametech.com, ecovacs.com/us, us.narwal.com,
// us.switch-bot.com including the S Series Water Station listing, eufy.com,
// sharkclean.com, tp-link.com including the US replacement-and-warranty
// policy and the November 2024 RV30 Max launch release). Independent test
// results and rankings come from Vacuum Wars (Top 20, the Roborock, Dreame
// and iRobot buyer guides, and individual reviews of the Saros 10R, X11
// OmniCyclone, Narwal Flow, eufy Omni S2 and Shark PowerDetect), RTINGS,
// TechGearLab, TechRadar, Tom's Guide, Homes & Gardens, TechHive, MacRumors,
// Consumer Reports and Gizmodo. Corporate and privacy context comes from
// CBS News, CNBC, Tom's Guide, TechHive, Kaspersky, ABC News and MIT
// Technology Review coverage as summarised by Vacuum Wars.
//
// ASINs were read from amazon.com /dp/<ASIN> URLs as they appeared in search
// results and on third-party sites — camelcamelcamel price-history pages,
// Slickdeals threads, manuals.plus and international resellers — each
// cross-checked against a second independent source. Amazon product pages
// were NOT scraped; that would violate the Associates Operating Agreement.
// Confirm each ASIN in SiteStripe before relying on it for revenue.
//
// Category-specific traps recorded in the data. Robot-vacuum marketing is
// built almost entirely on one number that means nothing, and hides the two
// that decide whether you are happy in year two — what the dock costs to feed
// and whether the mop ever actually leaves your rug alone:
//
//  1. THE PASCAL NUMBER IS NOT A MEASUREMENT AND IS NOT COMPARABLE.
//     claimedSuction is a required spec on every product and it is deliberately
//     a sentence, not a number, because the number is not usable. Roborock
//     announced the Saros 10R at 19,000 Pa at CES 2025, sells the identical
//     robot as 22,000 Pa on Amazon and Best Buy today, and a third-party spec
//     database lists it at 18,000 Pa — three figures, no hardware change. eufy
//     claims 30,000 Pa on the Omni S2 and Vacuum Wars still scores its mopping
//     about 20% below average. TP-Link claims 5,300 Pa on the Tapo RV30 Max
//     Plus and it earned PCMag's Editors' Choice. iRobot and Shark publish no
//     Pascal figure at all — iRobot's claim is "70x" or "175x" a 2013 Roomba,
//     a ratio against a discontinued product. TechRadar's professional tester
//     says outright that the figure stopped predicting cleaning around
//     10,000 Pa. So every product also carries independentCleaningResult,
//     which is where the actual bench numbers live, and the carpetCleaning,
//     hardFloorCleaning and mopping scores are weighted off those, not the Pa.
//     Where a brand publishes airflow in CFM (ECOVACS: 38 CFM claimed, 23 CFM
//     measured at the nozzle by Vacuum Wars) that is recorded too, because CFM
//     is the one figure that is broadly comparable.
//
//  2. THE SELF-EMPTY DOCK IS A SUBSCRIPTION IN DISGUISE — UNLESS IT IS
//     BAGLESS. dockBagsAndRunningCost is required on every product and
//     runningCost is the category's trap score dimension. iRobot's own 3-pack
//     of dirt-disposal bags for the AutoEmpty/AutoWash docks (part 4849916) is
//     $19.99 for bags rated at 75 days each, about $6.66 a bag and roughly $32
//     a year; a near-identical-looking older Clean Base 3-pack (4640235) is
//     $11.17 at Home Depot and does not fit. Roborock's 6-pack is $25.59
//     direct and $31.99 at Abt against a roughly 7-week bag life, so about
//     $26-32 a year, before $20.99 mop cloths, a $22.99 main brush and $11.19
//     side brushes. Two docks here cost nothing at all: the Shark PowerDetect
//     uses a bagless HEPA tray and the ECOVACS X11 OmniCyclone uses cyclonic
//     separation into a washable bin — and the X11's honest cost is recorded
//     too, that damp debris cakes to the inside and you scrub it out by hand.
//     Narwal's 120-day and Dreame's 100-day bag ratings mean three or four
//     bags a year rather than six. TechRadar's reviewer also notes that no
//     dock here self-cleans its dirty-water tank; that is a manual rinse on
//     every single omni model in this file.
//
//  3. "MOPPING" COVERS TWO COMPLETELY DIFFERENT MACHINES, AND THE LIFT HEIGHT
//     IS THE TELL. mopSystem and mopLift are both required. At the bottom, the
//     Tapo RV30 Max Plus and the Roomba 105 Combo drag a damp clip-on pad that
//     cannot lift at all — their manufacturers' carpet strategy is that the
//     robot avoids carpet entirely, so you zone your rugs out by hand. In the
//     middle sit spinning pads (Roborock 17 mm, Dreame 10.5 mm) and washed
//     rollers (ECOVACS 10 mm, Narwal 12 mm, SwitchBot unpublished). At the top
//     the eufy Omni S2 lifts 28 mm, which is the only figure here that clears
//     a genuinely plush rug. iRobot refuses to play: the Roomba Max 705's
//     roller does not lift, a cover retracts over it instead, and iRobot
//     publishes no clearance figure at all. Roborock manages to publish two
//     different numbers for the same robot on its own website — "17mm Mop
//     Lift" on the Saros 10R product page and "0.87 inches (22mm) Maximum Mop
//     Lifting" on the Saros 10R feature page — and that conflict is recorded
//     in the spec value rather than resolved.
//
//  4. THE RUNTIME IS ALWAYS THE LOWEST SUCTION SETTING. ratedRuntime is a
//     required spec and every entry states the condition where the maker
//     states it, or says the maker does not. Vacuum Wars independently
//     confirms that the Saros 10R's 180 minutes and the Narwal Flow's 190
//     minutes are both lowest-power figures. Dreame is the honest outlier and
//     prints the condition itself: 220 minutes in quiet mode, vacuuming and
//     mopping. ECOVACS' 369-minute claim for the X11 includes mid-run
//     PowerBoost recharges; Vacuum Wars' own battery figure is 254 minutes.
//     iRobot publishes no runtime for either Roomba in this file, and
//     SwitchBot publishes none for the S20. Runtime is also read against
//     binCapacity, because a 220 ml bin (X11) or a 227 ml bin (Shark) in a
//     hairy house fills long before the battery does.
//
//  5. OBSTACLE AVOIDANCE IS EITHER A CAMERA OR IT IS A BUMPER, AND ONLY ONE
//     BRAND WILL PUT MONEY ON PET WASTE. navigationAndAvoidance and
//     petWastePolicy are both required. The eufy 11S MAX has no sensors beyond
//     a bumper and cliff detectors; the Tapo and both Roombas' cheaper sibling
//     map with LiDAR but cannot identify anything; the Shark uses 3D sensors
//     and lasers that Vacuum Wars measured at roughly half flagship
//     effectiveness. Only the Saros 10R and the eufy Omni S2 scored a perfect
//     24/24 on Vacuum Wars' obstacle course. On pet waste specifically, every
//     Chinese brand here lists it as a recognised object type and none offers
//     any remedy if the robot drives through it. iRobot is the only maker with
//     a written promise — the P.O.O.P. Promise, replace the robot free, one
//     year, solid dog or cat waste only, replacement product only — and as of
//     August 2026 iRobot's US page still writes it against the Roomba j7+, not
//     against the current Max 705 or the LiDAR-only 105. That is recorded as a
//     con on both Roombas rather than glossed as "iRobot has a pet guarantee".
//
//  6. THERE IS A CAMERA IN YOUR HOUSE AND THE BRANDS' RECORDS ARE NOT EQUAL.
//     accountCloudAndCamera is required. Every robot here except the eufy 11S
//     MAX needs a manufacturer account and syncs its map to that maker's
//     cloud. Roborock, Dreame and ECOVACS are reported by independent privacy
//     write-ups to process obstacle-avoidance frames on-device rather than
//     uploading them; Narwal says the same about its own AI chip; SwitchBot
//     publishes nothing on the question. Three specific incidents are recorded
//     against the brands they belong to rather than left as vague unease: the
//     August 2024 DEF CON demonstration of ECOVACS robots being taken over
//     over Bluetooth with camera and microphone access and no indicator light
//     (patched); iRobot's 2022 MIT Technology Review episode, where
//     development-unit images including a woman on a toilet leaked out of a
//     data-annotation contractor; and eufy's security-camera cloud-upload
//     scandal, which matters because eufy markets privacy hardest. The two
//     robots with no camera at all (Roomba 105 Combo, Shark PowerDetect) get
//     credit for it, and the SwitchBot S20 gets credit for Matter, which lets
//     Apple Home, Alexa and Google start and stop it without touching
//     SwitchBot's cloud.
//
//  7. THE SUBSCRIPTION STORY IS THE OPPOSITE OF WHAT THE ROUND-UPS SAY. No
//     robot in this file requires a subscription for core cleaning, mapping or
//     scheduling. A widely-syndicated 2026 subscription comparison lists an
//     iRobot Select plan at $29.99/mo and an ECOVACS premium plan at $2.99/mo;
//     iRobot in fact closed Select to new customers in January 2024 after the
//     Amazon acquisition collapsed, and ECOVACS does not advertise a premium
//     plan on its US product pages. Both claims are recorded in the data as
//     unconfirmed third-party assertions with the contradiction attached,
//     rather than repeated as fact.
//
//  8. iROBOT IS TRADING THROUGH A COMPLETED BANKRUPTCY. This was checked
//     before either Roomba was included. iRobot filed a prepackaged Chapter 11
//     on 14 December 2025 and was sold to Picea, its China-based manufacturing
//     partner and primary secured lender, with the restructuring expected to
//     conclude by February 2026. Shareholders were wiped out. iRobot says
//     apps, warranties and customer service continue and the 2026 line is in
//     production, and irobot.com is currently selling the 105/205 series, the
//     Plus 405/415/505/507/515/575 series and the Max 705/715/775 series with
//     live US prices — so the two models here are real, current and buyable.
//     The residual risk to long-term app and parts support is recorded as a
//     con on both, because maps and scheduling are cloud-dependent.
//
// Two further honest gaps. Samsung and LG were both researched and dropped:
// Samsung's Bespoke Jet Bot Combo AI (VR7MD97714G/AA) is listed by Best Buy at
// $1,699.99 and marked "no longer available in new condition", and neither
// brand has a current, US-priced, independently tested robot that belongs in a
// twelve-product field. And warranty length is genuinely contested in this
// category: the number in warrantyMonths follows the manufacturer's own page
// or warranty document wherever one exists (iRobot 12 months from its own
// Limited Warranty PDF, TP-Link 12 months from its US warranty policy, eufy 12
// months, SwitchBot 12 months, Roborock 12 months from its own product page,
// Dreame 36 months from its own product page), and where a published warranty
// round-up disagrees — it claims 2 years for iRobot and Roborock and 1 year
// for Dreame — the conflict is recorded in the product's cons.
//
// Where sources genuinely conflict, the conflict is recorded in the spec
// value itself rather than silently resolved.
// ---------------------------------------------------------------------------

export const robotVacuumProducts: Product[] = raw as Product[];
