import { Category } from './types';

export const categories: Category[] = [
  {
    slug: 'headphones',
    name: 'Headphones',
    pluralName: 'Headphones',
    description:
      'Over-ear and on-ear wireless headphones compared spec-for-spec — battery life, noise cancelling, comfort, and call quality — so you know exactly which one to buy.',
    specFields: [
      { key: 'battery', label: 'Battery Life', unit: 'hrs', betterDirection: 'higher' },
      { key: 'batteryAncOff', label: 'Battery (ANC off)', unit: 'hrs', betterDirection: 'higher' },
      { key: 'quickCharge', label: 'Quick Charge', unit: 'min for 3hrs', betterDirection: 'lower' },
      { key: 'bluetooth', label: 'Bluetooth Version', betterDirection: 'higher' },
      { key: 'weight', label: 'Weight', unit: 'g', betterDirection: 'lower' },
      { key: 'driverSize', label: 'Driver Size', unit: 'mm', betterDirection: 'none' },
      { key: 'anc', label: 'Active Noise Cancelling', betterDirection: 'none' },
      { key: 'multipoint', label: 'Multipoint Pairing', betterDirection: 'none' },
      { key: 'micCount', label: 'Microphones', unit: 'mics', betterDirection: 'higher' },
      { key: 'foldable', label: 'Foldable', betterDirection: 'none' },
      { key: 'waterResistance', label: 'Water Resistance', betterDirection: 'none' },
      { key: 'appEq', label: 'App EQ', betterDirection: 'none' }
    ],
    scoreDimensions: [
      { key: 'battery', label: 'Battery', description: 'Playtime, standby, and charging speed' },
      { key: 'anc', label: 'Noise Cancelling', description: 'How well ambient noise is blocked' },
      { key: 'comfort', label: 'Comfort', description: 'Clamp force, padding, and weight for long sessions' },
      { key: 'sound', label: 'Sound Quality', description: 'Driver performance, tuning, and detail' },
      { key: 'calls', label: 'Call & Mic Quality', description: 'Voice clarity and background noise rejection on calls' },
      { key: 'travel', label: 'Travel', description: 'Foldability, case, ANC on planes, battery for long trips' },
      { key: 'gaming', label: 'Gaming', description: 'Latency, low-lag mode support, and soundstage' },
      { key: 'value', label: 'Value', description: 'Features and performance relative to price' },
      { key: 'durability', label: 'Durability', description: 'Build materials, hinge quality, and reported longevity' },
      { key: 'features', label: 'Features', description: 'App ecosystem, multipoint, spatial audio, extras' }
    ],
    filters: [
      { slug: 'under-100', label: 'Under $100', kind: 'price-max', value: 100 },
      { slug: 'under-200', label: 'Under $200', kind: 'price-max', value: 200 },
      { slug: 'under-300', label: 'Under $300', kind: 'price-max', value: 300 },
      { slug: 'under-400', label: 'Under $400', kind: 'price-max', value: 400 },
      { slug: 'travel', label: 'Travel', kind: 'use-case' },
      { slug: 'gaming', label: 'Gaming', kind: 'use-case' },
      { slug: 'students', label: 'Students', kind: 'use-case' },
      { slug: 'professionals', label: 'Professionals', kind: 'use-case' },
      { slug: 'commute', label: 'Commute', kind: 'use-case' },
      { slug: 'office', label: 'Office', kind: 'use-case' },
      { slug: 'workout', label: 'Workouts', kind: 'use-case' }
    ]
  },
  {
    slug: 'tv',
    name: 'TV',
    pluralName: 'TVs',
    description:
      'Flagship and mid-range OLED TVs compared spec-for-spec — panel technology, peak brightness, refresh rate, gaming features, and smart platform — so you know exactly which one to buy.',
    specFields: [
      { key: 'screenSize', label: 'Screen Size', unit: 'in', betterDirection: 'none' },
      { key: 'panelType', label: 'Panel Type', betterDirection: 'none' },
      { key: 'resolution', label: 'Resolution', betterDirection: 'none' },
      { key: 'peakBrightness', label: 'Peak Brightness', unit: 'nits', betterDirection: 'higher' },
      { key: 'refreshRate', label: 'Refresh Rate', unit: 'Hz', betterDirection: 'higher' },
      { key: 'processor', label: 'Processor', betterDirection: 'none' },
      { key: 'hdmi21Ports', label: 'HDMI 2.1 Ports', unit: 'ports', betterDirection: 'higher' },
      { key: 'hdrFormats', label: 'HDR Formats', betterDirection: 'none' },
      { key: 'smartPlatform', label: 'Smart Platform', betterDirection: 'none' },
      { key: 'variableRefreshRate', label: 'Variable Refresh Rate (VRR)', betterDirection: 'none' },
      { key: 'audioSystem', label: 'Built-in Audio System', betterDirection: 'none' },
      { key: 'dolbyAtmos', label: 'Built-in Dolby Atmos', betterDirection: 'none' }
    ],
    scoreDimensions: [
      { key: 'picture', label: 'Picture Quality', description: 'Panel technology, contrast, and color accuracy' },
      { key: 'brightness', label: 'Brightness & HDR', description: 'Peak nits and HDR format support for highlight detail' },
      { key: 'gaming', label: 'Gaming Features', description: 'Refresh rate, VRR, input lag, and console support' },
      { key: 'smartPlatform', label: 'Smart Platform', description: 'OS responsiveness, app ecosystem, and voice assistant support' },
      { key: 'sound', label: 'Built-in Sound', description: 'Onboard speaker power, clarity, and Dolby Atmos support' },
      { key: 'design', label: 'Design & Build', description: 'Panel thinness, bezels, stand/mount options, and finish' },
      { key: 'connectivity', label: 'Connectivity', description: 'HDMI 2.1 port count and other I/O for consoles and soundbars' },
      { key: 'value', label: 'Value', description: 'Performance and features relative to price' }
    ],
    filters: [
      { slug: 'under-2000', label: 'Under $2,000', kind: 'price-max', value: 2000 },
      { slug: 'under-3000', label: 'Under $3,000', kind: 'price-max', value: 3000 },
      { slug: 'under-4000', label: 'Under $4,000', kind: 'price-max', value: 4000 },
      { slug: 'under-6000', label: 'Under $6,000', kind: 'price-max', value: 6000 },
      { slug: 'gaming', label: 'Gaming', kind: 'use-case' },
      { slug: 'home-theater', label: 'Home Theater', kind: 'use-case' },
      { slug: 'flagship', label: 'Flagship', kind: 'use-case' },
      { slug: 'wall-mounted', label: 'Wall-Mounted / Space-Saving', kind: 'use-case' }
    ]
  }
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
