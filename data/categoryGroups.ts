import { CategoryIconKey } from '@/components/icons/CategoryIcon';

// ---------------------------------------------------------------------------
// Full category taxonomy shown on the homepage and /categories, covering
// where the site is headed — not just what has product data today. An item
// is only clickable once `slug` is set AND that slug exists as a real,
// populated category in data/categories.ts. Everything else renders as a
// clearly labeled "Coming soon" item rather than a dead link.
// ---------------------------------------------------------------------------

export type CategoryGroupItem = {
  name: string;
  slug?: string;
};

export type CategoryGroup = {
  name: string;
  iconKey: CategoryIconKey;
  items: CategoryGroupItem[];
};

export const categoryGroups: CategoryGroup[] = [
  {
    name: 'TV & Home Entertainment',
    iconKey: 'tv',
    items: [
      { name: 'Smart TVs', slug: 'tv' },
      { name: 'Streaming Devices', slug: 'streaming-devices' },
      { name: 'Soundbars', slug: 'soundbars' },
      { name: 'Projectors', slug: 'projectors' },
      { name: 'TV Mounts', slug: 'tv-mounts' },
      { name: 'Blu-ray Players', slug: 'blu-ray-players' }
    ]
  },
  {
    name: 'Audio',
    iconKey: 'audio',
    items: [
      { name: 'Bluetooth Speakers', slug: 'bluetooth-speakers' },
      { name: 'Wireless Earbuds', slug: 'wireless-earbuds' },
      { name: 'Headphones', slug: 'headphones' },
      { name: 'Soundbars', slug: 'soundbars' },
      { name: 'Home Speakers', slug: 'home-speakers' }
    ]
  },
  {
    name: 'Wearables',
    iconKey: 'wearable',
    items: [
      { name: 'Smartwatches', slug: 'smartwatches' },
      { name: 'Fitness Trackers', slug: 'fitness-trackers' },
      { name: 'GPS Running Watches', slug: 'gps-running-watches' },
      { name: 'Smart Rings', slug: 'smart-rings' }
    ]
  },
  {
    name: 'Smart Home',
    iconKey: 'smart-home',
    items: [
      { name: 'Video Doorbells', slug: 'video-doorbells' },
      { name: 'Security Cameras', slug: 'security-cameras' },
      { name: 'Smart Locks', slug: 'smart-locks' },
      { name: 'Smart Thermostats', slug: 'smart-thermostats' },
      { name: 'Smart Plugs', slug: 'smart-plugs' },
      { name: 'Smart Lights', slug: 'smart-lights' },
      { name: 'Smart Displays', slug: 'smart-displays' }
    ]
  },
  {
    name: 'Cameras',
    iconKey: 'camera',
    items: [
      { name: 'Mirrorless Cameras' },
      { name: 'Action Cameras' },
      { name: 'Dash Cams' },
      { name: 'Instant Cameras' },
      { name: 'Digital Cameras' },
      { name: 'Webcams' }
    ]
  },
  {
    name: 'Tablets & E-Readers',
    iconKey: 'tablet',
    items: [{ name: 'Tablets' }, { name: 'E-Readers' }, { name: 'Digital Notebooks' }]
  },
  {
    name: 'Home Office',
    iconKey: 'printer',
    items: [
      { name: 'Printers' },
      { name: 'Label Printers' },
      { name: 'Document Scanners' },
      { name: 'Laminators' },
      { name: 'Projectors', slug: 'projectors' }
    ]
  },
  {
    name: 'Charging & Power',
    iconKey: 'power',
    items: [
      { name: 'Power Banks', slug: 'power-banks' },
      { name: 'Charging Stations', slug: 'charging-stations' },
      { name: 'USB Chargers', slug: 'usb-chargers' },
      { name: 'Wireless Chargers', slug: 'wireless-chargers' },
      { name: 'Portable Power Stations', slug: 'portable-power-stations' }
    ]
  },
  {
    name: 'Car Electronics',
    iconKey: 'car',
    items: [
      { name: 'Dash Cams' },
      { name: 'GPS Units' },
      { name: 'Tire Inflators' },
      { name: 'Jump Starters' },
      { name: 'OBD-II Scanners' },
      { name: 'Car Chargers' }
    ]
  },
  {
    name: 'Home Electronics',
    iconKey: 'home-electronics',
    items: [
      { name: 'Air Purifiers', slug: 'air-purifiers' },
      { name: 'Humidifiers', slug: 'humidifiers' },
      { name: 'Dehumidifiers', slug: 'dehumidifiers' },
      { name: 'Robot Vacuums', slug: 'robot-vacuums' },
      { name: 'Cordless Vacuums', slug: 'cordless-vacuums' }
    ]
  }
];
