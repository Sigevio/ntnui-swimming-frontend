/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    loader: 'akamai',
    path: '/',
  },
  basePath: process.env.nextPublicBasePath, 
  assetPrefix: process.env.nextPublicBasePath 
}
