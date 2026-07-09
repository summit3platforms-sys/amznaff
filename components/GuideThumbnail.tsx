// Decorative article thumbnail — no stock photography license, so this
// renders a clean gradient tile with a document/read icon instead of a
// fabricated "photo". Visually distinct from PlaceholderImage (product
// shots) so guides read as editorial content, not product listings.
export default function GuideThumbnail({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white/70 ${className}`}
    >
      <svg width="28%" height="28%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <path d="M9 8h7M9 12h5" />
      </svg>
    </div>
  );
}
