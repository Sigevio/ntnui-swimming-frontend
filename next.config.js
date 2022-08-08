/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    loader: 'akamai',
    path: '/',
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
}
