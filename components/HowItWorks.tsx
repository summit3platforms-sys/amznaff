import Link from 'next/link';

const iconProps = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

const steps = [
  {
    label: 'Structured specs, not opinion',
    icon: (
      <svg {...iconProps}>
        <rect x="4" y="3" width="16" height="18" rx="1.5" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </svg>
    )
  },
  {
    label: 'Scored the same way, every time',
    icon: (
      <svg {...iconProps}>
        <path d="M5 20V10M12 20V4M19 20v-7" />
      </svg>
    )
  },
  {
    label: 'One clear verdict',
    icon: (
      <svg {...iconProps}>
        <path d="m5 12 5 5 9-10" />
      </svg>
    )
  }
];

export default function HowItWorks() {
  return (
    <div className="flex flex-col gap-4 border-y border-slate-200 py-5 sm:flex-row sm:items-center sm:justify-between">
      {steps.map((step) => (
        <div key={step.label} className="flex items-center gap-2.5">
          <span className="flex-shrink-0 text-slate-500">{step.icon}</span>
          <span className="text-sm text-slate-600">{step.label}</span>
        </div>
      ))}
      <Link href="/how-we-compare" className="text-sm text-brand-600 hover:underline">
        See the full method →
      </Link>
    </div>
  );
}
