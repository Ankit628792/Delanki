
const withPWA = require('next-pwa')({
  dest: 'public',
  skipWaiting: true,
  register: true,
})

module.exports = withPWA({
  // next.js config
  reactStrictMode: true,
  images: {
    domains: ['localhost:3000', 'nain-devs.vercel.app']
  },
  i18n: {
    locales: ['en-US', 'fr', 'nl-NL'],
    defaultLocale: 'en-US',
  },
})

// module.exports = {
//   reactStrictMode: true,
//   images: {
//     domains: ['localhost:3000', 'nain-devs.vercel.app']
//   },
//   i18n: {
//     locales: ['en-US', 'fr', 'nl-NL'],
//     defaultLocale: 'en-US',
//   },
// }
