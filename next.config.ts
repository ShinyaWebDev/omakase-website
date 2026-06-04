import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/studio',
        destination: 'https://rlrfcdqt.sanity.studio',
        permanent: false,
      },
      {
        source: '/studio/:path*',
        destination: 'https://rlrfcdqt.sanity.studio/:path*',
        permanent: false,
      },
    ]
  },
};

export default nextConfig;
