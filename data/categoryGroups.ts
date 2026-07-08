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
  icon: string;
  items: CategoryGroupItem[];
};

export const categoryGroups: CategoryGroup[] = [
  {
    name: 'TV & Home Entertainment',
    icon: '📺',
    items: [
      { name: 'Smart TVs' },
      { name: 'Streaming Devices' },
      { name: 'Soundbars' },
      { name: 'Projectors' },
      { name: 'TV Mounts' },
      { name: 'Blu-ray Players' }
    ]
  },
  {
    name: 'Audio',
    icon: '🎧',
    items: [
      { name: 'Bluetooth Speakers' },
      { name: 'Wireless Earbuds' },
      { name: 'Noise-Canceling Headphones', slug: 'headphones' },
      { name: 'Soundbars' },
      { name: 'Home Speakers' }
    ]
  },
  {
    name: 'Wearables',
    icon: '⌚',
    items: [{ name: 'Smartwatches' }, { name: 'Fitness Trackers' }, { name: 'GPS Watches' }, { name: 'Smart Rings' }]
  },
  {
    name: 'Smart Home',
    icon: '🏡',
    items: [
      { name: 'Video Doorbells' },
      { name: 'Security Cameras' },
      { name: 'Smart Locks' },
      { name: 'Smart Thermostats' },
      { name: 'Smart Plugs' },
      { name: 'Smart Lights' },
      { name: 'Smart Displays' }
    ]
  },
  {
    name: 'Cameras',
    icon: '📷',
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
    icon: '📱',
    items: [{ name: 'Tablets' }, { name: 'E-Readers' }, { name: 'Digital Notebooks' }]
  },
  {
    name: 'Home Office',
    icon: '🖨️',
    items: [
      { name: 'Printers' },
      { name: 'Label Printers' },
      { name: 'Document Scanners' },
      { name: 'Laminators' },
      { name: 'Projectors' }
    ]
  },
  {
    name: 'Charging & Power',
    icon: '🔋',
    items: [
      { name: 'Power Banks' },
      { name: 'Charging Stations' },
      { name: 'USB Chargers' },
      { name: 'Wireless Chargers' },
      { name: 'Portable Power Stations' }
    ]
  },
  {
    name: 'Car Electronics',
    icon: '🚗',
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
    icon: '🏠',
    items: [
      { name: 'Air Purifiers' },
      { name: 'Humidifiers' },
      { name: 'Dehumidifiers' },
      { name: 'Robot Vacuums' },
      { name: 'Cordless Vacuums' }
    ]
  }
];
