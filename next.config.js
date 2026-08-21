/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'm.media-amazon.com' },
      { protocol: 'https', hostname: 'images-na.ssl-images-amazon.com' },
      { protocol: 'https', hostname: '**.amazon.com' },
      // Official manufacturer newsroom/press-kit image hosts — see comments
      // in data/products/tv.ts for exactly which press release each image
      // came from.
      { protocol: 'https', hostname: 'www.lg.com' },
      { protocol: 'https', hostname: 'img.us.news.samsung.com' },
      { protocol: 'https', hostname: 'na.panasonic.com' },
      { protocol: 'https', hostname: 'www.tpvision.com' }
    ]
  },
  // Permanent redirects for products renamed after publication. A renamed
  // product changes its slug, which changes its URL — these keep the old URLs
  // alive so nothing that is already indexed or linked returns a 404, and so
  // the accumulated ranking signal transfers to the new URL.
  //
  // LG QNED90/QNED85/QNED82 were published under 2025-era names that do not
  // exist in LG's 2026 US lineup; the real 2026 US range is QNED92B and
  // QNED84B. Sizes and prices matched the real SKUs exactly, so these were
  // misnamed rather than wrong products, and were corrected in place.
  //
  // Three rules are needed per rename: the product page itself, comparisons
  // where it is the subject, and comparisons where it is the competitor.
  async redirects() {
    const renamed = [
      ['lg-qned90', 'lg-qned92b'],
      ['lg-qned85', 'lg-qned84b-100'],
      ['lg-qned82', 'lg-qned84b-55']
    ];

    return renamed.flatMap(([from, to]) => [
      { source: `/tv/${from}`, destination: `/tv/${to}`, permanent: true },
      { source: `/tv/${from}/vs/:competitor`, destination: `/tv/${to}/vs/:competitor`, permanent: true },
      { source: `/tv/:product/vs/${from}`, destination: `/tv/:product/vs/${to}`, permanent: true }
    ]);
  }
};

module.exports = nextConfig;
