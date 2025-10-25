import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Image configurations
experimental: {
    analytics: true,
  },
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
  
  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Add any other existing configurations you had here
}

export default nextConfig
