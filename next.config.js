/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['storage.codefast.tech'],
},
i18n:{
  locales: ['en-us','hi-in'],
  defaultLocale: 'en-us'
}

// async rewrites() {
//   return [
//     {
//       source: '/exams',
//       destination: 'httpsexams'
//     }
//   ]
// }
}

module.exports = nextConfig
