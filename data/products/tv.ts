import { Product } from '../types';

// ---------------------------------------------------------------------------
// TV & Home Entertainment category — 2026 flagship/mid/entry OLED TVs.
//
// Every spec below is sourced from manufacturer spec sheets, official press
// releases, and reputable review outlets (RTINGS, FlatpanelsHD, What Hi-Fi,
// TechRadar, Tom's Guide, etc.) gathered via research in July 2026 — see
// commit history / conversation log for the specific queries. Where a spec
// could not be independently confirmed, the field holds an honest string
// note (e.g. "Not independently confirmed") rather than an invented number.
//
// Data-integrity notes on scope (all surfaced to and confirmed by the site
// owner before this file was written):
// - "LG M6" was requested but does not exist in LG's confirmed 2026 OLED
//   lineup (W6/G6/C6/B6 only) — dropped, not included.
// - "LG C6 Special Edition" / "B6 Special Edition" are not documented as
//   spec-distinct products (evidence points to retail-channel/region SKU
//   variants of the base C6/B6) — dropped as likely duplicates.
// - Philips OLED951/OLED911/OLED811 and Panasonic Z90B are confirmed NOT
//   sold on US Amazon (Philips' US-market TVs come from a different
//   licensee entirely; Panasonic's 2026 US lineup only includes the Z95B
//   and Z80B). Per the site owner's direction, these 4 products are still
//   included for comparison/informational value with `usAvailable: false`,
//   no Amazon ASIN, and pricing converted from their home-market (GBP)
//   price where no official price exists yet — clearly noted in each
//   product's `cons`. AmazonButton renders a non-link state for these.
// - A few products (LG G6, LG W6, Samsung S95H) are real, current 2026 US
//   retail products (confirmed at Best Buy/Target/manufacturer sites) but
//   do not yet have a confirmed live Amazon.com listing as of this
//   research — `amazonAsin` is left as '' rather than guessed, and
//   AmazonButton shows a "Check Price at Retailers" state for these
//   instead of fabricating a link.
// ---------------------------------------------------------------------------

