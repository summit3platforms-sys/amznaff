// Branded placeholder shown until real product photography is added (see
// README — amazonAsin/images are the two fields that need real data before
// launch). Renders a subtle icon instead of a literal "Image" label so
// cards don't look broken while photos are pending.
export default function PlaceholderImage({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex items-center justify-center rounded-xl bg-slate-100 text-slate-300 ${className}`}
    >
      <svg width="34%" height="34%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="9" cy="10" r="2" />
        <path d="m5 18 5-5 3 3 3-4 3 6" />
      </svg>
    </div>
  );
}
