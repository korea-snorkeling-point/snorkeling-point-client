const path = require('path');

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
    // eslint-disable-next-line no-param-reassign
    config.resolve = {
      alias: {
        '@constants': path.resolve(__dirname, 'src/commons/constants'),
        '@styles': path.resolve(__dirname, 'src/commons/styles'),
        '@hooks': path.resolve(__dirname, 'src/commons/hooks'),
        '@components': path.resolve(__dirname, 'src/components'),
      },
      ...config.resolve,
    };

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.module.rules.push({
      test: /\.(png |jpg | jpeg)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
