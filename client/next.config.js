/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['cdn.sanity.io', 'scontent-ham3-1.cdninstagram.com'],
  },
}

module.exports = nextConfig
