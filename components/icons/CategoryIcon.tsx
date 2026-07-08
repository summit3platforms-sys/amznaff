// Minimal hand-built line icons — no external icon library dependency.
// One icon per category group, keyed by data/categoryGroups.ts `iconKey`.

type IconProps = { className?: string };

const base = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

function Tv({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="5" width="18" height="12" rx="1.5" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

function Audio({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <rect x="2.5" y="13" width="4" height="6" rx="1.5" />
      <rect x="17.5" y="13" width="4" height="6" rx="1.5" />
    </svg>
  );
}

function Wearable({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="7" y="7" width="10" height="10" rx="2.5" />
      <path d="M9 7V4h6v3M9 17v3h6v-3" />
    </svg>
  );
}

function SmartHome({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6 10v9h12v-9" />
      <path d="M10 19v-5h4v5" />
    </svg>
  );
}

function Camera({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
      <circle cx="12" cy="13" r="3.5" />
    </svg>
  );
}

function Tablet({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M11 18h2" />
    </svg>
  );
}

function Printer({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6 9V4h12v5" />
      <rect x="4" y="9" width="16" height="7" rx="1.5" />
      <path d="M7 16h10v5H7z" />
    </svg>
  );
}

function Power({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M13 7l-3.5 5H12l-1 5 3.5-5H12l1-5Z" strokeLinejoin="round" />
    </svg>
  );
}

function Car({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 16V12l2-5h12l2 5v4" />
      <path d="M4 16h16v2.5a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1V17h-9v1.5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z" />
      <circle cx="7.5" cy="16" r="1.4" />
      <circle cx="16.5" cy="16" r="1.4" />
    </svg>
  );
}

function HomeElectronics({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3M12 18v3M21 12h-3M6 12H3M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1M18.4 18.4l-2.1-2.1M7.7 7.7 5.6 5.6" />
    </svg>
  );
}

export const CATEGORY_ICONS = {
  tv: Tv,
  audio: Audio,
  wearable: Wearable,
  'smart-home': SmartHome,
  camera: Camera,
  tablet: Tablet,
  printer: Printer,
  power: Power,
  car: Car,
  'home-electronics': HomeElectronics
} as const;

export type CategoryIconKey = keyof typeof CATEGORY_ICONS;

export default function CategoryIcon({ iconKey, className = 'h-5 w-5' }: { iconKey: CategoryIconKey; className?: string }) {
  const Icon = CATEGORY_ICONS[iconKey] ?? HomeElectronics;
  return <Icon className={className} />;
}
