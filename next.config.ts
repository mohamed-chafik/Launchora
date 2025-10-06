/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['ll2.thespacedevs.com', 'spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com', 'images-assets.nasa.gov'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true, // Add this as fallback
  },
}

module.exports = nextConfig
