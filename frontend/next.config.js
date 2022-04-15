/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  i18n: {
    locales: ['no', 'en', 'fr', 'de'],
    defaultLocale: 'no'
  },
  nextConfig
}
