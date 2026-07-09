import Link from 'next/link';
import { categories } from '@/data/categories';
import { getAllBrands } from '@/lib/brands';

// Full multi-column footer. Every link points at a real, existing route —
// "Products" and "Brands" columns are generated from live data (categories
// and brands only appear once they have real products), everything else
// links to pages that already exist under app/*.
export default function Footer() {
  const brands = getAllBrands().slice(0, 5);

  const columns: { heading: string; links: { href: string; label: string }[] }[] = [
    {
      heading: 'Products',
      links: [
        ...categories.map((c) => ({ href: `/${c.slug}`, label: c.pluralName })),
        { href: '/categories', label: 'All categories' }
      ]
    },
    {
      heading: 'Brands',
      links: [...brands.map((b) => ({ href: `/brands/${b.slug}`, label: b.name })), { href: '/brands', label: 'All brands' }]
    },
    {
      heading: 'Comparisons',
      links: [
        { href: '/comparisons', label: 'All comparisons' },
        { href: '/guides', label: 'Buying guides' },
        { href: '/compare-tool', label: 'Compare tool' },
        { href: '/product-finder', label: 'Product finder' }
      ]
    },
    {
      heading: 'Resources',
      links: [
        { href: '/how-we-compare', label: 'How we compare' },
        { href: '/our-review-process', label: 'Our review process' },
        { href: '/faqs', label: 'FAQs' },
        { href: '/glossary', label: 'Glossary' }
      ]
    },
    {
      heading: 'Company',
      links: [
        { href: '/about', label: 'About' },
        { href: '/careers', label: 'Careers' },
        { href: '/press', label: 'Press' },
        { href: '/contact', label: 'Contact' }
      ]
    },
    {
      heading: 'Support',
      links: [
        { href: '/help-center', label: 'Help center' },
        { href: '/feedback', label: 'Feedback' },
        { href: '/report-incorrect-info', label: 'Report incorrect info' },
        { href: '/request-a-comparison', label: 'Request a comparison' }
      ]
    },
    {
      heading: 'Legal',
      links: [
        { href: '/privacy-policy', label: 'Privacy' },
        { href: '/terms', label: 'Terms' },
        { href: '/affiliate-disclosure', label: 'Affiliate disclosure' },
        { href: '/cookie-policy', label: 'Cookie policy' },
        { href: '/dmca', label: 'DMCA' },
        { href: '/accessibility', label: 'Accessibility' }
      ]
    }
  ];

  return (
    <footer className="relative mt-20 bg-slate-900">
      <div className="container-page py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-white text-xs font-semibold text-slate-900">
                TCR
              </span>
              <span className="text-base font-medium tracking-tight text-white">
                The Comparison <span className="text-brand-400">Report</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-slate-400">
              Head-to-head product verdicts built from structured specs — not opinion articles.
            </p>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-8">
            {columns.map((col) => (
              <div key={col.heading}>
                <h3 className="text-sm font-semibold text-white">{col.heading}</h3>
                <ul className="mt-3 space-y-2.5">
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

        <div className="mt-10 border-t border-slate-800 pt-6">
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
