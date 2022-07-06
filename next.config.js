/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
const nextConfig = {
  trailingSlash: true,
  env: {
    STRAPI_LOCAL_API: process.env.STRAPI_LOCAL_API,
    LOCAL_DOMAIN: process.env.LOCAL_DOMAIN,
    NEXT_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
  },

  publicRuntimeConfig: {
    STRAPI_LOCAL_API: process.env.STRAPI_LOCAL_API,
    LOCAL_DOMAIN: process.env.LOCAL_DOMAIN,
    NEXT_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
  },

  images: {
    deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96,],
    domains: [process.env.IMAGES_DOMAIN],
    path: '/uploads'
  },
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'de', 'rs'],
    defaultLocale: 'de',
  },
}

module.exports = nextConfig
