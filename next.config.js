/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    distDir: 'build',
    devIndicators: {
      buildActivity: false
    },
  }
  
  module.exports = nextConfig
  