export const tvProducts: Product[] = [
  // ------------------------------------------------------------------ LG --
  {
    id: 'tv-lg-g6',
    categorySlug: 'tv',
    brand: 'LG',
    series: 'OLED evo G6',
    model: 'LG G6',
    slug: 'lg-g6',
    releaseYear: 2026,
    price: 2799.99,
    msrp: 3399.99,
    currency: 'USD',
    colorOptions: ['Black'],
    material: 'OLED panel, aluminum gallery-design frame',
    warrantyMonths: 12,
    connectivity: ['Wi-Fi 6', 'Bluetooth 5.3', 'HDMI 2.1 x4', 'eARC', 'Ethernet'],
    features: [
      'Hyper Radiant Color Technology on a 4th-Gen Primary RGB Tandem 2.0 panel',
      'Alpha 11 Gen3 AI Processor with 12-bit signal processing',
      'Flush Fit Gallery wall mount included in the box',
      '5-year panel warranty with OLED Care+',
      'Dolby Vision, Dolby Atmos, and FILMMAKER MODE'
    ],
    specs: {
      screenSize: 65,
      panelType: '4th-Gen Primary RGB Tandem 2.0 OLED (Hyper Radiant Color)',
      resolution: '3840x2160 (4K UHD)',
      peakBrightness: 3100,
      refreshRate: 165,
      processor: 'Alpha 11 Gen3 AI Processor',
      hdmi21Ports: 4,
      hdrFormats: 'Dolby Vision, HDR10, HLG',
      smartPlatform: 'webOS 26',
      variableRefreshRate: true,
      audioSystem: 'Not officially specified by LG',
      dolbyAtmos: true
    },
    scores: {
      picture: 9.6,
      brightness: 9.5,
      gaming: 9.5,
      smartPlatform: 9.0,
      sound: 7.0,
      design: 9.3,
      connectivity: 9.5,
      value: 6.8
    },
    pros: [
      "Brightest LG OLED panel to date thanks to the Primary RGB Tandem 2.0 panel",
      '165Hz refresh rate with NVIDIA G-Sync and AMD FreeSync Premium for high-end gaming',
      'Flush wall mount included in the box at no extra cost',
      '5-year panel warranty with OLED Care+'
    ],
    cons: [
      'Premium pricing versus the C6 for a smaller real-world brightness gap on some content',
      'Not yet confirmed as sold directly on Amazon.com at launch — check LG.com or Best Buy',
      'webOS still carries ads on the home screen'
    ],
    images: [],
    amazonAsin: '',
    rating: 0,
    ratingCount: 0,
    competitorSlugs: ['samsung-s95h', 'sony-bravia-8-ii', 'panasonic-z95b', 'philips-oled951', 'lg-w6', 'lg-c6'],
    useCases: ['home-theater', 'gaming', 'flagship'],
    shortTagline: "LG's brightest and fastest flagship OLED for 2026, built around the new Primary RGB Tandem 2.0 panel."
  },
  {
    id: 'tv-lg-w6',
    categorySlug: 'tv',
    brand: 'LG',
    series: 'OLED evo W6',
    model: 'LG W6',
    slug: 'lg-w6',
    releaseYear: 2026,
    price: 5499.99,
    currency: 'USD',
    colorOptions: ['Black'],
    material: '9mm wallpaper-design OLED panel, wireless Zero Connect Box',
    warrantyMonths: 12,
    connectivity: ['Wi-Fi 6', 'Bluetooth 5.3', 'HDMI 2.1 x4 (via Zero Connect Box)', 'eARC'],
    features: [
      'True wireless video/audio transfer via Zero Connect Box (up to 32 feet)',
      '9mm-thin wallpaper design that mounts flush to the wall',
      'Industry-first Reflection Free Premium certification',
      'Same Hyper Radiant Color panel tech as the flagship G6',
      'Alpha 11 Gen3 AI Processor'
    ],
    specs: {
      screenSize: 77,
      panelType: '4th-Gen Primary RGB Tandem 2.0 OLED, True Wireless Wallpaper Design',
      resolution: '3840x2160 (4K UHD)',
      peakBrightness: 'Not independently rated in nits; LG cites up to 3.9x brighter than conventional OLED via Brightness Booster Ultra',
      refreshRate: 165,
      processor: 'Alpha 11 Gen3 AI Processor',
      hdmi21Ports: 4,
      hdrFormats: 'Dolby Vision, HDR10, HLG',
      smartPlatform: 'webOS 26',
      variableRefreshRate: true,
      audioSystem: 'Not officially specified by LG',
      dolbyAtmos: true
    },
    scores: {
      picture: 9.5,
      brightness: 9.3,
      gaming: 9.4,
      smartPlatform: 9.0,
      sound: 7.0,
      design: 10.0,
      connectivity: 9.0,
      value: 5.5
    },
    pros: [
      '9mm wallpaper-thin design that mounts flush with zero visible cables',
      'Zero Connect Box transmits 4K/165Hz video and audio wirelessly up to 32 feet away',
      'Industry-first Reflection Free Premium certification',
      'Same Hyper Radiant panel technology as the flagship G6'
    ],
    cons: [
      "Most expensive TV in LG's 2026 lineup",
      'Only available in 77" and 83"',
      'Wireless box adds setup complexity versus a standard TV',
      'Not yet confirmed as sold directly on Amazon.com at launch'
    ],
    images: [],
    amazonAsin: '',
    rating: 0,
    ratingCount: 0,
    competitorSlugs: ['lg-g6', 'samsung-s95h', 'sony-bravia-8-ii', 'philips-oled951'],
    useCases: ['home-theater', 'flagship', 'wall-mounted'],
    shortTagline: "LG's true wireless Wallpaper OLED — flagship picture quality with zero visible cables."
  },
  {
    id: 'tv-lg-c6',
    categorySlug: 'tv',
    brand: 'LG',
    series: 'OLED evo C6',
    model: 'LG C6',
    slug: 'lg-c6',
    releaseYear: 2026,
    price: 2699.99,
    currency: 'USD',
    colorOptions: ['Black'],
    material: 'OLED panel, standard pedestal stand',
    warrantyMonths: 12,
    connectivity: ['Wi-Fi 6', 'Bluetooth 5.3', 'HDMI 2.1 x4', 'eARC', 'Ethernet'],
    features: [
      'Alpha 11 Gen3 AI Processor with Dual AI Engine',
      '165Hz refresh with NVIDIA G-Sync and AMD FreeSync Premium',
      '0.1ms response time',
      'webOS 26 with Dolby Vision IQ and Dolby Atmos',
      'Brightness Booster Standard'
    ],
    specs: {
      screenSize: 65,
      panelType: 'OLED evo W-OLED (standard panel at 65" and below; 77"/83" use a Tandem panel)',
      resolution: '3840x2160 (4K UHD)',
      peakBrightness:
        'Brightness Booster Standard (not independently rated for 65"; larger 77"/83" Tandem-panel variants are rated up to 3,200 nits)',
      refreshRate: 165,
      processor: 'Alpha 11 Gen3 AI Processor',
      hdmi21Ports: 4,
      hdrFormats: 'Dolby Vision IQ, HDR10, HLG',
      smartPlatform: 'webOS 26',
      variableRefreshRate: true,
      audioSystem: 'Not officially specified by LG',
      dolbyAtmos: true
    },
    scores: {
      picture: 8.9,
      brightness: 8.3,
      gaming: 9.2,
      smartPlatform: 9.0,
      sound: 7.2,
      design: 8.7,
      connectivity: 9.5,
      value: 8.0
    },
    pros: [
      '165Hz refresh rate at a $700 discount to the G6',
      'Same Alpha 11 Gen3 processor as the flagship',
      'Four full-bandwidth HDMI 2.1 ports',
      'Noticeably improved built-in audio over the outgoing C5'
    ],
    cons: [
      'Uses the standard W-OLED panel at 65" and below, not the brighter Tandem panel',
      'No flush wall mount included',
      'Peak brightness not independently confirmed at review time'
    ],
    images: [],
    amazonAsin: 'B0GRK5D3RW',
    rating: 0,
    ratingCount: 0,
    competitorSlugs: ['samsung-s90h', 'panasonic-z90b', 'philips-oled911', 'lg-g6', 'lg-b6'],
    useCases: ['gaming', 'home-theater'],
    shortTagline: "LG's mid-range 2026 OLED — flagship gaming specs on a standard OLED panel."
  },
  {
    id: 'tv-lg-b6',
    categorySlug: 'tv',
    brand: 'LG',
    series: 'OLED B6',
    model: 'LG B6',
    slug: 'lg-b6',
    releaseYear: 2026,
    price: 1999.0,
    currency: 'USD',
    colorOptions: ['Black'],
    material: 'OLED panel, faux-marble finish stand',
    warrantyMonths: 12,
    connectivity: ['Wi-Fi', 'Bluetooth', 'HDMI 2.1 x4', 'eARC', 'Ethernet'],
    features: [
      'Alpha 8 AI Processor 4K Gen3',
      '8.3 million self-lit pixels with Perfect Black',
      '1.8-inch thin profile',
      'webOS 26 smart platform',
      'Full ALLM/VRR/QMS/QFT gaming suite on every HDMI port'
    ],
    specs: {
      screenSize: 65,
      panelType: 'OLED (entry tier, no Brightness Booster)',
      resolution: '3840x2160 (4K UHD)',
      peakBrightness: 835,
      refreshRate: 120,
      processor: 'Alpha 8 AI Processor 4K Gen3',
      hdmi21Ports: 4,
      hdrFormats: 'Dolby Vision, HDR10, HLG',
      smartPlatform: 'webOS 26',
      variableRefreshRate: true,
      audioSystem: '2.0-channel, 20W',
      dolbyAtmos: true
    },
    scores: {
      picture: 8.0,
      brightness: 6.8,
      gaming: 8.5,
      smartPlatform: 9.0,
      sound: 6.5,
      design: 7.8,
      connectivity: 9.0,
      value: 8.8
    },
    pros: [
      "Entry point into LG's 2026 OLED lineup under $2,000",
      'Still gets 4 HDMI 2.1 ports with 120Hz/VRR/ALLM on every port',
      'Same webOS 26 smart platform as the flagship G6',
      'AI-driven Alpha 8 Gen3 processor'
    ],
    cons: [
      'No Brightness Booster tech — measurably dimmer than the C6/G6 (835 vs 3,100+ nits)',
      '120Hz native panel vs 165Hz on the C6/G6/W6',
      'Base 2.0-channel 20W speakers'
    ],
    images: [],
    amazonAsin: 'B0GRKHPSZK',
    rating: 0,
    ratingCount: 0,
    competitorSlugs: ['samsung-s85h', 'philips-oled811', 'lg-c6'],
    useCases: ['gaming', 'home-theater'],
    shortTagline: "LG's most affordable 2026 OLED, trading peak brightness for a lower price."
  },

  // ------------------------------------------------------------- Samsung --
  {
    id: 'tv-samsung-s95h',
    categorySlug: 'tv',
    brand: 'Samsung',
    series: 'OLED S95H',
    model: 'Samsung S95H',
    slug: 'samsung-s95h',
    releaseYear: 2026,
    price: 3299.99,
    msrp: 3399.99,
    currency: 'USD',
    colorOptions: ['Black'],
    material: 'QD-OLED panel, metal bezel',
    warrantyMonths: 12,
    connectivity: ['Wi-Fi 6E', 'Bluetooth 5.3', 'HDMI 2.1 x4 (expandable to 8)', 'eARC', 'Ethernet'],
    features: [
      'Glare-free matte QD-OLED panel',
      'NQ4 AI Gen3 Processor',
      'Optional Wireless One Connect Box adds 4 more HDMI 2.1 ports (8 total)',
      'OLED HDR Pro and Motion Xcelerator 165Hz',
      'Samsung Vision AI'
    ],
    specs: {
      screenSize: 65,
      panelType: 'QD-OLED (Samsung Display, glare-free matte)',
      resolution: '3840x2160 (4K UHD)',
      peakBrightness: 2704,
      refreshRate: 165,
      processor: 'NQ4 AI Gen3 Processor',
      hdmi21Ports: 4,
      hdrFormats: 'HDR10+, HDR10, HLG, OLED HDR Pro',
      smartPlatform: 'Tizen (Samsung Vision AI)',
      variableRefreshRate: true,
      audioSystem: 'Not officially specified',
      dolbyAtmos: true
    },
    scores: {
      picture: 9.6,
      brightness: 9.4,
      gaming: 9.4,
      smartPlatform: 8.7,
      sound: 7.3,
      design: 9.2,
      connectivity: 9.6,
      value: 6.7
    },
    pros: [
      "Samsung's flagship QD-OLED panel with a new matte glare-free coating",
      'Expandable to 8 HDMI 2.1 ports via the optional Wireless One Connect Box',
      '165Hz native refresh with G-Sync/FreeSync Premium Pro',
      'NQ4 AI Gen3 processor with strong upscaling'
    ],
    cons: [
      'No Dolby Vision support (Samsung TVs remain HDR10+ only)',
      'Premium pricing near the top of the category',
      'Not yet confirmed as sold directly on Amazon.com at launch — check Samsung.com, Best Buy, or Target'
    ],
    images: [],
    amazonAsin: '',
    rating: 0,
    ratingCount: 0,
    competitorSlugs: ['lg-g6', 'sony-bravia-8-ii', 'panasonic-z95b', 'philips-oled951', 'samsung-s90h'],
    useCases: ['home-theater', 'gaming', 'flagship'],
    shortTagline: "Samsung's brightest QD-OLED flagship for 2026, now with a glare-free matte panel."
  },
  {
    id: 'tv-samsung-s90h',
    categorySlug: 'tv',
    brand: 'Samsung',
    series: 'OLED S90H',
    model: 'Samsung S90H',
    slug: 'samsung-s90h',
    releaseYear: 2026,
    price: 2699.99,
    currency: 'USD',
    colorOptions: ['Black'],
    material: 'OLED panel, metal bezel',
    warrantyMonths: 12,
    connectivity: ['Wi-Fi 6', 'Bluetooth 5.3', 'HDMI 2.1 x4', 'eARC', 'Ethernet'],
    features: [
      'Glare-free coating added to the S90 line for the first time in 2026',
      'NQ4 AI Gen3 Processor with 4K AI Upscaling Pro',
      '2.1-channel 40W speaker system with Dolby Atmos and Q-Symphony',
      'ALLM, AMD FreeSync Premium Pro, and NVIDIA G-Sync'
    ],
    specs: {
      screenSize: 65,
      panelType: 'OLED panel with 165Hz refresh (panel vendor not independently confirmed for the 2026 model year)',
      resolution: '3840x2160 (4K UHD)',
      peakBrightness:
        "Not independently confirmed; Samsung positions this below the S95H's peak brightness on the same 165Hz panel generation",
      refreshRate: 165,
      processor: 'NQ4 AI Gen3 Processor',
      hdmi21Ports: 4,
      hdrFormats: 'HDR10+, HDR10, HLG',
      smartPlatform: 'Tizen (Samsung Vision AI)',
      variableRefreshRate: true,
      audioSystem: '2.1-channel, 40W (Dolby Atmos, Q-Symphony)',
      dolbyAtmos: true
    },
    scores: {
      picture: 8.8,
      brightness: 8.0,
      gaming: 9.2,
      smartPlatform: 8.7,
      sound: 7.5,
      design: 8.8,
      connectivity: 9.3,
      value: 7.8
    },
    pros: [
      'Same 165Hz panel generation and NQ4 AI Gen3 processor as the flagship S95H, at a lower price',
      'Glare-free coating added to the S90 line for the first time in 2026',
      '2.1-channel 40W speaker system with Dolby Atmos and Q-Symphony',
      'Full ALLM/FreeSync Premium Pro/G-Sync gaming suite'
    ],
    cons: [
      'Meaningfully lower peak brightness than the S95H',
      'No Dolby Vision support',
      'Panel sourcing not independently confirmed for the 2026 model year'
    ],
    images: [],
    amazonAsin: 'B0H4S2Q9NP',
    rating: 0,
    ratingCount: 0,
    competitorSlugs: ['lg-c6', 'panasonic-z90b', 'philips-oled911', 'samsung-s95h', 'samsung-s85h'],
    useCases: ['gaming', 'home-theater'],
    shortTagline: "Samsung's mid-range 2026 OLED — flagship gaming specs and glare-free coating, lower brightness ceiling."
  },
  {
    id: 'tv-samsung-s85h',
    categorySlug: 'tv',
    brand: 'Samsung',
    series: 'OLED S85H',
    model: 'Samsung S85H',
    slug: 'samsung-s85h',
    releaseYear: 2026,
    price: 1999.99,
    currency: 'USD',
    colorOptions: ['Black'],
    material: 'OLED panel, plastic/metal bezel',
    warrantyMonths: 12,
    connectivity: ['Wi-Fi', 'Bluetooth', 'HDMI 2.1 x4', 'USB-A x2', 'Ethernet', 'Optical audio out'],
    features: [
      'NQ4 AI Gen2 Processor with 4K AI Upscaling',
      'Premium Gaming Pack: Motion Xcelerator 120Hz, FreeSync Premium, G-Sync compatible',
      '7 years of guaranteed Tizen OS upgrades',
      'Alexa built-in'
    ],
    specs: {
      screenSize: 65,
      panelType: "OLED panel (Samsung's entry OLED tier)",
      resolution: '3840x2160 (4K UHD)',
      peakBrightness: 'Not independently confirmed (entry tier, below S90H/S95H)',
      refreshRate: 120,
      processor: 'NQ4 AI Gen2 Processor',
      hdmi21Ports: 4,
      hdrFormats: 'HDR10+, HDR10, HLG',
      smartPlatform: 'Tizen (Samsung Vision AI, 7 years of OS upgrades)',
      variableRefreshRate: true,
      audioSystem: '2.0-channel, 20W (Dolby Atmos, Q-Symphony, OTS Lite)',
      dolbyAtmos: true
    },
    scores: {
      picture: 8.1,
      brightness: 6.9,
      gaming: 8.4,
      smartPlatform: 8.8,
      sound: 6.8,
      design: 8.0,
      connectivity: 9.0,
      value: 8.5
    },
    pros: [
      "Entry point into Samsung's 2026 OLED lineup under $2,000",
      'Four HDMI 2.1 ports with Motion Xcelerator 120Hz, FreeSync Premium, and G-Sync compatibility',
      '7 years of guaranteed OS upgrades on Tizen',
      'Available across 5 sizes from 48" to 83"'
    ],
    cons: [
      'Older NQ4 AI Gen2 processor (one generation behind S90H/S95H)',
      '120Hz refresh rate versus 165Hz on the higher tiers',
      'Base 2.0-channel 20W speakers'
    ],
    images: [],
    amazonAsin: 'B0GQ6YWP33',
    rating: 0,
    ratingCount: 0,
    competitorSlugs: ['lg-b6', 'philips-oled811', 'samsung-s90h'],
    useCases: ['gaming', 'home-theater'],
    shortTagline: "Samsung's most affordable 2026 OLED, with the same Tizen smart platform as the flagship."
  },

  // ---------------------------------------------------------------- Sony --
  {
    id: 'tv-sony-bravia-8-ii',
    categorySlug: 'tv',
    brand: 'Sony',
    series: 'BRAVIA 8 II',
    model: 'Sony BRAVIA 8 II',
    slug: 'sony-bravia-8-ii',
    releaseYear: 2026,
    price: 3299.0,
    currency: 'USD',
    colorOptions: ['Black'],
    material: 'QD-OLED panel, custom heatsink chassis',
    warrantyMonths: 12,
    connectivity: ['Wi-Fi 6', 'Bluetooth 5.3', 'HDMI 2.1 x2 + HDMI 2.0 x2', 'eARC', 'Ethernet'],
    features: [
      "Sony's 3rd-generation QD-OLED panel",
      'Acoustic Surface Audio+ (screen-driven sound)',
      'AI Scene Recognition for real-time picture optimization',
      'Cognitive Processor XR',
      'Google TV smart platform'
    ],
    specs: {
      screenSize: 65,
      panelType: '3rd-Gen QD-OLED (Sony custom heatsink + XR processing)',
      resolution: '3840x2160 (4K UHD)',
      peakBrightness: 1584,
      refreshRate: 120,
      processor: 'Cognitive Processor XR',
      hdmi21Ports: 2,
      hdrFormats: 'Dolby Vision, HDR10, HLG',
      smartPlatform: 'Google TV',
      variableRefreshRate: true,
      audioSystem: 'Acoustic Surface Audio+, 2.2ch, 50W (2 actuators + 2 subwoofers)',
      dolbyAtmos: true
    },
    scores: {
      picture: 9.5,
      brightness: 8.3,
      gaming: 8.3,
      smartPlatform: 8.5,
      sound: 8.8,
      design: 9.0,
      connectivity: 7.0,
      value: 6.5
    },
    pros: [
      "25% brighter than the outgoing A95L thanks to Sony's 3rd-gen QD-OLED panel",
      'Acoustic Surface Audio+ turns the whole panel into a 50W 2.2-channel speaker',
      'AI Scene Recognition for real-time picture optimization',
      'Google TV smart platform with deep Chromecast/Assistant integration'
    ],
    cons: [
      'Maxes out at 4K/120Hz — no 165Hz mode like the LG/Samsung flagships',
      'Only 2 of 4 HDMI ports are full-bandwidth HDMI 2.1',
      'Available in just 55" and 65" sizes'
    ],
    images: [],
    amazonAsin: 'B0DYK7Y2YB',
    rating: 0,
    ratingCount: 0,
    competitorSlugs: ['lg-g6', 'samsung-s95h', 'panasonic-z95b', 'philips-oled951', 'sony-a95l'],
    useCases: ['home-theater', 'flagship'],
    shortTagline: "Sony's brightest OLED yet, built around Acoustic Surface Audio+ and a new 3rd-gen QD-OLED panel."
  },
  {
    id: 'tv-sony-a95l',
    categorySlug: 'tv',
    brand: 'Sony',
    series: 'BRAVIA XR A95L',
    model: 'Sony A95L',
    slug: 'sony-a95l',
    releaseYear: 2023,
    price: 3499.99,
    currency: 'USD',
    colorOptions: ['Black'],
    material: 'QD-OLED panel',
    warrantyMonths: 12,
    connectivity: ['Wi-Fi', 'Bluetooth', 'HDMI 2.1 x2 + HDMI 2.0 x2', 'eARC', 'Ethernet'],
    features: [
      "Sony's original QD-OLED panel with XR Triluminos Max",
      'Acoustic Surface Audio+ (screen-driven sound)',
      'PS5-specific gaming features (Auto HDR Tone Mapping)',
      'Cognitive Processor XR',
      'Google TV smart platform'
    ],
    specs: {
      screenSize: 65,
      panelType: 'QD-OLED (Sony XR Triluminos Max)',
      resolution: '3840x2160 (4K UHD)',
      peakBrightness: 1507,
      refreshRate: 120,
      processor: 'Cognitive Processor XR',
      hdmi21Ports: 2,
      hdrFormats: 'Dolby Vision, HDR10, HLG',
      smartPlatform: 'Google TV',
      variableRefreshRate: true,
      audioSystem: 'Acoustic Surface Audio+, 2.2ch, 60W',
      dolbyAtmos: true
    },
    scores: {
      picture: 9.3,
      brightness: 7.9,
      gaming: 8.2,
      smartPlatform: 8.5,
      sound: 8.6,
      design: 8.8,
      connectivity: 7.0,
      value: 6.3
    },
    pros: [
      "Sony's benchmark-setting original QD-OLED panel",
      'Acoustic Surface Audio+ delivers 60W of screen-driven sound',
      'PS5-specific gaming features including Auto HDR Tone Mapping and 120fps VRR',
      'Google TV with broad app and Chromecast support'
    ],
    cons: [
      'Succeeded by the brighter BRAVIA 8 II — lower peak brightness',
      'Only 2 of 4 HDMI ports are full-bandwidth HDMI 2.1',
      '120Hz cap, no 165Hz mode'
    ],
    images: [],
    amazonAsin: 'B0BYPYRH4F',
    rating: 0,
    ratingCount: 0,
    competitorSlugs: ['sony-bravia-8-ii', 'lg-g6', 'samsung-s95h', 'panasonic-z95b'],
    useCases: ['home-theater', 'gaming'],
    shortTagline: "Sony's original flagship QD-OLED — still one of the best-reviewed panels on the market."
  },

  // ----------------------------------------------------------- Panasonic --
  {
    id: 'tv-panasonic-z95b',
    categorySlug: 'tv',
    brand: 'Panasonic',
    series: 'OLED Z95B',
    model: 'Panasonic Z95B',
    slug: 'panasonic-z95b',
    releaseYear: 2026,
    price: 3099.0,
    msrp: 3399.99,
    currency: 'USD',
    colorOptions: ['Black'],
    material: 'Primary RGB Tandem OLED panel, ThermalFlow cooling chassis',
    warrantyMonths: 12,
    connectivity: ['Wi-Fi 6E', 'Bluetooth', 'HDMI 2.1 x4', 'eARC', 'Ethernet', 'USB x3'],
    features: [
      '360° Soundscape Pro audio system tuned by Technics',
      'ThermalFlow cooling for higher sustained brightness',
      'HCX Pro AI Processor MK II',
      'Fire TV built in with the Penta Tuner',
      'Full HDR10+ and Dolby Vision support'
    ],
    specs: {
      screenSize: 65,
      panelType: 'Primary RGB Tandem OLED (Master OLED Ultra)',
      resolution: '3840x2160 (4K UHD)',
      peakBrightness:
        "Not independently confirmed in nits; Panasonic's new ThermalFlow cooling is designed to push the Tandem panel harder than prior generations",
      refreshRate: 144,
      processor: 'HCX Pro AI Processor MK II',
      hdmi21Ports: 4,
      hdrFormats: 'Dolby Vision, HDR10, HDR10+, HLG',
      smartPlatform: 'Fire TV (Panasonic TV Premium)',
      variableRefreshRate: true,
      audioSystem: '360° Soundscape Pro, front/side/upward-firing speakers + 30W woofer (tuned by Technics)',
      dolbyAtmos: true
    },
    scores: {
      picture: 9.4,
      brightness: 8.8,
      gaming: 8.6,
      smartPlatform: 7.8,
      sound: 9.2,
      design: 8.7,
      connectivity: 9.3,
      value: 6.9
    },
    pros: [
      'One of the best built-in TV sound systems on the market — 360° Soundscape Pro tuned by Technics',
      'New ThermalFlow cooling pushes the Tandem panel to higher sustained brightness',
      'Full HDR10+ and Dolby Vision support (a rare combination)',
      'HCX Pro AI Processor MK II with strong color science'
    ],
    cons: [
      '144Hz refresh — below the 165Hz offered by the LG/Samsung flagships',
      'Fire TV platform has a smaller native app/settings footprint than webOS or Tizen',
      'Peak brightness not independently measured at review time'
    ],
    images: [],
    amazonAsin: 'B0F8MW11YS',
    rating: 0,
    ratingCount: 0,
    competitorSlugs: ['lg-g6', 'samsung-s95h', 'sony-bravia-8-ii', 'philips-oled951', 'panasonic-z90b'],
    useCases: ['home-theater', 'flagship'],
    shortTagline: "Panasonic's flagship 2026 OLED, built around class-leading built-in sound and a new Tandem panel."
  },
  {
    id: 'tv-panasonic-z90b',
    categorySlug: 'tv',
    brand: 'Panasonic',
    series: 'OLED Z90B',
    model: 'Panasonic Z90B',
    slug: 'panasonic-z90b',
    releaseYear: 2026,
    price: 2014.0,
    currency: 'USD',
    colorOptions: ['Black'],
    material: 'Master OLED Pro panel',
    warrantyMonths: 12,
    connectivity: ['Wi-Fi', 'Bluetooth', 'HDMI 2.1 x4', 'eARC', 'Ethernet'],
    features: [
      'Master OLED Pro Panel with HCX Pro AI Processor MK II',
      'Dynamic Theater Surround Pro with Dolby Atmos',
      'Game Mode Extreme: 144Hz VRR, G-Sync compatible, FreeSync Premium',
      'Fire TV built in with the Penta Tuner'
    ],
    specs: {
      screenSize: 65,
      panelType: 'Master OLED Pro Panel',
      resolution: '3840x2160 (4K UHD)',
      peakBrightness: 'Not independently confirmed',
      refreshRate: 144,
      processor: 'HCX Pro AI Processor MK II',
      hdmi21Ports: 4,
      hdrFormats: 'Dolby Vision IQ, HDR10+, HDR10, HLG',
      smartPlatform: 'Fire TV (Panasonic TV Premium)',
      variableRefreshRate: true,
      audioSystem: 'Dynamic Theater Surround Pro, 30W subwoofer (Dolby Atmos)',
      dolbyAtmos: true
    },
    scores: {
      picture: 8.8,
      brightness: 8.0,
      gaming: 8.5,
      smartPlatform: 7.8,
      sound: 8.7,
      design: 8.5,
      connectivity: 9.2,
      value: 7.5
    },
    pros: [
      "Inherits the Z95B's Master OLED Pro panel and HCX Pro AI Processor MK II at a lower price",
      'Dynamic Theater Surround Pro with a 30W subwoofer for Dolby Atmos',
      'Game Mode Extreme with 144Hz VRR, G-Sync compatibility, and AMD FreeSync Premium',
      'Full HDR10+ and Dolby Vision IQ support'
    ],
    cons: [
      "Not currently sold on US Amazon — not part of Panasonic's 2026 US retail lineup (only the Z95B and Z80B are sold in the US)",
      'Price shown is converted from UK pricing (£1,499) for comparison purposes only',
      '144Hz refresh, below the LG/Samsung 165Hz flagships'
    ],
    images: [],
    amazonAsin: '',
    usAvailable: false,
    rating: 0,
    ratingCount: 0,
    competitorSlugs: ['lg-c6', 'samsung-s90h', 'philips-oled911', 'panasonic-z95b'],
    useCases: ['home-theater'],
    shortTagline: "Panasonic's mid-range 2026 OLED — not currently sold in the US; UK pricing shown for comparison."
  },

  // --------------------------------------------------------------- Philips --
  {
    id: 'tv-philips-oled951',
    categorySlug: 'tv',
    brand: 'Philips',
    series: 'OLED951',
    model: 'Philips OLED951',
    slug: 'philips-oled951',
    releaseYear: 2026,
    price: 3760.0,
    currency: 'USD',
    colorOptions: ['Black'],
    material: '4th-Gen LG Primary RGB Tandem 2.0 OLED panel',
    warrantyMonths: 12,
    connectivity: ['Wi-Fi', 'Bluetooth', 'HDMI 2.1 x4', 'eARC', 'Ethernet'],
    features: [
      "World-first Dolby Vision 2 Max support",
      '4-sided Ambilight with AmbiScape',
      '10th-Gen P5 AI Processor with MediaTek Pentonic 800',
      'Titan OS smart platform'
    ],
    specs: {
      screenSize: 65,
      panelType: '4th-Gen LG Primary RGB Tandem 2.0 OLED panel',
      resolution: '3840x2160 (4K UHD)',
      peakBrightness: 4500,
      refreshRate: 165,
      processor: '10th-Gen P5 AI Processor + MediaTek Pentonic 800',
      hdmi21Ports: 4,
      hdrFormats: 'Dolby Vision 2 Max, HDR10+, HDR10, HLG',
      smartPlatform: 'Titan OS',
      variableRefreshRate: true,
      audioSystem: 'Not officially specified (no built-in soundbar on this model, unlike the OLED911)',
      dolbyAtmos: true
    },
    scores: {
      picture: 9.6,
      brightness: 9.7,
      gaming: 9.4,
      smartPlatform: 7.5,
      sound: 7.5,
      design: 9.0,
      connectivity: 9.5,
      value: 6.5
    },
    pros: [
      'World-first Dolby Vision 2 Max support',
      'Rated up to 4,500 nits — the highest of any TV in this comparison set',
      '4-sided Ambilight with the new AmbiScape feature',
      'Four full-bandwidth HDMI 2.1 ports with 4K HFR support'
    ],
    cons: [
      "Not sold on US Amazon — Philips TVs sold in the US come from a different licensee and this lineup isn't distributed there",
      "Price shown is an estimate based on the predecessor OLED950's UK launch price; official 2026 pricing has not been announced",
      'New Titan OS platform is unproven versus webOS, Tizen, or Google TV'
    ],
    images: [],
    amazonAsin: '',
    usAvailable: false,
    rating: 0,
    ratingCount: 0,
    competitorSlugs: ['lg-g6', 'samsung-s95h', 'sony-bravia-8-ii', 'panasonic-z95b', 'philips-oled911'],
    useCases: ['home-theater', 'flagship'],
    shortTagline: "Philips' flagship 2026 OLED and the world's first with Dolby Vision 2 Max — not sold on US Amazon."
  },
  {
    id: 'tv-philips-oled911',
    categorySlug: 'tv',
    brand: 'Philips',
    series: 'OLED911',
    model: 'Philips OLED911',
    slug: 'philips-oled911',
    releaseYear: 2026,
    price: 2954.0,
    currency: 'USD',
    colorOptions: ['Black'],
    material: '4th-Gen LG Primary RGB Tandem 2.0 OLED panel',
    warrantyMonths: 12,
    connectivity: ['Wi-Fi', 'Bluetooth', 'HDMI 2.1 x4', 'eARC', 'Ethernet'],
    features: [
      'World-first Dolby Vision 2 Max support',
      'Integrated 3.1-channel Bowers & Wilkins soundbar',
      '10th-Gen P5 AI Processor with MediaTek Pentonic 800',
      'Titan OS smart platform',
      'Available down to a 48" size for the first time'
    ],
    specs: {
      screenSize: 65,
      panelType: '4th-Gen LG Primary RGB Tandem 2.0 OLED panel',
      resolution: '3840x2160 (4K UHD)',
      peakBrightness: 4500,
      refreshRate: 165,
      processor: '10th-Gen P5 AI Processor + MediaTek Pentonic 800',
      hdmi21Ports: 4,
      hdrFormats: 'Dolby Vision 2 Max, HDR10+, HDR10, HLG',
      smartPlatform: 'Titan OS',
      variableRefreshRate: true,
      audioSystem: '3.1-channel Bowers & Wilkins soundbar (integrated)',
      dolbyAtmos: true
    },
    scores: {
      picture: 9.5,
      brightness: 9.6,
      gaming: 9.4,
      smartPlatform: 7.5,
      sound: 8.9,
      design: 8.9,
      connectivity: 9.5,
      value: 7.2
    },
    pros: [
      'Same 4,500-nit-rated Tandem panel as the flagship OLED951, at a lower price',
      'Integrated 3.1-channel Bowers & Wilkins soundbar',
      'World-first Dolby Vision 2 Max support',
      'Available down to a 48" size for the first time'
    ],
    cons: [
      "Not sold on US Amazon — Philips TVs sold in the US come from a different licensee and this lineup isn't distributed there",
      "Price shown is an estimate based on the predecessor OLED910's UK launch price; official 2026 pricing has not been announced",
      'New Titan OS platform is unproven versus webOS, Tizen, or Google TV'
    ],
    images: [],
    amazonAsin: '',
    usAvailable: false,
    rating: 0,
    ratingCount: 0,
    competitorSlugs: ['lg-c6', 'samsung-s90h', 'panasonic-z90b', 'philips-oled951', 'philips-oled811'],
    useCases: ['home-theater'],
    shortTagline: "Philips' upper-mid 2026 OLED with a built-in Bowers & Wilkins soundbar — not sold on US Amazon."
  },
  {
    id: 'tv-philips-oled811',
    categorySlug: 'tv',
    brand: 'Philips',
    series: 'OLED811',
    model: 'Philips OLED811',
    slug: 'philips-oled811',
    releaseYear: 2026,
    price: 2954.0,
    currency: 'USD',
    colorOptions: ['Black'],
    material: 'OLED EX panel (LG-sourced)',
    warrantyMonths: 12,
    connectivity: ['Wi-Fi', 'Bluetooth', 'HDMI 2.1 x4', 'eARC', 'Ethernet'],
    features: [
      'World-first Dolby Vision 2 Max support at this tier',
      '3-sided Ambilight with AmbiScape',
      '10th-Gen P5 AI Processor with MediaTek Pentonic 800',
      'Titan OS smart platform'
    ],
    specs: {
      screenSize: 65,
      panelType: 'OLED EX panel (LG-sourced)',
      resolution: '3840x2160 (4K UHD)',
      peakBrightness: 2500,
      refreshRate: 165,
      processor: '10th-Gen P5 AI Processor + MediaTek Pentonic 800',
      hdmi21Ports: 4,
      hdrFormats: 'Dolby Vision 2 Max, HDR10+, HDR10, HLG',
      smartPlatform: 'Titan OS',
      variableRefreshRate: true,
      audioSystem: 'Not officially specified',
      dolbyAtmos: true
    },
    scores: {
      picture: 9.0,
      brightness: 8.5,
      gaming: 9.3,
      smartPlatform: 7.5,
      sound: 7.0,
      design: 8.5,
      connectivity: 9.5,
      value: 7.0
    },
    pros: [
      '165Hz refresh with all four HDMI 2.1 ports supporting 4K HFR — rare at this tier',
      'World-first Dolby Vision 2 Max support',
      '3-sided Ambilight with AmbiScape',
      'LG-sourced OLED EX panel rated up to 2,500 nits'
    ],
    cons: [
      "Not sold on US Amazon — Philips TVs sold in the US come from a different licensee and this lineup isn't distributed there",
      'Price shown is estimated from the predecessor OLED810\'s 77" UK launch price — no confirmed 65" pricing exists yet for the OLED811',
      'Official 2026 pricing and full availability have not been announced'
    ],
    images: [],
    amazonAsin: '',
    usAvailable: false,
    rating: 0,
    ratingCount: 0,
    competitorSlugs: ['lg-b6', 'samsung-s85h', 'philips-oled911'],
    useCases: ['gaming', 'home-theater'],
    shortTagline: "Philips' mid-range 2026 OLED with 165Hz gaming specs — not sold on US Amazon, pricing estimated."
  }
];
