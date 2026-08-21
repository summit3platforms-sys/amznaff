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
      'Flagship and mid-range OLED, QLED, and Mini-LED TVs compared spec-for-spec — panel technology, peak brightness, refresh rate, gaming features, and smart platform — so you know exactly which one to buy.',
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
  },
  {
    slug: 'streaming-devices',
    name: 'Streaming Device',
    pluralName: 'Streaming Devices',
    description:
      'Streaming sticks and boxes compared spec-for-spec \u2014 4K and HDR support, Dolby Vision and Atmos, processor, storage, Wi-Fi and remote features \u2014 so you know exactly which one to buy.',
    specFields: [
      { key: 'maxResolution', label: 'Max Resolution', betterDirection: 'none' },
      { key: 'hdrFormats', label: 'HDR Formats', betterDirection: 'none' },
      { key: 'dolbyVision', label: 'Dolby Vision', betterDirection: 'none' },
      { key: 'dolbyAtmos', label: 'Dolby Atmos', betterDirection: 'none' },
      { key: 'processor', label: 'Processor', betterDirection: 'none' },
      { key: 'ram', label: 'RAM', unit: 'GB', betterDirection: 'higher' },
      { key: 'storage', label: 'Storage', unit: 'GB', betterDirection: 'higher' },
      { key: 'wifi', label: 'Wi-Fi', betterDirection: 'none' },
      { key: 'ethernet', label: 'Ethernet', betterDirection: 'none' },
      { key: 'bluetooth', label: 'Bluetooth', betterDirection: 'none' },
      { key: 'smartPlatform', label: 'Operating System', betterDirection: 'none' },
      { key: 'remoteFeatures', label: 'Remote', betterDirection: 'none' }
    ],
    scoreDimensions: [
      { key: 'performance', label: 'Speed & Performance', description: 'Processor, RAM, and how quickly menus and apps respond' },
      { key: 'video', label: 'Video Quality', description: 'Maximum resolution and which HDR formats are supported' },
      { key: 'audio', label: 'Audio Support', description: 'Dolby Atmos and DTS handling, and whether audio is decoded or only passed through' },
      { key: 'platform', label: 'Platform & Apps', description: 'Operating system, app catalogue, and how advertising-led the interface is' },
      { key: 'connectivity', label: 'Connectivity', description: 'Wi-Fi standard, ethernet, Bluetooth, and expansion ports' },
      { key: 'remote', label: 'Remote', description: 'Voice control, backlighting, rechargeability, and remote-finder features' },
      { key: 'smartHome', label: 'Smart Home', description: 'Matter, Thread, and built-in voice assistant capability' },
      { key: 'value', label: 'Value', description: 'Features and performance relative to price' }
    ],
    filters: [
      { slug: 'under-40', label: 'Under $40', kind: 'price-max', value: 40 },
      { slug: 'under-60', label: 'Under $60', kind: 'price-max', value: 60 },
      { slug: 'under-100', label: 'Under $100', kind: 'price-max', value: 100 },
      { slug: 'under-200', label: 'Under $200', kind: 'price-max', value: 200 },
      { slug: '4k-hdr', label: '4K HDR', kind: 'use-case' },
      { slug: 'budget', label: 'Budget', kind: 'use-case' },
      { slug: 'travel', label: 'Travel', kind: 'use-case' },
      { slug: 'gaming', label: 'Gaming', kind: 'use-case' },
      { slug: 'home-theater', label: 'Home Theater', kind: 'use-case' },
      { slug: 'smart-home', label: 'Smart Home', kind: 'use-case' }
    ]
  },
  {
    slug: 'soundbars',
    name: 'Soundbar',
    pluralName: 'Soundbars',
    description:
      'Soundbars compared spec-for-spec \u2014 channel layout, Dolby Atmos and DTS:X support, HDMI passthrough, subwoofer and rear-speaker options \u2014 so you know exactly which one to buy for your TV.',
    specFields: [
      { key: 'channels', label: 'Channels', betterDirection: 'none' },
      { key: 'totalPowerWatts', label: 'Total Power', unit: 'W', betterDirection: 'higher' },
      { key: 'subwoofer', label: 'Subwoofer', betterDirection: 'none' },
      { key: 'rearSpeakers', label: 'Rear Speakers', betterDirection: 'none' },
      { key: 'dolbyAtmos', label: 'Dolby Atmos', betterDirection: 'none' },
      { key: 'dtsX', label: 'DTS:X', betterDirection: 'none' },
      { key: 'hdmiPorts', label: 'HDMI Ports', unit: 'ports', betterDirection: 'higher' },
      { key: 'hdmiPassthrough', label: 'HDMI Passthrough', betterDirection: 'none' },
      { key: 'eArc', label: 'eARC', betterDirection: 'none' },
      { key: 'wifi', label: 'Wi-Fi & Streaming', betterDirection: 'none' },
      { key: 'bluetooth', label: 'Bluetooth', betterDirection: 'none' },
      { key: 'voiceAssistant', label: 'Voice Assistant', betterDirection: 'none' }
    ],
    scoreDimensions: [
      { key: 'sound', label: 'Sound Quality', description: 'Overall tonal balance, clarity and detail' },
      { key: 'bass', label: 'Bass', description: 'Low-end weight and extension, with or without a separate subwoofer' },
      { key: 'dialogue', label: 'Dialogue Clarity', description: 'How well speech cuts through a busy soundtrack' },
      { key: 'surround', label: 'Surround & Height', description: 'Dolby Atmos height effect and how convincingly it places surround audio' },
      { key: 'connectivity', label: 'Connectivity', description: 'HDMI inputs and passthrough, eARC, Wi-Fi and streaming protocol support' },
      { key: 'features', label: 'Features', description: 'Room calibration, TV-brand integration, app control and expandability' },
      { key: 'design', label: 'Design & Build', description: 'Finish, size relative to a TV, and how well it fits a living room' },
      { key: 'value', label: 'Value', description: 'Performance and features relative to price' }
    ],
    filters: [
      { slug: 'under-200', label: 'Under $200', kind: 'price-max', value: 200 },
      { slug: 'under-500', label: 'Under $500', kind: 'price-max', value: 500 },
      { slug: 'under-1000', label: 'Under $1,000', kind: 'price-max', value: 1000 },
      { slug: 'under-2000', label: 'Under $2,000', kind: 'price-max', value: 2000 },
      { slug: 'dolby-atmos', label: 'Dolby Atmos', kind: 'use-case' },
      { slug: 'gaming', label: 'Gaming', kind: 'use-case' },
      { slug: 'home-theater', label: 'Home Theater', kind: 'use-case' },
      { slug: 'tv-upgrade', label: 'TV Sound Upgrade', kind: 'use-case' },
      { slug: 'compact', label: 'Small Rooms', kind: 'use-case' }
    ]
  },
  {
    slug: 'wireless-earbuds',
    name: 'Wireless Earbuds',
    pluralName: 'Wireless Earbuds',
    description:
      'True wireless earbuds compared spec-for-spec \u2014 battery life, noise cancelling, codecs, water resistance and call quality \u2014 so you know exactly which pair to buy.',
    specFields: [
      { key: 'batteryBuds', label: 'Battery (ANC on)', unit: 'hrs', betterDirection: 'higher' },
      { key: 'batteryTotal', label: 'Battery with Case', unit: 'hrs', betterDirection: 'higher' },
      { key: 'anc', label: 'Active Noise Cancelling', betterDirection: 'none' },
      { key: 'driverSize', label: 'Driver Size', unit: 'mm', betterDirection: 'none' },
      { key: 'bluetooth', label: 'Bluetooth', betterDirection: 'none' },
      { key: 'multipoint', label: 'Multipoint', betterDirection: 'none' },
      { key: 'waterResistance', label: 'Water Resistance', betterDirection: 'none' },
      { key: 'wirelessCharging', label: 'Wireless Charging', betterDirection: 'none' },
      { key: 'weightPerBud', label: 'Weight per Bud', unit: 'g', betterDirection: 'lower' },
      { key: 'codecs', label: 'Codecs', betterDirection: 'none' },
      { key: 'spatialAudio', label: 'Spatial Audio', betterDirection: 'none' },
      { key: 'appEq', label: 'App EQ', betterDirection: 'none' }
    ],
    scoreDimensions: [
      { key: 'sound', label: 'Sound Quality', description: 'Tuning, detail and codec support' },
      { key: 'anc', label: 'Noise Cancelling', description: 'How much ambient noise is actually removed' },
      { key: 'battery', label: 'Battery', description: 'Playtime in the buds and total runtime with the case' },
      { key: 'comfort', label: 'Comfort & Fit', description: 'Weight, fit options and how they feel over long sessions' },
      { key: 'calls', label: 'Call Quality', description: 'Microphone performance and background noise rejection' },
      { key: 'features', label: 'Features', description: 'App depth, spatial audio, multipoint and extras' },
      { key: 'durability', label: 'Durability', description: 'IP rating, build materials and case robustness' },
      { key: 'value', label: 'Value', description: 'Features and performance relative to price' }
    ],
    filters: [
      { slug: 'under-80', label: 'Under $80', kind: 'price-max', value: 80 },
      { slug: 'under-150', label: 'Under $150', kind: 'price-max', value: 150 },
      { slug: 'under-250', label: 'Under $250', kind: 'price-max', value: 250 },
      { slug: 'under-350', label: 'Under $350', kind: 'price-max', value: 350 },
      { slug: 'budget', label: 'Budget', kind: 'use-case' },
      { slug: 'workout', label: 'Workouts', kind: 'use-case' },
      { slug: 'commute', label: 'Commute', kind: 'use-case' },
      { slug: 'travel', label: 'Travel', kind: 'use-case' },
      { slug: 'calls', label: 'Calls', kind: 'use-case' }
    ]
  },
  {
    slug: 'bluetooth-speakers',
    name: 'Bluetooth Speaker',
    pluralName: 'Bluetooth Speakers',
    description:
      'Portable Bluetooth speakers compared spec-for-spec \u2014 battery life, waterproofing, power output, driver layout and pairing \u2014 so you know exactly which one to buy.',
    specFields: [
      { key: 'batteryLife', label: 'Battery Life', unit: 'hrs', betterDirection: 'higher' },
      { key: 'waterResistance', label: 'Water & Dust Rating', betterDirection: 'none' },
      { key: 'floats', label: 'Floats', betterDirection: 'none' },
      { key: 'powerOutput', label: 'Power Output', unit: 'W', betterDirection: 'higher' },
      { key: 'weight', label: 'Weight', unit: 'g', betterDirection: 'lower' },
      { key: 'bluetooth', label: 'Bluetooth', betterDirection: 'none' },
      { key: 'driverConfig', label: 'Drivers', betterDirection: 'none' },
      { key: 'stereoPairing', label: 'Stereo & Multi-Speaker Pairing', betterDirection: 'none' },
      { key: 'speakerphone', label: 'Speakerphone', betterDirection: 'none' },
      { key: 'appEq', label: 'App EQ', betterDirection: 'none' },
      { key: 'powerBank', label: 'Charges Your Phone', betterDirection: 'none' }
    ],
    scoreDimensions: [
      { key: 'sound', label: 'Sound Quality', description: 'Tonal balance, clarity and detail' },
      { key: 'bass', label: 'Bass', description: 'Low-end weight and extension for the size' },
      { key: 'battery', label: 'Battery', description: 'Rated playtime and how it holds up at real listening volume' },
      { key: 'durability', label: 'Durability', description: 'IP rating, drop resistance and whether it floats' },
      { key: 'portability', label: 'Portability', description: 'Weight, size and how easily it travels' },
      { key: 'loudness', label: 'Loudness', description: 'Maximum usable volume before it strains' },
      { key: 'features', label: 'Features', description: 'App EQ, multi-speaker pairing, charge-out and extras' },
      { key: 'value', label: 'Value', description: 'Performance and features relative to price' }
    ],
    filters: [
      { slug: 'under-70', label: 'Under $70', kind: 'price-max', value: 70 },
      { slug: 'under-130', label: 'Under $130', kind: 'price-max', value: 130 },
      { slug: 'under-250', label: 'Under $250', kind: 'price-max', value: 250 },
      { slug: 'under-500', label: 'Under $500', kind: 'price-max', value: 500 },
      { slug: 'portable', label: 'Portable', kind: 'use-case' },
      { slug: 'outdoor', label: 'Outdoors', kind: 'use-case' },
      { slug: 'poolside', label: 'Pool & Beach', kind: 'use-case' },
      { slug: 'party', label: 'Parties', kind: 'use-case' },
      { slug: 'home', label: 'Home Listening', kind: 'use-case' }
    ]
  },
  {
    slug: 'home-speakers',
    name: 'Home Speaker',
    pluralName: 'Home Speakers',
    description:
      'Smart and Wi-Fi home speakers compared spec-for-spec \u2014 voice assistants, multiroom systems, streaming protocols, Matter and Thread support \u2014 so you know exactly which one to buy.',
    specFields: [
      { key: 'voiceAssistant', label: 'Voice Assistant', betterDirection: 'none' },
      { key: 'drivers', label: 'Drivers', betterDirection: 'none' },
      { key: 'powerOutput', label: 'Power Output', unit: 'W', betterDirection: 'higher' },
      { key: 'wifi', label: 'Wi-Fi', betterDirection: 'none' },
      { key: 'bluetooth', label: 'Bluetooth', betterDirection: 'none' },
      { key: 'streamingProtocols', label: 'Streaming Protocols', betterDirection: 'none' },
      { key: 'multiroom', label: 'Multiroom System', betterDirection: 'none' },
      { key: 'stereoPairing', label: 'Stereo Pairing', betterDirection: 'none' },
      { key: 'smartHomeHub', label: 'Smart Home Hub', betterDirection: 'none' },
      { key: 'spatialAudio', label: 'Spatial Audio', betterDirection: 'none' },
      { key: 'lineIn', label: 'Line In', betterDirection: 'none' }
    ],
    scoreDimensions: [
      { key: 'sound', label: 'Sound Quality', description: 'Tonal balance, clarity and detail for the size' },
      { key: 'bass', label: 'Bass', description: 'Low-end weight and extension' },
      { key: 'smartFeatures', label: 'Smart Home', description: 'Matter, Thread, Zigbee and hub capability' },
      { key: 'multiroom', label: 'Multiroom', description: 'How well it groups with other speakers around the house' },
      { key: 'connectivity', label: 'Connectivity', description: 'Wi-Fi standard, Bluetooth, streaming protocols and physical inputs' },
      { key: 'design', label: 'Design & Build', description: 'Materials, finish and how it looks in a room' },
      { key: 'voiceAssistant', label: 'Voice Assistant', description: 'Which assistants are built in and how well they work' },
      { key: 'value', label: 'Value', description: 'Performance and features relative to price' }
    ],
    filters: [
      { slug: 'under-110', label: 'Under $110', kind: 'price-max', value: 110 },
      { slug: 'under-250', label: 'Under $250', kind: 'price-max', value: 250 },
      { slug: 'under-400', label: 'Under $400', kind: 'price-max', value: 400 },
      { slug: 'under-700', label: 'Under $700', kind: 'price-max', value: 700 },
      { slug: 'smart-home', label: 'Smart Home', kind: 'use-case' },
      { slug: 'multiroom', label: 'Multiroom', kind: 'use-case' },
      { slug: 'music', label: 'Music Listening', kind: 'use-case' },
      { slug: 'voice-control', label: 'Voice Control', kind: 'use-case' },
      { slug: 'home-theater', label: 'Home Theater', kind: 'use-case' },
      { slug: 'home', label: 'Home Listening', kind: 'use-case' }
    ]
  }
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
