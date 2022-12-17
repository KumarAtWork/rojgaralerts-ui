/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['storage.codefast.tech'],
},
async rewrites() {
  return [
    {
      source: '/login',
      destination: 'http://5.181.217.75:8081/'
    }
  ]
}
}

module.exports = nextConfig
