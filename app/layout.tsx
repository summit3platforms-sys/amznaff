import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'),
  title: {
    default: 'The Comparison Report — Product Comparisons That Answer One Question',
    template: '%s | The Comparison Report'
  },
  description:
    'Spec-for-spec product comparisons that answer one question: which one should you buy? No top-10 lists, no opinion pieces — just data-driven comparisons.',
  openGraph: {
    type: 'website',
    siteName: 'The Comparison Report'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
