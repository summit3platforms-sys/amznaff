import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'),
  title: {
    default: 'WhichOneToBuy — Product Comparisons That Answer One Question',
    template: '%s | WhichOneToBuy'
  },
  description:
    'Spec-for-spec product comparisons that answer one question: which one should you buy? No top-10 lists, no opinion pieces — just data-driven comparisons.',
  openGraph: {
    type: 'website',
    siteName: 'WhichOneToBuy'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
