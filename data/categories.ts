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
  },
  {
    slug: 'projectors',
    name: 'Projector',
    pluralName: 'Projectors',
    description:
      'Home projectors compared spec-for-spec \u2014 real brightness, light source, throw ratio, contrast, HDR support and lens shift \u2014 so you know exactly which one to buy.',
    specFields: [
      { key: 'resolution', label: 'Resolution', betterDirection: 'none' },
      { key: 'brightnessLumens', label: 'Brightness', betterDirection: 'none' },
      { key: 'lightSource', label: 'Light Source', betterDirection: 'none' },
      { key: 'throwRatio', label: 'Throw Ratio', betterDirection: 'none' },
      { key: 'contrastRatio', label: 'Contrast Ratio', betterDirection: 'none' },
      { key: 'hdrFormats', label: 'HDR Formats', betterDirection: 'none' },
      { key: 'refreshRate', label: 'Refresh Rate & Input Lag', betterDirection: 'none' },
      { key: 'smartPlatform', label: 'Smart Platform', betterDirection: 'none' },
      { key: 'speakers', label: 'Built-in Speakers', betterDirection: 'none' },
      { key: 'lensShift', label: 'Lens Shift', betterDirection: 'none' },
      { key: 'keystone', label: 'Auto Setup', betterDirection: 'none' },
      { key: 'lightSourceLifeHours', label: 'Light Source Life', unit: 'hrs', betterDirection: 'higher' }
    ],
    scoreDimensions: [
      { key: 'picture', label: 'Picture Quality', description: 'Detail, contrast and overall image once properly set up' },
      { key: 'brightness', label: 'Brightness', description: 'Usable light output, and how much ambient light it tolerates' },
      { key: 'color', label: 'Color', description: 'Colour gamut coverage and accuracy out of the box' },
      { key: 'gaming', label: 'Gaming', description: 'Refresh rate, input lag, VRR and ALLM support' },
      { key: 'smartPlatform', label: 'Smart Platform', description: 'Built-in apps, licensed streaming services and how responsive the interface is' },
      { key: 'sound', label: 'Built-in Sound', description: 'Onboard speaker power and whether you can live without external audio' },
      { key: 'setup', label: 'Setup & Placement', description: 'Lens shift, zoom, auto keystone and how forgiving placement is' },
      { key: 'value', label: 'Value', description: 'Performance and features relative to price' }
    ],
    filters: [
      { slug: 'under-600', label: 'Under $600', kind: 'price-max', value: 600 },
      { slug: 'under-1600', label: 'Under $1,600', kind: 'price-max', value: 1600 },
      { slug: 'under-3000', label: 'Under $3,000', kind: 'price-max', value: 3000 },
      { slug: 'under-8000', label: 'Under $8,000', kind: 'price-max', value: 8000 },
      { slug: 'home-theater', label: 'Home Theater', kind: 'use-case' },
      { slug: 'gaming', label: 'Gaming', kind: 'use-case' },
      { slug: 'portable', label: 'Portable', kind: 'use-case' },
      { slug: 'ultra-short-throw', label: 'Ultra Short Throw', kind: 'use-case' },
      { slug: 'outdoor', label: 'Outdoor', kind: 'use-case' }
    ]
  },
  {
    slug: 'tv-mounts',
    name: 'TV Mount',
    pluralName: 'TV Mounts',
    description:
      'TV wall mounts compared spec-for-spec \u2014 weight capacity, VESA pattern, tilt and swivel range, extension and stud spacing \u2014 so you know exactly which one fits your TV.',
    specFields: [
      { key: 'mountType', label: 'Mount Type', betterDirection: 'none' },
      { key: 'screenSizeRange', label: 'Screen Size Range', betterDirection: 'none' },
      { key: 'maxWeightCapacity', label: 'Max Weight Capacity', unit: 'lbs', betterDirection: 'higher' },
      { key: 'vesaMax', label: 'Max VESA Pattern', betterDirection: 'none' },
      { key: 'tiltRange', label: 'Tilt Range', betterDirection: 'none' },
      { key: 'swivelRange', label: 'Swivel Range', betterDirection: 'none' },
      { key: 'extensionRange', label: 'Extension from Wall', betterDirection: 'none' },
      { key: 'profileDepth', label: 'Profile Depth', betterDirection: 'none' },
      { key: 'studSpacing', label: 'Stud Spacing', betterDirection: 'none' },
      { key: 'levelAdjustment', label: 'Post-Install Levelling', betterDirection: 'none' },
      { key: 'cableManagement', label: 'Cable Management', betterDirection: 'none' }
    ],
    scoreDimensions: [
      { key: 'stability', label: 'Stability & Capacity', description: 'Weight rating, certification and how solidly it holds a large TV' },
      { key: 'adjustability', label: 'Adjustability', description: 'Tilt, swivel and extension range once the TV is on the wall' },
      { key: 'installation', label: 'Installation', description: 'Templates, hardware organisation and how straightforward a single-person install is' },
      { key: 'buildQuality', label: 'Build Quality', description: 'Materials, finish and certification' },
      { key: 'cableManagement', label: 'Cable Management', description: 'Built-in routing and how easy it is to reach ports afterwards' },
      { key: 'lowProfile', label: 'Low Profile', description: 'How close to the wall the TV sits when flush' },
      { key: 'sizeRange', label: 'TV Compatibility', description: 'Breadth of screen sizes and VESA patterns supported' },
      { key: 'value', label: 'Value', description: 'Capability and build relative to price' }
    ],
    filters: [
      { slug: 'under-40', label: 'Under $40', kind: 'price-max', value: 40 },
      { slug: 'under-70', label: 'Under $70', kind: 'price-max', value: 70 },
      { slug: 'under-150', label: 'Under $150', kind: 'price-max', value: 150 },
      { slug: 'under-450', label: 'Under $450', kind: 'price-max', value: 450 },
      { slug: 'fixed', label: 'Fixed', kind: 'use-case' },
      { slug: 'tilting', label: 'Tilting', kind: 'use-case' },
      { slug: 'full-motion', label: 'Full Motion', kind: 'use-case' },
      { slug: 'above-fireplace', label: 'Above a Fireplace', kind: 'use-case' },
      { slug: 'large-tv', label: 'Large TVs', kind: 'use-case' }
    ]
  },
  {
    slug: 'blu-ray-players',
    name: 'Blu-ray Player',
    pluralName: 'Blu-ray Players',
    description:
      '4K UHD and Blu-ray players compared spec-for-spec \u2014 disc format support, Dolby Vision and HDR10+, audio outputs and upscaling \u2014 so you know exactly which one to buy.',
    specFields: [
      { key: 'discFormats', label: 'Disc Formats', betterDirection: 'none' },
      { key: 'hdrFormats', label: 'HDR Formats', betterDirection: 'none' },
      { key: 'dolbyVision', label: 'Dolby Vision', betterDirection: 'none' },
      { key: 'sacd', label: 'SACD Playback', betterDirection: 'none' },
      { key: 'audioFormats', label: 'Audio Formats', betterDirection: 'none' },
      { key: 'hdmiOutputs', label: 'HDMI Outputs', betterDirection: 'none' },
      { key: 'analogOutputs', label: 'Analog Outputs', betterDirection: 'none' },
      { key: 'streamingApps', label: 'Streaming Apps', betterDirection: 'none' },
      { key: 'upscaling', label: 'Upscaling & Processing', betterDirection: 'none' },
      { key: 'ethernet', label: 'Network', betterDirection: 'none' },
      { key: 'regionFree', label: 'Region Free', betterDirection: 'none' }
    ],
    scoreDimensions: [
      { key: 'picture', label: 'Picture Quality', description: 'Disc playback quality and HDR handling' },
      { key: 'audio', label: 'Audio Quality', description: 'DAC quality, analog output stage and bitstream support' },
      { key: 'discSupport', label: 'Disc Format Support', description: 'How many disc formats it actually plays, including SACD and DVD-Audio' },
      { key: 'buildQuality', label: 'Build Quality', description: 'Chassis rigidity, drive mechanism and finish' },
      { key: 'connectivity', label: 'Connectivity', description: 'HDMI outputs, analog outputs and network options' },
      { key: 'features', label: 'Features', description: 'Streaming apps, tone mapping controls and network playback' },
      { key: 'upscaling', label: 'Upscaling', description: 'How well it improves DVD and Blu-ray on a 4K display' },
      { key: 'value', label: 'Value', description: 'Performance and features relative to price' }
    ],
    filters: [
      { slug: 'under-200', label: 'Under $200', kind: 'price-max', value: 200 },
      { slug: 'under-400', label: 'Under $400', kind: 'price-max', value: 400 },
      { slug: 'under-1300', label: 'Under $1,300', kind: 'price-max', value: 1300 },
      { slug: 'under-3500', label: 'Under $3,500', kind: 'price-max', value: 3500 },
      { slug: 'budget', label: 'Budget', kind: 'use-case' },
      { slug: '4k-uhd', label: '4K UHD', kind: 'use-case' },
      { slug: 'home-theater', label: 'Home Theater', kind: 'use-case' },
      { slug: 'audiophile', label: 'Audiophile', kind: 'use-case' }
    ]
  },
  {
    slug: 'power-banks',
    name: 'Power Bank',
    pluralName: 'Power Banks',
    description:
      'Portable power banks compared spec-for-spec \u2014 real capacity in watt-hours, output wattage, ports, pass-through charging and airline compliance \u2014 so you know exactly which one to buy.',
    specFields: [
      { key: 'capacityMah', label: 'Capacity', unit: 'mAh', betterDirection: 'higher' },
      { key: 'capacityWh', label: 'Capacity', unit: 'Wh', betterDirection: 'higher' },
      { key: 'maxOutputWatts', label: 'Max Output', unit: 'W', betterDirection: 'higher' },
      { key: 'portCount', label: 'Ports', betterDirection: 'none' },
      { key: 'builtInCable', label: 'Built-in Cable', betterDirection: 'none' },
      { key: 'passThrough', label: 'Pass-Through Charging', betterDirection: 'none' },
      { key: 'displayType', label: 'Display', betterDirection: 'none' },
      { key: 'weight', label: 'Weight', unit: 'g', betterDirection: 'lower' },
      { key: 'rechargeTimeMin', label: 'Recharge Time', betterDirection: 'none' },
      { key: 'airlineSafe', label: 'Airline Carry-On Safe', betterDirection: 'none' },
      { key: 'magsafe', label: 'Magnetic Wireless', betterDirection: 'none' }
    ],
    scoreDimensions: [
      { key: 'capacity', label: 'Capacity', description: 'How many full phone or laptop charges it actually delivers' },
      { key: 'chargingSpeed', label: 'Charging Speed', description: 'Output wattage and how fast it refills your devices' },
      { key: 'portability', label: 'Portability', description: 'Weight and size relative to the capacity you get' },
      { key: 'buildQuality', label: 'Build Quality', description: 'Materials, finish and how well it survives a bag' },
      { key: 'display', label: 'Display', description: 'How clearly it tells you what charge is left' },
      { key: 'features', label: 'Features', description: 'Pass-through, built-in cables, app control and extras' },
      { key: 'versatility', label: 'Versatility', description: 'Range of devices it can usefully charge, from earbuds to laptops' },
      { key: 'value', label: 'Value', description: 'Capacity and output relative to price' }
    ],
    filters: [
      { slug: 'under-35', label: 'Under $35', kind: 'price-max', value: 35 },
      { slug: 'under-80', label: 'Under $80', kind: 'price-max', value: 80 },
      { slug: 'under-150', label: 'Under $150', kind: 'price-max', value: 150 },
      { slug: 'under-250', label: 'Under $250', kind: 'price-max', value: 250 },
      { slug: 'everyday', label: 'Everyday Carry', kind: 'use-case' },
      { slug: 'travel', label: 'Travel', kind: 'use-case' },
      { slug: 'laptop', label: 'Laptop Charging', kind: 'use-case' },
      { slug: 'magsafe', label: 'Magnetic / MagSafe', kind: 'use-case' },
      { slug: 'airline', label: 'Airline Approved', kind: 'use-case' }
    ]
  },
  {
    slug: 'portable-power-stations',
    name: 'Portable Power Station',
    pluralName: 'Portable Power Stations',
    description:
      'Portable power stations compared spec-for-spec \u2014 usable capacity, real AC output, battery chemistry, cycle life, solar input and expandability \u2014 so you know exactly which one to buy.',
    specFields: [
      { key: 'capacityWh', label: 'Capacity', unit: 'Wh', betterDirection: 'higher' },
      { key: 'acOutputWatts', label: 'AC Output', unit: 'W', betterDirection: 'higher' },
      { key: 'surgeWatts', label: 'Surge Output', betterDirection: 'none' },
      { key: 'batteryChemistry', label: 'Battery Chemistry', betterDirection: 'none' },
      { key: 'cycleLife', label: 'Cycle Life', betterDirection: 'none' },
      { key: 'acOutlets', label: 'AC Outlets', betterDirection: 'none' },
      { key: 'portCount', label: 'Other Ports', betterDirection: 'none' },
      { key: 'solarInputWatts', label: 'Max Solar Input', betterDirection: 'none' },
      { key: 'rechargeTimeMin', label: 'AC Recharge Time', betterDirection: 'none' },
      { key: 'weight', label: 'Weight', unit: 'lbs', betterDirection: 'lower' },
      { key: 'expandable', label: 'Expandable', betterDirection: 'none' },
      { key: 'ups', label: 'UPS Switchover', betterDirection: 'none' },
      { key: 'appControl', label: 'App Control', betterDirection: 'none' }
    ],
    scoreDimensions: [
      { key: 'capacity', label: 'Capacity', description: 'Usable watt-hours and how long it runs real appliances' },
      { key: 'outputPower', label: 'Output Power', description: 'Continuous AC output and whether the surge rating is genuine' },
      { key: 'recharging', label: 'Recharge Speed', description: 'How quickly it refills from mains power' },
      { key: 'solar', label: 'Solar Input', description: 'Maximum solar input and how practical off-grid recharging is' },
      { key: 'portability', label: 'Portability', description: 'Weight and handling relative to capacity' },
      { key: 'expandability', label: 'Expandability', description: 'Whether extra battery packs can be added, and how far it scales' },
      { key: 'features', label: 'Features', description: 'UPS switchover, app control, port variety and extras' },
      { key: 'value', label: 'Value', description: 'Capacity and output relative to price' }
    ],
    filters: [
      { slug: 'under-300', label: 'Under $300', kind: 'price-max', value: 300 },
      { slug: 'under-900', label: 'Under $900', kind: 'price-max', value: 900 },
      { slug: 'under-2000', label: 'Under $2,000', kind: 'price-max', value: 2000 },
      { slug: 'under-5000', label: 'Under $5,000', kind: 'price-max', value: 5000 },
      { slug: 'camping', label: 'Camping', kind: 'use-case' },
      { slug: 'home-backup', label: 'Home Backup', kind: 'use-case' },
      { slug: 'van-life', label: 'Van Life & RV', kind: 'use-case' },
      { slug: 'cpap', label: 'CPAP & Medical', kind: 'use-case' },
      { slug: 'off-grid', label: 'Off Grid', kind: 'use-case' }
    ]
  },
  {
    slug: 'usb-chargers',
    name: 'USB Charger',
    pluralName: 'USB Chargers',
    description:
      'USB wall chargers compared spec-for-spec \u2014 total output, single-port wattage, GaN, PPS support and what actually happens to each port when several devices are plugged in.',
    specFields: [
      { key: 'maxOutputWatts', label: 'Max Total Output', unit: 'W', betterDirection: 'higher' },
      { key: 'singlePortMaxWatts', label: 'Single-Port Max', betterDirection: 'none' },
      { key: 'portCount', label: 'Ports', betterDirection: 'none' },
      { key: 'gan', label: 'GaN', betterDirection: 'none' },
      { key: 'pdVersion', label: 'USB-PD & PPS', betterDirection: 'none' },
      { key: 'foldablePlug', label: 'Foldable Prongs', betterDirection: 'none' },
      { key: 'dimensions', label: 'Dimensions', betterDirection: 'none' },
      { key: 'weight', label: 'Weight', unit: 'g', betterDirection: 'lower' },
      { key: 'laptopCapable', label: 'Laptop Charging', betterDirection: 'none' },
      { key: 'powerSharing', label: 'Power Sharing', betterDirection: 'none' },
      { key: 'displayType', label: 'Display', betterDirection: 'none' }
    ],
    scoreDimensions: [
      { key: 'outputPower', label: 'Output Power', description: 'Total wattage and single-port maximum' },
      { key: 'portCount', label: 'Ports', description: 'How many devices it can charge at once' },
      { key: 'powerSharing', label: 'Power Sharing', description: 'How well it holds wattage when several ports are in use \u2014 the spec buyers most often get caught by' },
      { key: 'portability', label: 'Portability', description: 'Size, weight and whether the prongs fold' },
      { key: 'buildQuality', label: 'Build Quality', description: 'Materials, heat handling and warranty' },
      { key: 'features', label: 'Features', description: 'Displays, protocol support and extras' },
      { key: 'compatibility', label: 'Compatibility', description: 'PPS, PD version and support for Samsung, Pixel and Apple fast charging' },
      { key: 'value', label: 'Value', description: 'Watts and ports relative to price' }
    ],
    filters: [
      { slug: 'under-25', label: 'Under $25', kind: 'price-max', value: 25 },
      { slug: 'under-50', label: 'Under $50', kind: 'price-max', value: 50 },
      { slug: 'under-90', label: 'Under $90', kind: 'price-max', value: 90 },
      { slug: 'under-130', label: 'Under $130', kind: 'price-max', value: 130 },
      { slug: 'compact', label: 'Compact', kind: 'use-case' },
      { slug: 'travel', label: 'Travel', kind: 'use-case' },
      { slug: 'laptop', label: 'Laptop Charging', kind: 'use-case' },
      { slug: 'multi-device', label: 'Multiple Devices', kind: 'use-case' }
    ]
  },
  {
    slug: 'wireless-chargers',
    name: 'Wireless Charger',
    pluralName: 'Wireless Chargers',
    description:
      'Wireless chargers compared spec-for-spec \u2014 the real Qi standard, actual wattage, which devices they charge, and whether a power adapter is included \u2014 so you know exactly which one to buy.',
    specFields: [
      { key: 'chargerType', label: 'Type', betterDirection: 'none' },
      { key: 'qiStandard', label: 'Qi Standard', betterDirection: 'none' },
      { key: 'maxPhoneWatts', label: 'Max Phone Output', unit: 'W', betterDirection: 'higher' },
      { key: 'devicesCharged', label: 'Devices Charged', betterDirection: 'none' },
      { key: 'appleWatchCharging', label: 'Apple Watch Charging', betterDirection: 'none' },
      { key: 'magnetic', label: 'Magnetic Alignment', betterDirection: 'none' },
      { key: 'adapterIncluded', label: 'Power Adapter Included', betterDirection: 'none' },
      { key: 'cableAttached', label: 'Cable', betterDirection: 'none' },
      { key: 'foldable', label: 'Foldable', betterDirection: 'none' },
      { key: 'cooling', label: 'Cooling', betterDirection: 'none' },
      { key: 'weight', label: 'Weight', unit: 'g', betterDirection: 'lower' }
    ],
    scoreDimensions: [
      { key: 'chargingSpeed', label: 'Charging Speed', description: 'Real wireless wattage and which Qi standard it is certified to' },
      { key: 'deviceSupport', label: 'Device Support', description: 'How many devices it charges, and whether the watch charges fast' },
      { key: 'buildQuality', label: 'Build Quality', description: 'Materials, finish and durability' },
      { key: 'cooling', label: 'Cooling', description: 'Whether it sustains full wattage or throttles under load' },
      { key: 'portability', label: 'Portability', description: 'Weight, folding design and travel practicality' },
      { key: 'features', label: 'Features', description: 'Kickstands, adapters included, international plugs and extras' },
      { key: 'design', label: 'Design', description: 'How it looks on a desk or nightstand' },
      { key: 'value', label: 'Value', description: 'Speed and device support relative to price, including any adapter you must buy separately' }
    ],
    filters: [
      { slug: 'under-35', label: 'Under $35', kind: 'price-max', value: 35 },
      { slug: 'under-80', label: 'Under $80', kind: 'price-max', value: 80 },
      { slug: 'under-160', label: 'Under $160', kind: 'price-max', value: 160 },
      { slug: 'desk', label: 'Desk', kind: 'use-case' },
      { slug: 'bedside', label: 'Bedside', kind: 'use-case' },
      { slug: 'travel', label: 'Travel', kind: 'use-case' },
      { slug: 'multi-device', label: 'Multiple Devices', kind: 'use-case' },
      { slug: 'apple-ecosystem', label: 'Apple Ecosystem', kind: 'use-case' }
    ]
  },
  {
    slug: 'charging-stations',
    name: 'Charging Station',
    pluralName: 'Charging Stations',
    description:
      'Desktop charging stations compared spec-for-spec \u2014 total output, port mix, AC outlets, surge protection and how the wattage actually splits across ports \u2014 so you know exactly which one to buy.',
    specFields: [
      { key: 'stationType', label: 'Type', betterDirection: 'none' },
      { key: 'maxOutputWatts', label: 'Max Total Output', betterDirection: 'none' },
      { key: 'usbcPorts', label: 'USB-C Ports', unit: 'ports', betterDirection: 'higher' },
      { key: 'usbaPorts', label: 'USB-A Ports', unit: 'ports', betterDirection: 'higher' },
      { key: 'acOutlets', label: 'AC Outlets', betterDirection: 'none' },
      { key: 'wirelessPad', label: 'Wireless Pad', betterDirection: 'none' },
      { key: 'deviceCapacity', label: 'Devices at Once', unit: 'devices', betterDirection: 'higher' },
      { key: 'appleWatchCharging', label: 'Apple Watch Charging', betterDirection: 'none' },
      { key: 'cablesIncluded', label: 'Cables Included', betterDirection: 'none' },
      { key: 'surgeProtection', label: 'Surge Protection', betterDirection: 'none' },
      { key: 'powerSharing', label: 'Power Sharing', betterDirection: 'none' },
      { key: 'displayType', label: 'Display', betterDirection: 'none' }
    ],
    scoreDimensions: [
      { key: 'outputPower', label: 'Output Power', description: 'Total wattage and single-port maximum' },
      { key: 'portVariety', label: 'Port Variety', description: 'Mix of USB-C, USB-A and AC outlets' },
      { key: 'powerSharing', label: 'Power Sharing', description: 'How much of the headline wattage survives when several devices are attached' },
      { key: 'buildQuality', label: 'Build Quality', description: 'Materials, heat handling and warranty' },
      { key: 'cableManagement', label: 'Cable Management', description: 'Built-in, retractable or included cables, and how tidy the result is' },
      { key: 'features', label: 'Features', description: 'Displays, surge protection, wireless pads and extras' },
      { key: 'design', label: 'Design', description: 'Footprint and how it looks on a desk or nightstand' },
      { key: 'value', label: 'Value', description: 'Ports and wattage relative to price' }
    ],
    filters: [
      { slug: 'under-40', label: 'Under $40', kind: 'price-max', value: 40 },
      { slug: 'under-90', label: 'Under $90', kind: 'price-max', value: 90 },
      { slug: 'under-160', label: 'Under $160', kind: 'price-max', value: 160 },
      { slug: 'under-260', label: 'Under $260', kind: 'price-max', value: 260 },
      { slug: 'desk', label: 'Desk', kind: 'use-case' },
      { slug: 'bedside', label: 'Bedside', kind: 'use-case' },
      { slug: 'travel', label: 'Travel', kind: 'use-case' },
      { slug: 'laptop', label: 'Laptop Charging', kind: 'use-case' },
      { slug: 'multi-device', label: 'Multiple Devices', kind: 'use-case' }
    ]
  }
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
