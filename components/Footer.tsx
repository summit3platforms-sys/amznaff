import Link from 'next/link';
import { categories } from '@/data/categories';

// Trimmed multi-column footer (4 columns). Every link points at a real,
// existing route — the "Explore" column is generated from live category
// data, everything else links to pages that already exist under app/*.
export default function Footer() {
  const columns: { heading: string; links: { href: string; label: string }[] }[] = [
    {
      heading: 'Explore',
      links: [
        ...categories.map((c) => ({ href: `/${c.slug}`, label: c.pluralName })),
        { href: '/comparisons', label: 'All comparisons' },
        { href: '/guides', label: 'Buying guides' },
        { href: '/brands', label: 'Brands' }
      ]
    },
    {
      heading: 'Company',
      links: [
        { href: '/about', label: 'About' },
        { href: '/careers', label: 'Careers' },
        { href: '/contact', label: 'Contact' }
      ]
    },
    {
      heading: 'Support',
      links: [
        { href: '/help-center', label: 'Help center' },
        { href: '/faqs', label: 'FAQs' },
        { href: '/feedback', label: 'Feedback' },
        { href: '/report-incorrect-info', label: 'Report incorrect info' }
      ]
    },
    {
      heading: 'Legal',
      links: [
        { href: '/privacy-policy', label: 'Privacy' },
        { href: '/terms', label: 'Terms' },
        { href: '/affiliate-disclosure', label: 'Affiliate disclosure' },
        { href: '/cookie-policy', label: 'Cookie policy' }
      ]
    }
  ];

  return (
    <footer className="mt-20 bg-slate-900">
      <div className="container-page py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <Link href="/" className="flex flex-shrink-0 items-center gap-2">
            <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-white text-xs font-medium text-slate-900">
              TCR
            </span>
            <span className="text-base font-medium tracking-tight text-white">
              The Comparison <span className="text-brand-400">Report</span>
            </span>
          </Link>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 sm:gap-x-10">
            {columns.map((col) => (
              <div key={col.heading}>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">{col.heading}</h3>
                <ul className="mt-2.5 space-y-2">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-sm text-slate-400 hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-6">
          <p className="max-w-2xl text-xs text-slate-500">
            As an Amazon Associate, The Comparison Report earns from qualifying purchases. This does not influence
            our comparisons, which are generated from structured product specifications. See our{' '}
            <Link href="/affiliate-disclosure" className="underline hover:text-slate-300">
              affiliate disclosure
            </Link>
            .
          </p>
          <p className="mt-3 text-xs text-slate-500">© {new Date().getFullYear()} The Comparison Report</p>
        </div>
      </div>
    </footer>
  );
}
