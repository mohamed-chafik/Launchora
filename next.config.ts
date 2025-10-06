import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Add this if using static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thespacedevs-prod.nyc3.digitaloceanspaces.com',
        port: '',
        pathname: '/media/images/**',
      }
    ],
  },
};

export default nextConfig;
