/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    loader: 'akamai',
    path: '/',
  },
  i18n: {
    locales: ['no', 'en', 'fr', 'de'],
    defaultLocale: 'no'
  },
  nextConfig
}
