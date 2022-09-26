/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
  // remotePatterns: [
  //   {
  //     protocol: 'https',
  //     hostname: '**.cdninstagram.com',
  //     pathname: '/v/**',
  //   },
  // ],
}

module.exports = nextConfig
