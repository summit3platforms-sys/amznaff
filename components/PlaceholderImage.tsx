import Image from 'next/image';

// Renders the real product photo when one is available (product.images[0]),
// falling back to a branded placeholder icon otherwise — so cards never
// look broken for categories/products that don't have photography yet.
// `src` should come from Product["images"][0]?.url; leave it undefined to
// always render the placeholder.
export default function PlaceholderImage({
  label,
  className = '',
  src
}: {
  label: string;
  className?: string;
  src?: string;
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden rounded-2xl bg-slate-50 ${className}`}>
        <Image
          src={src}
          alt={label}
          fill
          sizes="(max-width: 768px) 50vw, 400px"
          className="object-contain p-3"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={label}
      className={`flex items-center justify-center rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 text-slate-300 ${className}`}
    >
      <svg width="34%" height="34%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="9" cy="10" r="2" />
        <path d="m5 18 5-5 3 3 3-4 3 6" />
      </svg>
    </div>
  );
}
