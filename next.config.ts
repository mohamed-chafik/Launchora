
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add these ESLint and TypeScript configurations
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Keep your existing configurations below
  // ... your existing config options
}

module.exports = nextConfig
