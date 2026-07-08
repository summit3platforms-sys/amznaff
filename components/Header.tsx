'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { categories } from '@/data/categories';

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setCategoriesOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCategoriesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname?.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container-page flex h-16 items-center justify-between sm:h-20">
        {/* Logo */}
        <Link href="/" className="flex flex-shrink-0 items-center gap-2" onClick={() => setMobileOpen(false)}>
          <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-slate-900 text-xs font-bold text-white">
            TCR
          </span>
          <span className="text-base font-bold tracking-tight text-slate-900 sm:text-lg">
            The Comparison <span className="text-brand-600">Report</span>
          </span>
        </Link>

        {/* Desktop nav — right aligned */}
        <nav className="hidden items-center gap-1 lg:flex">
          <Link
            href="/"
            className={`rounded-md px-3.5 py-2 text-sm font-medium transition ${
              isActive('/') && pathname === '/' ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`rounded-md px-3.5 py-2 text-sm font-medium transition ${
              isActive('/about') ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            About
          </Link>

          {/* Categories dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setCategoriesOpen((v) => !v)}
              aria-expanded={categoriesOpen}
              className={`flex items-center gap-1 rounded-md px-3.5 py-2 text-sm font-medium transition ${
                categoriesOpen || isActive('/categories') ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              Categories
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform ${categoriesOpen ? 'rotate-180' : ''}`}>
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {categoriesOpen && (
              <div className="absolute left-0 top-full mt-2 w-64 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
                {categories.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/${c.slug}`}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                    onClick={() => setCategoriesOpen(false)}
                  >
                    {c.pluralName}
                  </Link>
                ))}
                <div className="mt-1 border-t border-slate-100 pt-1">
                  <Link
                    href="/categories"
                    className="block rounded-lg px-3 py-2 text-sm font-semibold text-brand-600 hover:bg-slate-50"
                    onClick={() => setCategoriesOpen(false)}
                  >
                    View all categories →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/guides"
            className={`rounded-md px-3.5 py-2 text-sm font-medium transition ${
              isActive('/guides') ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            Guides
          </Link>
          <Link
            href="/brands"
            className={`rounded-md px-3.5 py-2 text-sm font-medium transition ${
              isActive('/brands') ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            Brands
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-md text-slate-600 hover:bg-slate-100 lg:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6l-12 12" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav panel */}
      {mobileOpen && (
        <nav className="border-t border-slate-200 bg-white lg:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              ...categories.map((c) => ({ href: `/${c.slug}`, label: c.pluralName })),
              { href: '/categories', label: 'All Categories' },
              { href: '/guides', label: 'Guides' },
              { href: '/brands', label: 'Brands' }
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-md px-3 py-2.5 text-base font-medium ${
                  isActive(link.href) ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
