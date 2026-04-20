import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rosefoundationtt.org",
        pathname: "/wp-content/**",
      },
    ],
  },
};

export default nextConfig;
