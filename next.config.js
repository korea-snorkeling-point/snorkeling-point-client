/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  trailingSlash: true,
  generateBuildId: () => 'KSNKPoint',
  exportPathMap: () => ({
    '/': { page: '/' },
    '/404': { page: '/404' },
  }),
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = nextConfig;
