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
  async redirects() {
    return [];
  }
};

module.exports = nextConfig;
