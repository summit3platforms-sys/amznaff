import { Product } from '@/data/types';

// ---------------------------------------------------------------------------
// Amazon Associates link builder.
//
// Set your real tracking ID as an environment variable (AMAZON_ASSOCIATE_TAG)
// in .env.local for development and in your Vercel project settings for
// production. Falls back to a placeholder so the site still builds without
// it configured — replace the placeholder before going live and you must
// disclose the affiliate relationship per Amazon Associates Operating
// Agreement + FTC guidelines (see components/Footer.tsx disclosure).
// ---------------------------------------------------------------------------

export const AMAZON_TAG = process.env.AMAZON_ASSOCIATE_TAG || 'YOURTAG-20';

export function amazonLink(product: Pick<Product, 'amazonAsin'>): string {
  return `https://www.amazon.com/dp/${product.amazonAsin}?tag=${AMAZON_TAG}&linkCode=ogi&th=1&psc=1`;
}

export function amazonSearchLink(query: string): string {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TAG}`;
}
