/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['source.unsplash.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig


// const withPlugins = require('next-compose-plugins')
// const withImages = require('next-images')

// const nextConfig = {
//   images: {
//     domains: ['your.domain']
//   },
//   reactStrictMode: true,
//   //   swcMinify: true,
//   //   eslint: {
//   //     // Warning: This allows production builds to successfully complete even if
//   //     // your project has ESLint errors.
//   //     ignoreDuringBuilds: true,
//   //   },
// }

// module.exports = withPlugins([[withImages]], nextConfig)