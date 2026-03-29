import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vivid-vibes.hr",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "studiohara.hr",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
