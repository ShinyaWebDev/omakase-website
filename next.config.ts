import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/studio',
        destination: 'https://omakase-cleaning.sanity.studio',
        permanent: false,
      },
      {
        source: '/studio/:path*',
        destination: 'https://omakase-cleaning.sanity.studio/:path*',
        permanent: false,
      },
    ]
  },
};

export default nextConfig;
