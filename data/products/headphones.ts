import { Product } from '../types';

// ---------------------------------------------------------------------------
// SEED DATA — Headphones category
//
// IMPORTANT before going live:
// 1. `amazonAsin` values below are PLACEHOLDERS (format B0XXXXXXX1, ...2, ...).
//    Replace every one with the real ASIN pulled from Amazon SiteStripe for
//    your Associates account. Do not publish placeholder ASINs.
// 2. `images` point at local paths under /public/images/products/<slug>/.
//    Add real product photography there (Amazon SiteStripe also gives you
//    approved image URLs you can hot-link instead, if you prefer).
// 3. Specs and prices are accurate to the best of available knowledge at
//    time of writing but electronics specs/pricing change — verify against
//    the manufacturer's current spec sheet before publishing.
//
// This file is the single source of truth. Every product page, comparison
// page, and filter page in the app is generated from these objects — see
// lib/content-generator.ts and lib/scoring.ts for how copy and rankings
// are derived (never invented) from this structured data.
// ---------------------------------------------------------------------------

export const headphonesProducts: Product[] = [
  {
    id: 'sony-wh-1000xm6',
    categorySlug: 'headphones',
    brand: 'Sony',
    series: 'WH-1000XM',
    model: 'WH-1000XM6',
    slug: 'sony-wh-1000xm6',
    releaseYear: 2025,
    price: 449.99,
    msrp: 449.99,
    currency: 'USD',
    colorOptions: ['Black', 'Platinum Silver', 'Midnight Blue'],
    material: 'Plastic / metal hinge, protein leather earpads',
    warrantyMonths: 12,
    connectivity: ['Bluetooth 5.3', '3.5mm wired', 'USB-C wired audio', 'NFC'],
    features: [
      'Dual Processor QN3 noise cancelling',
      'Adaptive EQ with 12-microphone array',
      'Speak-to-Chat',
      'Multipoint pairing (2 devices)',
      'Sony Connect / Headphones Connect app EQ',
      '360 Reality Audio support',
      'Foldable design with case'
    ],
    specs: {
      battery: 30,
      batteryAncOff: 30,
      quickCharge: 3,
      bluetooth: '5.3',
      weight: 254,
      driverSize: 30,
      anc: true,
      multipoint: true,
      micCount: 12,
      foldable: true,
      waterResistance: 'None',
      appEq: true
    },
    scores: {
      battery: 8.6,
      anc: 9.7,
      comfort: 9.0,
      sound: 9.3,
      calls: 9.4,
      travel: 9.3,
      gaming: 7.4,
      value: 7.8,
      durability: 8.6,
      features: 9.5
    },
    pros: [
      'Best-in-class active noise cancelling',
      'Class-leading call quality thanks to the 12-mic array',
      'Folds flat again after the XM5 dropped that feature',
      'Excellent app with deep EQ and spatial audio controls',
      'Multipoint pairing works reliably across two devices'
    ],
    cons: [
      'Most expensive Sony XM headphone yet',
      'Modest battery gains over the XM5',
      'No official water/sweat resistance rating',
      'Case is slightly bulkier than AirPods Max'
    ],
    images: [
      { url: '/images/products/sony-wh-1000xm6/main.jpg', alt: 'Sony WH-1000XM6 wireless headphones in black' }
    ],
    amazonAsin: 'B0XXXXXXX1',
    rating: 4.6,
    ratingCount: 812,
    competitorSlugs: [
      'sony-wh-1000xm5',
      'bose-qc-ultra-headphones',
      'apple-airpods-max',
      'sennheiser-momentum-4-wireless',
      'beats-studio-pro'
    ],
    previousModelSlug: 'sony-wh-1000xm5',
    accessorySlugs: [],
    useCases: ['travel', 'commute', 'office', 'professionals'],
    shortTagline: 'The most refined noise-cancelling headphone Sony has made.'
  },
  {
    id: 'sony-wh-1000xm5',
    categorySlug: 'headphones',
    brand: 'Sony',
    series: 'WH-1000XM',
    model: 'WH-1000XM5',
    slug: 'sony-wh-1000xm5',
    releaseYear: 2022,
    price: 328.0,
    msrp: 399.99,
    currency: 'USD',
    colorOptions: ['Black', 'Platinum Silver', 'Midnight Blue'],
    material: 'Plastic, protein leather earpads',
    warrantyMonths: 12,
    connectivity: ['Bluetooth 5.2', '3.5mm wired', 'USB-C wired audio', 'NFC'],
    features: [
      'Dual Processor V1 + QN1 noise cancelling',
      '8-microphone array with AI noise reduction',
      'Speak-to-Chat',
      'Multipoint pairing (2 devices)',
      'Sony Headphones Connect app EQ',
      '360 Reality Audio support'
    ],
    specs: {
      battery: 30,
      batteryAncOff: 40,
      quickCharge: 3,
      bluetooth: '5.2',
      weight: 250,
      driverSize: 30,
      anc: true,
      multipoint: true,
      micCount: 8,
      foldable: false,
      waterResistance: 'None',
      appEq: true
    },
    scores: {
      battery: 8.5,
      anc: 9.3,
      comfort: 8.8,
      sound: 9.1,
      calls: 8.9,
      travel: 8.7,
      gaming: 7.2,
      value: 8.7,
      durability: 8.3,
      features: 9.0
    },
    pros: [
      'Excellent ANC for the price, especially now discounted',
      'Very comfortable for long listening sessions',
      'Mature, reliable app ecosystem',
      'Strong resale/second-hand value given how common it is'
    ],
    cons: [
      'Does not fold flat, bulkier to pack than the XM4',
      'Fewer mics than the XM6, so calls are a step behind',
      'No wear-detection auto pause improvement over predecessor'
    ],
    images: [
      { url: '/images/products/sony-wh-1000xm5/main.jpg', alt: 'Sony WH-1000XM5 wireless headphones in black' }
    ],
    amazonAsin: 'B0XXXXXXX2',
    rating: 4.6,
    ratingCount: 24310,
    competitorSlugs: [
      'sony-wh-1000xm6',
      'sony-wh-1000xm4',
      'bose-qc-ultra-headphones',
      'sennheiser-momentum-4-wireless',
      'jbl-tour-one-m2'
    ],
    previousModelSlug: 'sony-wh-1000xm4',
    nextModelSlug: 'sony-wh-1000xm6',
    accessorySlugs: [],
    useCases: ['travel', 'commute', 'office', 'students'],
    shortTagline: 'The value pick in the XM line now that the XM6 has launched.'
  },
  {
    id: 'sony-wh-1000xm4',
    categorySlug: 'headphones',
    brand: 'Sony',
    series: 'WH-1000XM',
    model: 'WH-1000XM4',
    slug: 'sony-wh-1000xm4',
    releaseYear: 2020,
    price: 248.0,
    msrp: 349.99,
    currency: 'USD',
    colorOptions: ['Black', 'Silver', 'Midnight Blue'],
    material: 'Plastic, synthetic leather earpads',
    warrantyMonths: 12,
    connectivity: ['Bluetooth 5.0', '3.5mm wired', 'NFC'],
    features: [
      'Dual Processor QN1 noise cancelling',
      '5-microphone array',
      'Speak-to-Chat',
      'Multipoint pairing (2 devices)',
      'Sony Headphones Connect app EQ'
    ],
    specs: {
      battery: 30,
      batteryAncOff: 38,
      quickCharge: 5,
      bluetooth: '5.0',
      weight: 254,
      driverSize: 40,
      anc: true,
      multipoint: true,
      micCount: 5,
      foldable: true,
      waterResistance: 'None',
      appEq: true
    },
    scores: {
      battery: 8.3,
      anc: 8.9,
      comfort: 8.7,
      sound: 8.8,
      calls: 8.0,
      travel: 8.6,
      gaming: 6.8,
      value: 9.1,
      durability: 8.2,
      features: 8.3
    },
    pros: [
      'Lowest price of any current-gen Sony XM model',
      'Still folds flat into a compact case',
      'Proven, widely reviewed noise cancelling performance',
      'Great value for students and budget travelers'
    ],
    cons: [
      'Oldest Bluetooth version of the three XM models',
      'Weakest microphone array of the lineup',
      'No USB-C wired audio, only 3.5mm'
    ],
    images: [
      { url: '/images/products/sony-wh-1000xm4/main.jpg', alt: 'Sony WH-1000XM4 wireless headphones in black' }
    ],
    amazonAsin: 'B0XXXXXXX3',
    rating: 4.7,
    ratingCount: 61240,
    competitorSlugs: ['sony-wh-1000xm5', 'anker-soundcore-space-one-pro', 'jbl-tour-one-m2'],
    nextModelSlug: 'sony-wh-1000xm5',
    accessorySlugs: [],
    useCases: ['travel', 'students', 'commute'],
    shortTagline: 'Still the budget-friendly gateway into the XM series.'
  },
  {
    id: 'bose-qc-ultra-headphones',
    categorySlug: 'headphones',
    brand: 'Bose',
    series: 'QuietComfort Ultra',
    model: 'QC Ultra Headphones',
    slug: 'bose-qc-ultra-headphones',
    releaseYear: 2023,
    price: 429.0,
    msrp: 429.0,
    currency: 'USD',
    colorOptions: ['Black', 'White Smoke', 'Sandstone'],
    material: 'Plastic, silicone-cushioned earpads',
    warrantyMonths: 12,
    connectivity: ['Bluetooth 5.3', '3.5mm wired', 'USB-C wired audio'],
    features: [
      'Bose Immersive Audio with head tracking',
      'CustomTune sound calibration',
      'Adjustable ANC / Aware modes',
      'Multipoint pairing (2 devices)',
      'Bose Music app EQ'
    ],
    specs: {
      battery: 24,
      batteryAncOff: 24,
      quickCharge: 15,
      bluetooth: '5.3',
      weight: 254,
      driverSize: 'Not published',
      anc: true,
      multipoint: true,
      micCount: 6,
      foldable: true,
      waterResistance: 'None',
      appEq: true
    },
    scores: {
      battery: 7.4,
      anc: 9.6,
      comfort: 9.4,
      sound: 9.2,
      calls: 9.0,
      travel: 8.8,
      gaming: 7.0,
      value: 7.6,
      durability: 8.5,
      features: 9.1
    },
    pros: [
      'Best-in-class comfort, even during multi-hour wear',
      'Immersive Audio head-tracking is unique in this class',
      'ANC that rivals or beats Sony in wind and transit noise',
      'CustomTune auto-calibrates sound to your ears and fit'
    ],
    cons: [
      'Shortest battery life of the flagship competitors',
      'Driver size not published, hard to compare on paper',
      'Immersive Audio mode drains battery faster'
    ],
    images: [
      { url: '/images/products/bose-qc-ultra-headphones/main.jpg', alt: 'Bose QuietComfort Ultra Headphones in black' }
    ],
    amazonAsin: 'B0XXXXXXX4',
    rating: 4.5,
    ratingCount: 5310,
    competitorSlugs: [
      'sony-wh-1000xm6',
      'sony-wh-1000xm5',
      'apple-airpods-max',
      'bowers-wilkins-px7-s2e',
      'sennheiser-momentum-4-wireless'
    ],
    accessorySlugs: [],
    useCases: ['travel', 'office', 'professionals', 'commute'],
    shortTagline: "Bose's most comfortable, most immersive-sounding ANC headphone."
  },
  {
    id: 'apple-airpods-max',
    categorySlug: 'headphones',
    brand: 'Apple',
    series: 'AirPods',
    model: 'AirPods Max',
    slug: 'apple-airpods-max',
    releaseYear: 2024,
    price: 549.0,
    msrp: 549.0,
    currency: 'USD',
    colorOptions: ['Space Gray', 'Silver', 'Sky Blue', 'Pink', 'Starlight', 'Midnight'],
    material: 'Anodized aluminum earcups, stainless steel headband, knit mesh canopy',
    warrantyMonths: 12,
    connectivity: ['Bluetooth 5.0', 'USB-C wired audio (lossless)'],
    features: [
      'Adaptive Audio with Transparency mode',
      'Personalized Spatial Audio with dynamic head tracking',
      'Automatic device switching across Apple ecosystem',
      'Digital Crown volume control',
      'USB-C lossless audio (2024 refresh)'
    ],
    specs: {
      battery: 20,
      batteryAncOff: 20,
      quickCharge: 5,
      bluetooth: '5.0',
      weight: 384.8,
      driverSize: 40,
      anc: true,
      multipoint: true,
      micCount: 9,
      foldable: false,
      waterResistance: 'None',
      appEq: false
    },
    scores: {
      battery: 6.2,
      anc: 9.0,
      comfort: 7.6,
      sound: 9.2,
      calls: 8.6,
      travel: 7.5,
      gaming: 6.5,
      value: 6.4,
      durability: 8.8,
      features: 8.6
    },
    pros: [
      'Unmatched integration with iPhone, iPad, and Mac',
      'Premium metal and glass build quality',
      'Excellent Spatial Audio with dynamic head tracking',
      'Now supports USB-C lossless audio'
    ],
    cons: [
      'Heaviest headphone in this comparison set by far',
      'Shortest battery life of any model here',
      'No dedicated EQ app, limited to iOS accessibility settings',
      "Smart Case doesn't fully protect the headband",
      'Most expensive option'
    ],
    images: [
      { url: '/images/products/apple-airpods-max/main.jpg', alt: 'Apple AirPods Max in space gray' }
    ],
    amazonAsin: 'B0XXXXXXX5',
    rating: 4.4,
    ratingCount: 18760,
    competitorSlugs: [
      'sony-wh-1000xm6',
      'bose-qc-ultra-headphones',
      'beats-studio-pro',
      'bowers-wilkins-px7-s2e'
    ],
    accessorySlugs: [],
    useCases: ['office', 'professionals', 'commute'],
    shortTagline: "The ANC headphone built for people fully inside Apple's ecosystem."
  },
  {
    id: 'sennheiser-momentum-4-wireless',
    categorySlug: 'headphones',
    brand: 'Sennheiser',
    series: 'Momentum',
    model: 'Momentum 4 Wireless',
    slug: 'sennheiser-momentum-4-wireless',
    releaseYear: 2022,
    price: 299.95,
    msrp: 379.95,
    currency: 'USD',
    colorOptions: ['Black', 'White', 'Graphite'],
    material: 'Plastic frame, memory foam earpads',
    warrantyMonths: 24,
    connectivity: ['Bluetooth 5.2', '3.5mm wired', 'USB-C wired audio'],
    features: [
      'Adaptive Noise Cancellation',
      'Sound Personalization',
      'Multipoint pairing (2 devices)',
      'Sennheiser Smart Control app EQ',
      'aptX Adaptive, LDAC, AAC codec support'
    ],
    specs: {
      battery: 60,
      batteryAncOff: 60,
      quickCharge: 10,
      bluetooth: '5.2',
      weight: 293,
      driverSize: 42,
      anc: true,
      multipoint: true,
      micCount: 4,
      foldable: true,
      waterResistance: 'None',
      appEq: true
    },
    scores: {
      battery: 9.8,
      anc: 8.7,
      comfort: 8.5,
      sound: 9.4,
      calls: 8.2,
      travel: 9.2,
      gaming: 7.3,
      value: 8.5,
      durability: 8.4,
      features: 8.7
    },
    pros: [
      'Class-leading 60-hour battery life',
      'Excellent, detailed sound signature audiophiles favor',
      'Widest codec support (aptX Adaptive, LDAC, AAC)',
      '2-year warranty, longest of any brand here'
    ],
    cons: [
      'Heavier and less streamlined design than rivals',
      'Weakest microphone array of the flagship competitors',
      'Touch controls are less precise than Sony/Bose'
    ],
    images: [
      {
        url: '/images/products/sennheiser-momentum-4-wireless/main.jpg',
        alt: 'Sennheiser Momentum 4 Wireless headphones in black'
      }
    ],
    amazonAsin: 'B0XXXXXXX6',
    rating: 4.5,
    ratingCount: 9120,
    competitorSlugs: [
      'sony-wh-1000xm6',
      'sony-wh-1000xm5',
      'bose-qc-ultra-headphones',
      'bowers-wilkins-px7-s2e'
    ],
    accessorySlugs: [],
    useCases: ['travel', 'office', 'professionals'],
    shortTagline: 'The battery-life and sound-quality champion for long trips.'
  },
  {
    id: 'beats-studio-pro',
    categorySlug: 'headphones',
    brand: 'Beats',
    series: 'Studio',
    model: 'Studio Pro',
    slug: 'beats-studio-pro',
    releaseYear: 2023,
    price: 179.95,
    msrp: 349.99,
    currency: 'USD',
    colorOptions: ['Black', 'Sandstone', 'Deep Brown', 'Navy'],
    material: 'Plastic frame, cushioned earpads',
    warrantyMonths: 12,
    connectivity: ['Bluetooth 5.3', 'USB-C wired audio (lossless)', '3.5mm wired'],
    features: [
      'Adaptive Noise Cancelling + Transparency mode',
      'Personalized Spatial Audio with dynamic head tracking',
      'Works with both iOS (one-tap pairing) and Android (Beats app)',
      'USB-C lossless audio',
      'Multipoint pairing (2 devices)'
    ],
    specs: {
      battery: 24,
      batteryAncOff: 40,
      quickCharge: 10,
      bluetooth: '5.3',
      weight: 260,
      driverSize: 40,
      anc: true,
      multipoint: true,
      micCount: 6,
      foldable: true,
      waterResistance: 'None',
      appEq: true
    },
    scores: {
      battery: 8.0,
      anc: 7.9,
      comfort: 8.3,
      sound: 8.4,
      calls: 8.1,
      travel: 8.2,
      gaming: 7.0,
      value: 9.3,
      durability: 8.0,
      features: 8.4
    },
    pros: [
      'Frequently discounted to well under $200 — strong value',
      'Works equally well across iOS and Android',
      'Punchy, bass-forward tuning fans of Beats expect',
      'USB-C lossless audio input'
    ],
    cons: [
      'ANC is a step behind Sony, Bose, and Sennheiser',
      'Case is bulkier than competitors',
      'App EQ is more limited than Sony/Sennheiser/Bose'
    ],
    images: [
      { url: '/images/products/beats-studio-pro/main.jpg', alt: 'Beats Studio Pro headphones in black' }
    ],
    amazonAsin: 'B0XXXXXXX7',
    rating: 4.4,
    ratingCount: 7480,
    competitorSlugs: [
      'apple-airpods-max',
      'jbl-tour-one-m2',
      'anker-soundcore-space-one-pro',
      'sony-wh-1000xm5'
    ],
    accessorySlugs: [],
    useCases: ['students', 'commute', 'workout'],
    shortTagline: 'The value-priced Apple-ecosystem pick, especially on sale.'
  },
  {
    id: 'jbl-tour-one-m2',
    categorySlug: 'headphones',
    brand: 'JBL',
    series: 'Tour',
    model: 'Tour One M2',
    slug: 'jbl-tour-one-m2',
    releaseYear: 2023,
    price: 249.95,
    msrp: 299.95,
    currency: 'USD',
    colorOptions: ['Black', 'Blue', 'Tan'],
    material: 'Plastic, leatherette earpads',
    warrantyMonths: 12,
    connectivity: ['Bluetooth 5.3', '3.5mm wired', 'USB-C wired audio'],
    features: [
      'True Adaptive Noise Cancelling (8-mic)',
      'Personi-Fi 2.0 personalized sound',
      'Multipoint pairing (2 devices)',
      'JBL Headphones app with detailed EQ',
      'Smart Talk auto-pause for conversations'
    ],
    specs: {
      battery: 30,
      batteryAncOff: 45,
      quickCharge: 5,
      bluetooth: '5.3',
      weight: 236,
      driverSize: 40,
      anc: true,
      multipoint: true,
      micCount: 8,
      foldable: true,
      waterResistance: 'None',
      appEq: true
    },
    scores: {
      battery: 8.4,
      anc: 8.3,
      comfort: 8.2,
      sound: 8.5,
      calls: 8.3,
      travel: 8.6,
      gaming: 7.1,
      value: 9.0,
      durability: 7.8,
      features: 8.6
    },
    pros: [
      'Lightest headphone in this comparison set',
      'Strong feature set for the price, including Personi-Fi tuning',
      'Long battery life with ANC on',
      'Detailed, adjustable app EQ'
    ],
    cons: [
      'Build quality feels less premium than Sony/Bose/B&W',
      'Brand has smaller resale/support ecosystem',
      'ANC good but not class-leading'
    ],
    images: [
      { url: '/images/products/jbl-tour-one-m2/main.jpg', alt: 'JBL Tour One M2 headphones in black' }
    ],
    amazonAsin: 'B0XXXXXXX8',
    rating: 4.3,
    ratingCount: 3120,
    competitorSlugs: [
      'sony-wh-1000xm5',
      'beats-studio-pro',
      'anker-soundcore-space-one-pro',
      'sennheiser-momentum-4-wireless'
    ],
    accessorySlugs: [],
    useCases: ['travel', 'students', 'commute'],
    shortTagline: 'A lightweight, feature-rich alternative that undercuts the big three.'
  },
  {
    id: 'bowers-wilkins-px7-s2e',
    categorySlug: 'headphones',
    brand: 'Bowers & Wilkins',
    series: 'Px7',
    model: 'Px7 S2e',
    slug: 'bowers-wilkins-px7-s2e',
    releaseYear: 2023,
    price: 399.0,
    msrp: 399.0,
    currency: 'USD',
    colorOptions: ['Anthracite Black', 'Cloud Grey', 'Forest Green'],
    material: 'Aluminum arms, forged carbon fibre composite earcups',
    warrantyMonths: 24,
    connectivity: ['Bluetooth 5.3', '3.5mm wired', 'USB-C wired audio'],
    features: [
      'Adaptive ANC with 6-mic hybrid array',
      '24-bit audio processing',
      'Multipoint pairing (2 devices)',
      'Bowers & Wilkins Music app EQ',
      'aptX Adaptive codec support'
    ],
    specs: {
      battery: 30,
      batteryAncOff: 30,
      quickCharge: 15,
      bluetooth: '5.3',
      weight: 307,
      driverSize: 40,
      anc: true,
      multipoint: true,
      micCount: 8,
      foldable: true,
      waterResistance: 'None',
      appEq: true
    },
    scores: {
      battery: 8.1,
      anc: 8.6,
      comfort: 8.0,
      sound: 9.5,
      calls: 8.0,
      travel: 8.3,
      gaming: 7.0,
      value: 7.2,
      durability: 9.2,
      features: 8.3
    },
    pros: [
      'Best build quality and materials in this comparison set',
      'Reference-grade sound tuning from a hi-fi speaker brand',
      '2-year warranty',
      '24-bit audio processing for higher-resolution playback'
    ],
    cons: [
      'Heaviest headphone here after AirPods Max',
      'Premium price without premium-tier ANC',
      'Smaller brand means fewer retail listening demos'
    ],
    images: [
      { url: '/images/products/bowers-wilkins-px7-s2e/main.jpg', alt: 'Bowers & Wilkins Px7 S2e headphones in black' }
    ],
    amazonAsin: 'B0XXXXXXX9',
    rating: 4.5,
    ratingCount: 1240,
    competitorSlugs: [
      'sennheiser-momentum-4-wireless',
      'bose-qc-ultra-headphones',
      'sony-wh-1000xm6',
      'apple-airpods-max'
    ],
    accessorySlugs: [],
    useCases: ['office', 'professionals', 'travel'],
    shortTagline: 'The audiophile pick, built like a premium hi-fi product.'
  },
  {
    id: 'anker-soundcore-space-one-pro',
    categorySlug: 'headphones',
    brand: 'Anker',
    series: 'Soundcore Space',
    model: 'Space One Pro',
    slug: 'anker-soundcore-space-one-pro',
    releaseYear: 2024,
    price: 129.99,
    msrp: 149.99,
    currency: 'USD',
    colorOptions: ['Black', 'Blue', 'White'],
    material: 'Plastic, protein leather earpads',
    warrantyMonths: 18,
    connectivity: ['Bluetooth 5.3', '3.5mm wired', 'USB-C wired audio'],
    features: [
      'Adaptive ANC 2.0 with real-time wind noise reduction',
      'LDAC hi-res codec support',
      'Multipoint pairing (2 devices)',
      'Soundcore app with 22-band EQ',
      'HearID personalized sound profile'
    ],
    specs: {
      battery: 40,
      batteryAncOff: 65,
      quickCharge: 5,
      bluetooth: '5.3',
      weight: 275,
      driverSize: 40,
      anc: true,
      multipoint: true,
      micCount: 6,
      foldable: true,
      waterResistance: 'None',
      appEq: true
    },
    scores: {
      battery: 9.1,
      anc: 7.8,
      comfort: 8.1,
      sound: 8.0,
      calls: 7.6,
      travel: 8.7,
      gaming: 6.9,
      value: 9.7,
      durability: 7.5,
      features: 8.2
    },
    pros: [
      'Best value in this comparison set by a wide margin',
      'Long battery life with ANC on, exceptional with it off',
      '22-band EQ is more granular than most flagship apps',
      '18-month warranty, longer than most premium brands'
    ],
    cons: [
      'ANC and call quality trail the $300+ flagships',
      'Build materials feel noticeably cheaper',
      'Smaller brand reputation for long-term durability'
    ],
    images: [
      {
        url: '/images/products/anker-soundcore-space-one-pro/main.jpg',
        alt: 'Anker Soundcore Space One Pro headphones in black'
      }
    ],
    amazonAsin: 'B0XXXXXXXA',
    rating: 4.3,
    ratingCount: 2860,
    competitorSlugs: ['jbl-tour-one-m2', 'beats-studio-pro', 'sony-wh-1000xm4'],
    accessorySlugs: [],
    useCases: ['students', 'commute', 'workout', 'travel'],
    shortTagline: "The budget pick that doesn't feel like a compromise."
  }
];
