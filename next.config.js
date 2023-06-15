/** @type {import('next').NextConfig} */
const nextConfig = {
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
