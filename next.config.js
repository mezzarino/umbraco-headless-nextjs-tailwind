/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.umbraco.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
