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
  },
  {
    slug: 'video-doorbells',
    name: 'Video Doorbell',
    pluralName: 'Video Doorbells',
    description:
      'Video doorbells compared on the things that decide it: real sensor pixels behind the "2K/4K" label, head-to-toe framing, transformer voltage, battery runtime, local storage and what still works with no subscription.',
    specFields: [
      { key: 'resolution', label: 'Resolution (actual pixels)', betterDirection: 'none' },
      { key: 'aspectRatio', label: 'Aspect Ratio', betterDirection: 'none' },
      { key: 'fieldOfView', label: 'Field of View', betterDirection: 'none' },
      { key: 'powerSource', label: 'Power Source', betterDirection: 'none' },
      { key: 'transformerRequirement', label: 'Wiring / Transformer Requirement', betterDirection: 'none' },
      { key: 'batteryLife', label: 'Battery Life (claimed)', betterDirection: 'none' },
      { key: 'wifiBands', label: 'Wi-Fi Bands', betterDirection: 'none' },
      { key: 'localStorage', label: 'Local Storage', betterDirection: 'none' },
      { key: 'subscriptionFree', label: 'Works Without a Subscription', betterDirection: 'none' },
      { key: 'paywalledFeatures', label: 'Behind the Paywall', betterDirection: 'none' },
      { key: 'smartHomeSupport', label: 'Smart Home / HomeKit / Matter', betterDirection: 'none' },
      { key: 'chimeIncluded', label: 'Indoor Chime', betterDirection: 'none' }
    ],
    scoreDimensions: [
      { key: 'videoQuality', label: 'Video Quality', description: 'Real sensor resolution, frame rate, HDR and low-light behaviour — measured against the marketing label, not the label itself' },
      { key: 'coverage', label: 'Coverage & Framing', description: 'Field of view and aspect ratio: whether you actually see a visitor head-to-toe and a parcel on the mat' },
      { key: 'detection', label: 'Smart Detection', description: 'Person, package, vehicle, animal and face detection — how accurate it is and whether it runs on the device' },
      { key: 'subscriptionFreedom', label: 'Subscription Freedom', description: 'The trap dimension: what the doorbell still does after the free trial ends and you pay nothing. A 10 records, detects and plays back with no monthly fee; a 1 is a live-view intercom' },
      { key: 'installFlexibility', label: 'Installation Flexibility', description: 'Battery vs wired, how demanding the transformer requirement is, and whether it can drive your existing chime' },
      { key: 'batteryPower', label: 'Battery & Power', description: 'Runtime between charges for battery models, and how easy the power arrangement is to live with on wired ones' },
      { key: 'smartHome', label: 'Smart Home Integration', description: 'Alexa, Google Home, Apple Home/HomeKit Secure Video, Home Assistant and honest Matter support' },
      { key: 'value', label: 'Value', description: 'Hardware and capability per dollar, counting the subscription and the accessories you have to add' }
    ],
    filters: [
      { slug: 'under-60', label: 'Under $60', kind: 'price-max', value: 60 },
      { slug: 'under-120', label: 'Under $120', kind: 'price-max', value: 120 },
      { slug: 'under-200', label: 'Under $200', kind: 'price-max', value: 200 },
      { slug: 'no-subscription', label: 'No Subscription Needed', kind: 'use-case' },
      { slug: 'battery-powered', label: 'Battery Powered', kind: 'use-case' },
      { slug: 'hardwired', label: 'Hardwired', kind: 'use-case' },
      { slug: 'local-storage', label: 'Local Storage', kind: 'use-case' },
      { slug: 'apple-home', label: 'Apple Home', kind: 'use-case' },
      { slug: 'professional-monitoring', label: 'Pro Monitoring Available', kind: 'use-case' }
    ]
  },
  {
    slug: 'security-cameras',
    name: 'Security Camera',
    pluralName: 'Security Cameras',
    description:
      'Indoor and outdoor security cameras compared spec-for-spec — real sensor resolution and frame rate, colour night vision, battery claims, local storage, RTSP support, and what each does with no subscription.',
    specFields: [
      { key: 'maxResolution', label: 'Max Resolution', betterDirection: 'none' },
      { key: 'topResolutionFrameRate', label: 'Frame Rate at Top Resolution', betterDirection: 'none' },
      { key: 'fieldOfView', label: 'Field of View', betterDirection: 'none' },
      { key: 'powerSource', label: 'Power Source', betterDirection: 'none' },
      { key: 'batteryLifeClaim', label: 'Battery Life Claim', betterDirection: 'none' },
      { key: 'nightVision', label: 'Night Vision', betterDirection: 'none' },
      { key: 'weatherRating', label: 'Weather Rating', betterDirection: 'none' },
      { key: 'wifiBands', label: 'Wi-Fi / Network', betterDirection: 'none' },
      { key: 'localStorage', label: 'Local Storage', betterDirection: 'none' },
      { key: 'noSubscriptionBehaviour', label: 'With No Subscription', betterDirection: 'none' },
      { key: 'cheapestPlanMonthly', label: 'Cheapest Plan', unit: '$/mo', betterDirection: 'lower' },
      { key: 'rtspOnvif', label: 'RTSP / ONVIF / NVR', betterDirection: 'none' }
    ],
    scoreDimensions: [
      { key: 'videoQuality', label: 'Video Quality', description: 'Real sensor resolution, frame rate and bitrate at the advertised top mode — not the marketing number' },
      { key: 'nightVision', label: 'Night Vision', description: 'How usable the image is after dark, and whether colour needs the spotlight burning' },
      { key: 'subscriptionFreedom', label: 'Subscription Freedom', description: 'What the camera still does when you pay nothing — this category\'s trap dimension, because several drop to live view with no recording at all' },
      { key: 'localStorage', label: 'Local Storage', description: 'Recording that stays in your house: card slot, hub, NAS — and whether the card or hub is in the box' },
      { key: 'powerAndBattery', label: 'Power & Battery', description: 'Freedom from a power cable: battery capacity, solar top-up, and how honest the runtime claim is' },
      { key: 'installation', label: 'Installation', description: 'How much extra hardware, wiring, drilling or network work stands between the box and a working camera' },
      { key: 'openness', label: 'Openness & Smart Home', description: 'RTSP, ONVIF, NVR and NAS support plus Alexa/Google/HomeKit/Matter — whether the camera works outside its own app' },
      { key: 'value', label: 'Value', description: 'What you get for the money once the subscription, the card and the missing adapter are priced in' }
    ],
    filters: [
      { slug: 'under-50', label: 'Under $50', kind: 'price-max', value: 50 },
      { slug: 'under-100', label: 'Under $100', kind: 'price-max', value: 100 },
      { slug: 'under-200', label: 'Under $200', kind: 'price-max', value: 200 },
      { slug: 'indoor', label: 'Indoor Use', kind: 'use-case' },
      { slug: 'battery-powered', label: 'Battery Powered', kind: 'use-case' },
      { slug: 'solar-ready', label: 'Solar Ready', kind: 'use-case' },
      { slug: 'wired-power', label: 'Wired / Plug-In', kind: 'use-case' },
      { slug: 'poe-nvr', label: 'PoE & NVR Systems', kind: 'use-case' },
      { slug: 'no-subscription', label: 'No Subscription Needed', kind: 'use-case' }
    ]
  },
  {
    slug: 'smart-locks',
    name: 'Smart Lock',
    pluralName: 'Smart Locks',
    description:
      'Smart locks compared spec-for-spec — the real ANSI/BHMA grade, whether a hub or bridge is required, Apple Home Key and UWB support, battery type and what happens when it dies.',
    specFields: [
      { key: 'lockType', label: 'Lock Type', betterDirection: 'none' },
      { key: 'ansiBhmaGrade', label: 'ANSI/BHMA Grade', betterDirection: 'none' },
      { key: 'keepsExistingKeyway', label: 'Keeps Existing Keyway', betterDirection: 'none' },
      { key: 'smartRadio', label: 'Smart Radio', betterDirection: 'none' },
      { key: 'hubRequired', label: 'Hub or Bridge Required', betterDirection: 'none' },
      { key: 'appleHomeKey', label: 'Apple Home Key', betterDirection: 'none' },
      { key: 'uwbUnlock', label: 'UWB Hands-Free Unlock', betterDirection: 'none' },
      { key: 'biometrics', label: 'Biometrics', betterDirection: 'none' },
      { key: 'batteryType', label: 'Battery Type', betterDirection: 'none' },
      { key: 'batteryClaimMonths', label: 'Claimed Battery Life', unit: 'months', betterDirection: 'higher' },
      { key: 'backupAccess', label: 'Backup Power & Key Override', betterDirection: 'none' },
      { key: 'doorFit', label: 'Door Thickness / Backset', betterDirection: 'none' }
    ],
    scoreDimensions: [
      { key: 'security', label: 'Security', description: 'Published ANSI/BHMA grade, bolt and cylinder strength, and whether the lock upgrades or merely inherits the keyway already on your door' },
      { key: 'failSafeAccess', label: 'Fail-Safe Access', description: 'What happens when the battery dies, the Wi-Fi drops or the app is down — physical key, emergency power contact and offline codes. The spec buyers most often discover too late' },
      { key: 'connectivity', label: 'Connectivity', description: 'Which radios are actually inside the lock, and whether a hub or bridge is needed and included' },
      { key: 'smartHomeSupport', label: 'Smart Home Support', description: 'Matter, Thread, Apple Home Key, Alexa, Google and SmartThings breadth — and how many features you lose in each' },
      { key: 'entryMethods', label: 'Entry Methods', description: 'Keypad, fingerprint, face, NFC fobs, Apple Home Key and UWB approach unlock' },
      { key: 'batteryLife', label: 'Battery Life', description: 'Real-world runtime, cell cost and how much recharging or replacing it demands' },
      { key: 'installation', label: 'Installation & Fit', description: 'DIY difficulty, retrofit versus full replacement, and door thickness, backset and bore limits' },
      { key: 'value', label: 'Value', description: 'Security, entry methods and connectivity relative to price, including accessories you must buy separately' }
    ],
    filters: [
      { slug: 'under-100', label: 'Under $100', kind: 'price-max', value: 100 },
      { slug: 'under-175', label: 'Under $175', kind: 'price-max', value: 175 },
      { slug: 'under-275', label: 'Under $275', kind: 'price-max', value: 275 },
      { slug: 'under-400', label: 'Under $400', kind: 'price-max', value: 400 },
      { slug: 'retrofit', label: 'Retrofit / Renters', kind: 'use-case' },
      { slug: 'fingerprint', label: 'Fingerprint', kind: 'use-case' },
      { slug: 'apple-home', label: 'Apple Home Key', kind: 'use-case' },
      { slug: 'matter-thread', label: 'Matter / Thread', kind: 'use-case' },
      { slug: 'rentals', label: 'Rentals & Guests', kind: 'use-case' }
    ]
  },
  {
    slug: 'smart-thermostats',
    name: 'Smart Thermostat',
    pluralName: 'Smart Thermostats',
    description:
      'Smart thermostats compared on the specs that actually decide it — C-wire requirement, heating and cooling stages, heat-pump and accessory terminals, remote sensors, and Matter support.',
    specFields: [
      { key: 'voltageType', label: 'System Voltage', betterDirection: 'none' },
      { key: 'cWireRequired', label: 'C-Wire Required', betterDirection: 'none' },
      { key: 'cWireWorkaroundIncluded', label: 'Adapter / Power Kit Included', betterDirection: 'none' },
      { key: 'heatCoolStages', label: 'Heating & Cooling Stages', betterDirection: 'none' },
      { key: 'heatPumpSupport', label: 'Heat Pump & Aux Heat', betterDirection: 'none' },
      { key: 'accessoryTerminals', label: 'Humidifier / Ventilator Terminals', betterDirection: 'none' },
      { key: 'remoteSensors', label: 'Remote Sensors', betterDirection: 'none' },
      { key: 'occupancyDetection', label: 'Occupancy Detection', betterDirection: 'none' },
      { key: 'matterSupport', label: 'Matter Support', betterDirection: 'none' },
      { key: 'platforms', label: 'Voice & Smart Home Platforms', betterDirection: 'none' },
      { key: 'utilityPrograms', label: 'Utility Rebates & Demand Response', betterDirection: 'none' },
      { key: 'subscriptionRequired', label: 'Account or Subscription Needed', betterDirection: 'none' }
    ],
    scoreDimensions: [
      { key: 'cWireFreedom', label: 'C-Wire Freedom', description: 'How likely this thermostat is to run on the wiring you already have — whether it needs a common wire, and whether the workaround is in the box, sold separately, or an electrician\'s visit. The single biggest cause of returns in this category.' },
      { key: 'hvacCoverage', label: 'HVAC Coverage', description: 'Stages of heating and cooling, heat pump and auxiliary heat handling, and humidifier / dehumidifier / ventilator terminals' },
      { key: 'multiRoomSensing', label: 'Multi-Room Sensing', description: 'Remote sensors: included or extra, how many pair, and whether they read occupancy or only temperature' },
      { key: 'smartHomeIntegration', label: 'Smart Home Integration', description: 'Matter, Apple Home, Alexa and Google support — and how much each one actually exposes' },
      { key: 'automation', label: 'Scheduling & Learning', description: 'Learning, geofencing, away detection and how much of it works without babysitting the app' },
      { key: 'displayAndControls', label: 'Display & On-Device Control', description: 'Screen quality and how much you can do at the wall instead of in the phone app' },
      { key: 'installEase', label: 'Installation', description: 'Wiring complexity, guided setup, and how likely a DIY install is to end in a service call' },
      { key: 'value', label: 'Value', description: 'What the money buys once accessories, adapters and sensors are added in' }
    ],
    filters: [
      { slug: 'under-100', label: 'Under $100', kind: 'price-max', value: 100 },
      { slug: 'under-160', label: 'Under $160', kind: 'price-max', value: 160 },
      { slug: 'under-220', label: 'Under $220', kind: 'price-max', value: 220 },
      { slug: 'no-c-wire', label: 'Works Without a C Wire', kind: 'use-case' },
      { slug: 'heat-pump', label: 'Heat Pump', kind: 'use-case' },
      { slug: 'line-voltage', label: 'Electric Baseboard (Line Voltage)', kind: 'use-case' },
      { slug: 'multi-room', label: 'Room-by-Room Comfort', kind: 'use-case' },
      { slug: 'matter', label: 'Matter', kind: 'use-case' },
      { slug: 'budget', label: 'Budget', kind: 'use-case' }
    ]
  },
  {
    slug: 'smart-plugs',
    name: 'Smart Plug',
    pluralName: 'Smart Plugs',
    description:
      'Smart plugs compared on the specs that decide it: the real continuous amp rating, the motor/HP limit, whether energy monitoring is measured or absent, hub requirements and price per switched outlet.',
    specFields: [
      { key: 'maxLoad', label: 'Max Load', betterDirection: 'none' },
      { key: 'motorLoadRating', label: 'Motor / Inductive Rating', betterDirection: 'none' },
      { key: 'energyMonitoring', label: 'Energy Monitoring', betterDirection: 'none' },
      { key: 'protocol', label: 'Radio & Protocol', betterDirection: 'none' },
      { key: 'hubRequired', label: 'Hub Required', betterDirection: 'none' },
      { key: 'localControl', label: 'Works Without Internet', betterDirection: 'none' },
      { key: 'switchedOutlets', label: 'Switched Outlets', betterDirection: 'higher' },
      { key: 'packSize', label: 'Pack Size', betterDirection: 'none' },
      { key: 'pricePerOutlet', label: 'Price per Switched Outlet', unit: '$', betterDirection: 'lower' },
      { key: 'dimensions', label: 'Dimensions', betterDirection: 'none' },
      { key: 'outletBlocking', label: 'Blocks Second Outlet', betterDirection: 'none' },
      { key: 'weatherRating', label: 'Weather Rating', betterDirection: 'none' }
    ],
    scoreDimensions: [
      { key: 'loadHeadroom', label: 'Load Headroom', description: 'How much of the nameplate 15A you can actually use continuously, and what the plug is rated to do with motors, compressors and heaters — the spec buyers most often get caught by' },
      { key: 'energyMonitoring', label: 'Energy Monitoring', description: 'Whether power is genuinely measured, what quantities are reported, and where you can see them' },
      { key: 'ecosystem', label: 'Ecosystem Support', description: 'Matter, HomeKit, Alexa, Google, SmartThings and Home Assistant coverage' },
      { key: 'localControl', label: 'Local Control', description: 'Whether switching and schedules survive an internet outage, or depend on a vendor cloud' },
      { key: 'formFactor', label: 'Size & Fit', description: 'Whether it blocks the second outlet on a duplex receptacle, and how it mounts' },
      { key: 'buildSafety', label: 'Build & Safety', description: 'Certification, flame-retardant housing, overload protection, recall history and warranty' },
      { key: 'appAutomation', label: 'App & Automation', description: 'Scheduling, away modes, sunrise/sunset triggers and how good the controlling app is' },
      { key: 'value', label: 'Value', description: 'What a switched, metered outlet actually costs once the pack size and any required hub are counted' }
    ],
    filters: [
      { slug: 'under-15', label: 'Under $15', kind: 'price-max', value: 15 },
      { slug: 'under-30', label: 'Under $30', kind: 'price-max', value: 30 },
      { slug: 'under-45', label: 'Under $45', kind: 'price-max', value: 45 },
      { slug: 'indoor-mini', label: 'Indoor Mini Plug', kind: 'use-case' },
      { slug: 'outdoor', label: 'Outdoor', kind: 'use-case' },
      { slug: 'energy-monitoring', label: 'Energy Monitoring', kind: 'use-case' },
      { slug: 'heavy-appliance', label: 'Heavy Appliance', kind: 'use-case' },
      { slug: 'power-strip', label: 'Power Strip', kind: 'use-case' },
      { slug: 'matter', label: 'Matter', kind: 'use-case' }
    ]
  },
  {
    slug: 'smart-lights',
    name: 'Smart Light',
    pluralName: 'Smart Lights',
    description:
      'Smart bulbs, light strips, bars, floor lamps and panel kits compared on the specs makers hide: colour brightness versus white, CRI, hub requirements, dimming floor and whether they survive an internet outage.',
    specFields: [
      { key: 'lumensWhite', label: 'Brightness (white)', betterDirection: 'none' },
      { key: 'lumensColor', label: 'Brightness (saturated colour)', betterDirection: 'none' },
      { key: 'colorTempRange', label: 'Colour Temperature Range', betterDirection: 'none' },
      { key: 'cri', label: 'CRI (colour rendering)', betterDirection: 'none' },
      { key: 'protocol', label: 'Radio & Protocol', betterDirection: 'none' },
      { key: 'hubRequired', label: 'Hub / Bridge Required', betterDirection: 'none' },
      { key: 'localControl', label: 'Works in an Internet Outage', betterDirection: 'none' },
      { key: 'dimmingFloor', label: 'Lowest Dimming Level', betterDirection: 'none' },
      { key: 'powerOnBehavior', label: 'Behaviour After a Power Cut', betterDirection: 'none' },
      { key: 'ratedLife', label: 'Rated Life & Ingress', betterDirection: 'none' },
      { key: 'packSize', label: 'Lights in the Box', unit: 'units', betterDirection: 'higher' },
      { key: 'pricePerUnit', label: 'Price per Light', unit: '$', betterDirection: 'lower' }
    ],
    scoreDimensions: [
      { key: 'brightness', label: 'Brightness', description: 'Usable light output for the room size the product is sold for' },
      { key: 'colorOutput', label: 'Colour-Output Honesty', description: 'How much light survives at a saturated colour rather than at 2700K white, and whether the maker publishes that figure at all' },
      { key: 'colorAccuracy', label: 'Colour Quality & CRI', description: 'Colour rendering, white-point accuracy and how convincing saturated colours look' },
      { key: 'dimming', label: 'Dimming Range', description: 'How far down it dims before it cuts out, and how smooth the bottom end is' },
      { key: 'ecosystem', label: 'Ecosystem & Matter', description: 'Alexa, Google, Apple Home, SmartThings and how much of the product actually crosses over via Matter' },
      { key: 'localControl', label: 'Local Control', description: 'Whether control, schedules and automations keep running with the internet down' },
      { key: 'setupHub', label: 'Setup & Hub Burden', description: 'What extra hardware you must buy and how painful commissioning is' },
      { key: 'value', label: 'Value', description: 'What you pay per light for the light and features you actually get' }
    ],
    filters: [
      { slug: 'under-30', label: 'Under $30', kind: 'price-max', value: 30 },
      { slug: 'under-60', label: 'Under $60', kind: 'price-max', value: 60 },
      { slug: 'under-100', label: 'Under $100', kind: 'price-max', value: 100 },
      { slug: 'under-200', label: 'Under $200', kind: 'price-max', value: 200 },
      { slug: 'whole-home-bulbs', label: 'Whole-Home Bulbs', kind: 'use-case' },
      { slug: 'accent-lighting', label: 'Accent Lighting', kind: 'use-case' },
      { slug: 'tv-and-gaming', label: 'TV & Gaming', kind: 'use-case' },
      { slug: 'no-hub-needed', label: 'No Hub Needed', kind: 'use-case' },
      { slug: 'works-offline', label: 'Works Offline', kind: 'use-case' }
    ]
  },
  {
    slug: 'smart-displays',
    name: 'Smart Display',
    pluralName: 'Smart Displays',
    description:
      'Smart displays compared spec-for-spec — which assistant you are locked into, camera shutters, Zigbee/Thread/Matter hub radios, home-screen ads and the subscriptions the marketing hides.',
    specFields: [
      { key: 'voiceAssistant', label: 'Voice Assistant', betterDirection: 'none' },
      { key: 'screenSize', label: 'Screen Size', unit: 'in', betterDirection: 'higher' },
      { key: 'resolution', label: 'Resolution', betterDirection: 'none' },
      { key: 'touchscreen', label: 'Touchscreen', betterDirection: 'none' },
      { key: 'camera', label: 'Camera', betterDirection: 'none' },
      { key: 'cameraShutter', label: 'Physical Camera Shutter', betterDirection: 'none' },
      { key: 'speakers', label: 'Speakers', betterDirection: 'none' },
      { key: 'smartHomeHub', label: 'Smart Home Hub Radios', betterDirection: 'none' },
      { key: 'assistantSubscription', label: 'Subscriptions Required', betterDirection: 'none' },
      { key: 'homeScreenAds', label: 'Home-Screen Ads', betterDirection: 'none' },
      { key: 'videoCalling', label: 'Video Calling', betterDirection: 'none' },
      { key: 'wallMountable', label: 'Wall Mountable', betterDirection: 'none' }
    ],
    scoreDimensions: [
      { key: 'displayQuality', label: 'Display Quality', description: 'Size, resolution and pixel density for the money' },
      { key: 'sound', label: 'Sound', description: 'Whether it is honestly a music speaker or just a voice speaker with a screen' },
      { key: 'assistant', label: 'Assistant', description: 'How capable and responsive the built-in assistant actually is on this hardware' },
      { key: 'smartHomeHub', label: 'Smart Home Hub', description: 'Zigbee, Matter and Thread border-router support — often the real reason to buy the bigger model' },
      { key: 'ecosystemFreedom', label: 'Ecosystem Freedom', description: 'How much of a rival ecosystem\'s gear, apps and calling networks it will still talk to' },
      { key: 'privacy', label: 'Privacy Hardware', description: 'Physical camera shutters, hardware mic cut-offs and how much sensing runs by default' },
      { key: 'adFreedom', label: 'Ad Freedom', description: 'How much of the screen you paid for the vendor sells back to you, and whether you can turn it off' },
      { key: 'value', label: 'Value', description: 'Hardware and features relative to price, including accessories that are not in the box' }
    ],
    filters: [
      { slug: 'under-100', label: 'Under $100', kind: 'price-max', value: 100 },
      { slug: 'under-200', label: 'Under $200', kind: 'price-max', value: 200 },
      { slug: 'under-300', label: 'Under $300', kind: 'price-max', value: 300 },
      { slug: 'under-450', label: 'Under $450', kind: 'price-max', value: 450 },
      { slug: 'kitchen', label: 'Kitchen', kind: 'use-case' },
      { slug: 'bedside', label: 'Bedside', kind: 'use-case' },
      { slug: 'smart-home-control', label: 'Smart Home Control', kind: 'use-case' },
      { slug: 'video-calling', label: 'Video Calling', kind: 'use-case' },
      { slug: 'family-organizer', label: 'Family Organiser', kind: 'use-case' }
    ]
  },
  {
    slug: 'robot-vacuums',
    name: 'Robot Vacuum',
    pluralName: 'Robot Vacuums',
    description:
      'Robot vacuum comparisons that ignore the Pascal race: mop lift height in mm, what the self-empty dock costs to feed each year, whether the mop is a damp pad or a washed roller, and where the camera looks.',
    specFields: [
      { key: 'claimedSuction', label: 'Claimed Suction (Pa)', betterDirection: 'none' },
      { key: 'independentCleaningResult', label: 'Independent Test Result', betterDirection: 'none' },
      { key: 'navigationAndAvoidance', label: 'Navigation & Obstacle Avoidance', betterDirection: 'none' },
      { key: 'petWastePolicy', label: 'What the Maker Promises About Pet Waste', betterDirection: 'none' },
      { key: 'mopSystem', label: 'Mop System', betterDirection: 'none' },
      { key: 'mopLift', label: 'Mop Lift Over Carpet', unit: 'mm', betterDirection: 'higher' },
      { key: 'dockType', label: 'Dock Type & Plumbing', betterDirection: 'none' },
      { key: 'dockMopWashing', label: 'Dock Mop Wash & Dry', betterDirection: 'none' },
      { key: 'dockBagsAndRunningCost', label: 'Dock Bags & Running Cost', betterDirection: 'none' },
      { key: 'binCapacity', label: 'Robot Bin Capacity', unit: 'ml', betterDirection: 'higher' },
      { key: 'ratedRuntime', label: 'Rated Runtime (and at what setting)', unit: 'min', betterDirection: 'higher' },
      { key: 'accountCloudAndCamera', label: 'Account, Cloud & Camera Privacy', betterDirection: 'none' }
    ],
    scoreDimensions: [
      { key: 'carpetCleaning', label: 'Carpet Cleaning', description: 'Embedded-debris and pet-hair pickup from carpet in independent bench tests, plus anti-tangle brush design — not the manufacturer\'s Pascal claim.' },
      { key: 'hardFloorCleaning', label: 'Hard Floor & Edges', description: 'Pickup on hard floor including crevices, edges and corners, and whether the side brush or mop actually extends to the skirting.' },
      { key: 'mopping', label: 'Mopping', description: 'Whether the mop scrubs or just drags: pad versus spinning versus washed roller, down-pressure, dried-stain removal and how wet the floor is left. Vacuum-only robots score 0.' },
      { key: 'obstacleAvoidance', label: 'Obstacle Avoidance', description: 'Real camera or structured-light recognition versus bump-and-turn, scored against published obstacle-course results rather than the number of object types claimed.' },
      { key: 'dockAutomation', label: 'Dock Automation', description: 'How much the dock genuinely does unattended: self-empty, hot-water mop wash, hot-air dry, solution dosing, plumbed refill and drain — minus the jobs it still leaves you.' },
      { key: 'runningCost', label: 'Running Cost', description: 'The trap dimension. What the machine costs to feed each year in proprietary bags, mop pads, filters and detergent, and whether a bagless dock lets you spend nothing at all. 10 means it costs nothing to keep running.' },
      { key: 'privacyAndControl', label: 'Privacy & Control', description: 'Whether an account and cloud are required, where the maps live, whether there is a camera and where its frames are processed, and the brand\'s actual privacy and security record.' },
      { key: 'value', label: 'Value', description: 'Tested cleaning performance and dock automation against the real street price and the year-one consumables bill.' }
    ],
    filters: [
      { slug: 'under-300', label: 'Under $300', kind: 'price-max', value: 300 },
      { slug: 'under-700', label: 'Under $700', kind: 'price-max', value: 700 },
      { slug: 'under-1100', label: 'Under $1,100', kind: 'price-max', value: 1100 },
      { slug: 'self-empty-base', label: 'Self-Emptying Base', kind: 'use-case' },
      { slug: 'auto-wash-dock', label: 'Dock Washes the Mop', kind: 'use-case' },
      { slug: 'bagless-dock', label: 'Bagless Dock (No Bags to Buy)', kind: 'use-case' },
      { slug: 'vacuum-only', label: 'Vacuum Only (No Mop)', kind: 'use-case' },
      { slug: 'pet-hair', label: 'Pet Hair', kind: 'use-case' },
      { slug: 'first-robot', label: 'First Robot Vacuum', kind: 'use-case' }
    ]
  },
  {
    slug: 'cordless-vacuums',
    name: 'Cordless Vacuum',
    pluralName: 'Cordless Vacuums',
    description:
      'Cordless stick vacuums and wet-dry floor washers compared on the specs that actually decide it — air watts versus Pa, runtime at max power with the floor head running, sealed filtration and battery cost.',
    specFields: [
      { key: 'machineType', label: 'Machine Type', betterDirection: 'none' },
      { key: 'suctionRating', label: 'Suction (as published)', betterDirection: 'none' },
      { key: 'runtimeEco', label: 'Runtime, Eco / Headline', unit: 'min', betterDirection: 'higher' },
      { key: 'runtimeMax', label: 'Runtime, Max Power', unit: 'min', betterDirection: 'higher' },
      { key: 'runtimePoweredHead', label: 'What the Runtime Claim Actually Means', betterDirection: 'none' },
      { key: 'batteryRemovable', label: 'Removable Battery', betterDirection: 'none' },
      { key: 'spareBattery', label: 'Spare Battery', betterDirection: 'none' },
      { key: 'dockOrMount', label: 'Dock / Wall Mount', betterDirection: 'none' },
      { key: 'filtration', label: 'Filtration', betterDirection: 'none' },
      { key: 'binCapacity', label: 'Bin / Tank Capacity', betterDirection: 'none' },
      { key: 'weight', label: 'Weight', unit: 'lbs', betterDirection: 'lower' },
      { key: 'maintenance', label: 'Filters, Consumables & Self-Clean', betterDirection: 'none' }
    ],
    scoreDimensions: [
      { key: 'suctionPower', label: 'Suction Power', description: 'Actual cleaning force at the head, judged on air watts where a maker publishes them and discounted where only Pa or motor watts are quoted' },
      { key: 'sustainedRuntime', label: 'Sustained Runtime', description: 'How long the machine really runs on max power with the motorised floor head attached — not the eco-mode, bare-tool figure on the box' },
      { key: 'filtration', label: 'Filtration & Sealing', description: 'Whether the whole machine is sealed or a HEPA element simply sits inside a leaky body, and what the claimed rating is actually measured at' },
      { key: 'handling', label: 'Handling & Ergonomics', description: 'Weight, balance, whether power is a push-button or a trigger you must hold, and how it stores' },
      { key: 'maintenance', label: 'Maintenance & Emptying', description: 'Bin or tank emptying, whether your hand ends up near the dust, self-clean quality and the ongoing cost of filters, bags and detergent' },
      { key: 'batterySystem', label: 'Battery System', description: 'Removable or sealed, how many packs are included, what a spare costs and whether the pack is shared across a range' },
      { key: 'versatility', label: 'Versatility', description: 'Handheld conversion, above-floor tools, carpet capability and wet-mopping ability' },
      { key: 'value', label: 'Value', description: 'What you actually get for the street price once consumables and missing accessories are counted' }
    ],
    filters: [
      { slug: 'under-200', label: 'Under $200', kind: 'price-max', value: 200 },
      { slug: 'under-350', label: 'Under $350', kind: 'price-max', value: 350 },
      { slug: 'under-600', label: 'Under $600', kind: 'price-max', value: 600 },
      { slug: 'under-900', label: 'Under $900', kind: 'price-max', value: 900 },
      { slug: 'pet-hair', label: 'Pet Hair', kind: 'use-case' },
      { slug: 'hard-floors', label: 'Hard Floors', kind: 'use-case' },
      { slug: 'deep-carpet', label: 'Deep Carpet', kind: 'use-case' },
      { slug: 'allergies', label: 'Allergies', kind: 'use-case' },
      { slug: 'wet-dry', label: 'Wet & Dry Mopping', kind: 'use-case' }
    ]
  },
  {
    slug: 'humidifiers',
    name: 'Humidifier',
    pluralName: 'Humidifiers',
    description:
      'Humidifiers compared on what actually decides it: ultrasonic white dust, real output versus tank size, the runtime setting the claim is made at, filter and cartridge cost, and whether the humidistat is real.',
    specFields: [
      { key: 'technology', label: 'Humidification Technology', betterDirection: 'none' },
      { key: 'whiteDust', label: 'White Dust & Mineral Aerosol', betterDirection: 'none' },
      { key: 'tankCapacity', label: 'Tank Capacity', betterDirection: 'none' },
      { key: 'outputPerDay', label: 'Rated Output per Day', betterDirection: 'none' },
      { key: 'runtimeQuoted', label: 'Quoted Runtime (and at which setting)', betterDirection: 'none' },
      { key: 'coverage', label: 'Rated Room Coverage', betterDirection: 'none' },
      { key: 'humidistat', label: 'Humidistat', betterDirection: 'none' },
      { key: 'noiseLevel', label: 'Noise', betterDirection: 'none' },
      { key: 'consumables', label: 'Filters & Cartridges (Annual Cost)', betterDirection: 'none' },
      { key: 'cleaningBurden', label: 'Cleaning Burden & Dishwasher-Safe Parts', betterDirection: 'none' },
      { key: 'antimicrobial', label: 'UV / Antimicrobial Claim', betterDirection: 'none' },
      { key: 'mistTemperature', label: 'Mist Temperature & Burn Risk', betterDirection: 'none' }
    ],
    scoreDimensions: [
      { key: 'whiteDustRisk', label: 'Freedom From White Dust', description: 'The thing marketing never mentions. Ultrasonic humidifiers aerosolise whatever is dissolved in the water and deposit it as white dust on furniture — the EPA notes they are \'very efficient at dispersing minerals in tap water into the air\', along with microorganisms from the tank. Evaporative and boiled-steam units do not do this at all. A high score means the technology cannot produce dust; a low score means you are buying distilled water for the life of the machine.' },
      { key: 'humidificationPower', label: 'Output', description: 'Actual moisture put into the room per day in gallons or mL/hr, judged against the coverage the manufacturer claims — not the square-footage number on the box' },
      { key: 'runtimeAndCapacity', label: 'Runtime & Refill Interval', description: 'How long a full tank really lasts at a useful output setting, rather than at the lowest setting the runtime is quoted for, and how painful the refill is' },
      { key: 'cleaningEase', label: 'Cleaning & Access', description: 'Whether the tank opening takes an adult hand, whether any part is dishwasher-safe or boilable, and how realistic the manufacturer\'s stated cleaning interval is to actually keep to' },
      { key: 'runningCost', label: 'Running Cost', description: 'Wicks, demineralisation cartridges, antimicrobial additives, distilled water and electricity — everything you keep paying after the purchase' },
      { key: 'quietness', label: 'Quietness', description: 'Noise at the setting people actually run it overnight, weighted toward independently measured figures over manufacturer claims' },
      { key: 'humidityControl', label: 'Humidity Control', description: 'Whether there is a genuine closed-loop humidistat holding a setpoint, or just fixed output steps and a timer with a humidity label on it' },
      { key: 'childSafety', label: 'Safety Around Children', description: 'Burn and scald risk from boiled or heated water, tipping hazard, and whether the hygiene story holds up in a nursery' }
    ],
    filters: [
      { slug: 'under-50', label: 'Under $50', kind: 'price-max', value: 50 },
      { slug: 'under-100', label: 'Under $100', kind: 'price-max', value: 100 },
      { slug: 'under-200', label: 'Under $200', kind: 'price-max', value: 200 },
      { slug: 'no-white-dust', label: 'No White Dust', kind: 'use-case' },
      { slug: 'warm-mist', label: 'Warm Mist & Steam', kind: 'use-case' },
      { slug: 'whole-house', label: 'Whole House / Large Area', kind: 'use-case' },
      { slug: 'nursery', label: 'Nursery & Kids\' Rooms', kind: 'use-case' },
      { slug: 'easy-clean', label: 'Easy to Clean', kind: 'use-case' }
    ]
  },
  {
    slug: 'air-purifiers',
    name: 'Air Purifier',
    pluralName: 'Air Purifiers',
    description:
      'Air purifiers compared on the numbers that decide it: AHAM Verifide CADR versus the marketing square footage, the air-change rate that figure is quoted at, yearly filter cost, ozone and ioniser status, and noise at both ends.',
    specFields: [
      { key: 'ahamCadr', label: 'AHAM Verifide CADR (Smoke / Dust / Pollen)', unit: 'CFM', betterDirection: 'none' },
      { key: 'ahamRoomSize', label: 'AHAM Verifide Room Size (4.8 ACH)', unit: 'ft²', betterDirection: 'none' },
      { key: 'coverageClaim', label: 'Coverage Claim & Its Air-Change Basis', betterDirection: 'none' },
      { key: 'filterType', label: 'Filter Grade (True HEPA / HEPA-Type / H13)', betterDirection: 'none' },
      { key: 'prefilter', label: 'Pre-Filter (Washable?)', betterDirection: 'none' },
      { key: 'annualFilterCost', label: 'Filter Cost per Year', betterDirection: 'lower' },
      { key: 'ionizerOzone', label: 'Ioniser / UV / PCO & CARB Classification', betterDirection: 'none' },
      { key: 'noiseRange', label: 'Noise, Lowest to Highest Setting', unit: 'dB', betterDirection: 'lower' },
      { key: 'sensor', label: 'Air Quality Sensor', betterDirection: 'none' },
      { key: 'smartFeatures', label: 'Smart Features & Offline Operation', betterDirection: 'none' },
      { key: 'powerDraw', label: 'Power Draw & Annual Energy', betterDirection: 'lower' },
      { key: 'warrantyTerms', label: 'Warranty Terms & Conditions', betterDirection: 'none' }
    ],
    scoreDimensions: [
      { key: 'coverageHonesty', label: 'Coverage-Claim Honesty', description: 'The trap dimension for this category. Almost every brand derives its headline square footage from ONE air change per hour, which does close to nothing for smoke, pollen or wildfire particulate — the useful standard is 4.8 air changes an hour, and it is typically a fifth of the number on the box. A high score means the manufacturer publishes the 4.8-ACH figure prominently and it survives comparison with the AHAM Verifide room size; a low score means a big number with no stated air-change basis, or no CADR at all to derive one from.' },
      { key: 'verifiedPerformance', label: 'Verified Clean-Air Delivery', description: 'How much air the unit actually cleans per minute, weighted heavily toward AHAM Verifide smoke CADR over manufacturer-published figures. Self-reported CADR scores below Verifide CADR, and \'no CADR published at all\' scores below both' },
      { key: 'filtrationQuality', label: 'Filtration Quality', description: 'What the media is really rated at — sealed H13, True HEPA, HEPA-Type, EPA 12 or charged fabric — whether the whole machine is sealed so air cannot bypass the filter, and how much genuine activated carbon there is for odours and VOCs' },
      { key: 'runningCost', label: 'Running Cost', description: 'Filters, pre-filters, cartridges and subscriptions over three years, against the purchase price. Several units here cost more to feed than to buy; a high score means cheap, long-lived, non-proprietary consumables' },
      { key: 'quietness', label: 'Quietness', description: 'Measured decibels at the lowest setting you would run overnight AND at the top speed you need in a smoke event — a purifier is only useful at a speed you can tolerate. Not publishing a figure at either end costs points' },
      { key: 'airQualitySensing', label: 'Sensor Quality', description: 'Whether there is a real laser particle sensor resolving PM1/PM2.5/PM10 with numeric output, a vaguer \'air quality\' index, an inference from a cheap VOC element, or no sensor and therefore no auto mode at all' },
      { key: 'byproductSafety', label: 'Freedom From Ozone & Air Chemistry', description: 'Whether the unit adds an ioniser, plasma, UV or photocatalytic stage to the airstream, whether that stage can be switched off, and how CARB classifies the device — \'Mechanical\' means filtration only, \'Electronic\' means capable of generating ozone and certified only as being at or below 0.050 ppm' },
      { key: 'usability', label: 'Controls & Independence', description: 'Whether every mode works from the machine itself with no account or cloud, how good the auto mode is, filter-change access, and whether losing a remote or a login costs you function' }
    ],
    filters: [
      { slug: 'under-100-ready', label: 'Under $100', kind: 'price-max', value: 100 },
      { slug: 'under-250-ready', label: 'Under $250', kind: 'price-max', value: 250 },
      { slug: 'under-400-ready', label: 'Under $400', kind: 'price-max', value: 400 },
      { slug: 'under-500-ready', label: 'Under $500', kind: 'price-max', value: 500 },
      { slug: 'aham-verifide', label: 'AHAM Verifide CADR', kind: 'use-case' },
      { slug: 'ioniser-free', label: 'No Ioniser or Ozone Stage', kind: 'use-case' },
      { slug: 'bedroom-quiet', label: 'Quiet Enough for a Bedroom', kind: 'use-case' },
      { slug: 'large-room', label: 'Whole-Room & Large Spaces', kind: 'use-case' },
      { slug: 'wildfire-smoke', label: 'Wildfire Smoke', kind: 'use-case' }
    ]
  },
  {
    slug: 'dehumidifiers',
    name: 'Dehumidifier',
    pluralName: 'Dehumidifiers',
    description:
      'Dehumidifiers compared on what actually decides it: which pint scale the rating uses, the DOE-verified capacity, whether it survives a cold basement, tank size against daily output, pump lift, and the annual electricity bill.',
    specFields: [
      { key: 'ratedCapacity', label: 'Rated Capacity (and Which Standard)', betterDirection: 'none' },
      { key: 'verifiedDoeCapacity', label: 'ENERGY STAR / DOE Verified Capacity', unit: ' pints/day', betterDirection: 'higher' },
      { key: 'technology', label: 'Technology & Refrigerant', betterDirection: 'none' },
      { key: 'lowTempOperation', label: 'Low-Temperature Operation & Defrost', betterDirection: 'none' },
      { key: 'coverageClaim', label: 'Claimed Coverage', betterDirection: 'none' },
      { key: 'tankCapacity', label: 'Tank Capacity & Refill Interval', betterDirection: 'none' },
      { key: 'drainage', label: 'Continuous Drainage (Hose, Gravity, Pump Lift)', betterDirection: 'none' },
      { key: 'energyStar', label: 'ENERGY STAR Status', betterDirection: 'none' },
      { key: 'runningCost', label: 'Annual Running Cost', betterDirection: 'lower' },
      { key: 'noiseLevel', label: 'Noise', betterDirection: 'none' },
      { key: 'warrantyTerms', label: 'Warranty (incl. Sealed System)', betterDirection: 'none' },
      { key: 'recallHistory', label: 'Recall History', betterDirection: 'none' }
    ],
    scoreDimensions: [
      { key: 'capacityHonesty', label: 'Capacity-Claim Honesty', description: 'This category\'s trap dimension. Since the DOE changed the test condition from 80°F/60% RH to 65°F/60% RH in 2019, the same machine that was a \'70 pint\' is now a \'50 pint\' — and manufacturers freely mix the two scales, plus a third \'saturation\' figure taken at 95°F/90% RH. A high score means the pint number on the box matches the DOE Appendix X1 figure the manufacturer filed with ENERGY STAR. A low score means the marketing number is measured somewhere the buyer\'s house never is.' },
      { key: 'moistureRemoval', label: 'Moisture Removal', description: 'Actual water pulled out of the air per day at a condition a home experiences, judged against the DOE-verified figure rather than the coverage claim on the box' },
      { key: 'coldRoomPerformance', label: 'Cold-Room Performance', description: 'What happens in a 50-55°F basement, garage or crawlspace. Compressor coils frost below roughly 65°F and auto-defrost buys back the coil at the cost of runtime; desiccant rotors and hot-gas-defrost units do not care. The single most common mis-buy in the category' },
      { key: 'drainageAndTank', label: 'Drainage & Tank Practicality', description: 'Tank volume measured against daily output, whether a hose is in the box, whether gravity drainage needs the unit propped up, and whether there is a real pump and how high it lifts' },
      { key: 'runningCost', label: 'Running Cost', description: 'The kWh/yr on the ENERGY STAR certification and what it costs at the meter. On a machine that runs most of the year this dominates total ownership cost — often a third of the purchase price annually' },
      { key: 'quietness', label: 'Quietness', description: 'Measured dB where published, weighted by where the machine actually lives — a 58 dBA crawlspace unit under a floor is fine, a 54 dB cube next to a desk is not' },
      { key: 'buildAndWarranty', label: 'Build & Warranty', description: 'Coil and cabinet construction, filter grade, and above all the warranty on the sealed system — the compressor is the part that fails and the part most portables cover for only twelve months' },
      { key: 'valueForMoney', label: 'Value for Money', description: 'Purchase price plus multi-year electricity against verified pints removed and how long the warranty protects the compressor' }
    ],
    filters: [
      { slug: 'under-100', label: 'Under $100', kind: 'price-max', value: 100 },
      { slug: 'under-250', label: 'Under $250', kind: 'price-max', value: 250 },
      { slug: 'under-500', label: 'Under $500', kind: 'price-max', value: 500 },
      { slug: 'under-1500', label: 'Under $1,500', kind: 'price-max', value: 1500 },
      { slug: 'closet-bathroom', label: 'Closet & Bathroom', kind: 'use-case' },
      { slug: 'large-room', label: 'Large Room', kind: 'use-case' },
      { slug: 'basement', label: 'Basement', kind: 'use-case' },
      { slug: 'cold-spaces', label: 'Cold Spaces (Under 60°F)', kind: 'use-case' },
      { slug: 'crawl-space', label: 'Crawl Space', kind: 'use-case' }
    ]
  }
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
