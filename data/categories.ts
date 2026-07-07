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
  }
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
