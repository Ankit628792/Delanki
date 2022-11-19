
const withPWA = require('next-pwa')({
  dest: 'public',
  skipWaiting: true,
  register: true,
  disable: process.env.NODE_ENV === 'development'
})

module.exports = withPWA({
  // next.js config
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'nain-devs.vercel.app', 'ankit-resume.netlify.app', 'res.cloudinary.com']
  },
  i18n: {
    locales: ['en-US', 'fr', 'nl-NL'],
    defaultLocale: 'en-US',
  },
  env: {
    google_client_id: process.env.GOOGLE_CLIENT_ID,
    google_client_secret: process.env.GOOGLE_CLIENT_SECRET,
    nextauth_url: process.env.NEXTAUTH_URL,
    nextauth_secret: process.env.NEXTAUTH_SECRET,
    host: process.env.HOST,
    db_uri: process.env.DB_URI,
    preset: process.env.PRESET,
    cloud_name: process.env.CLOUD_NAME,
  }
})
