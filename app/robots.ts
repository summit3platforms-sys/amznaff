import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // The admin dashboard and the API routes behind it are application
      // surface, not content. They already carry noindex, but there is no
      // reason to spend crawl budget on them at all.
      disallow: ['/admin', '/api']
    },
    sitemap: `${SITE_URL}/sitemap.xml`
  };
}
