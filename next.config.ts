import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/diagnostics', destination: '/kundali-reading', permanent: true },
      { source: '/pacification', destination: '/puja-remedies', permanent: true },
      { source: '/installations', destination: '/gemstones', permanent: true },
      { source: '/spatial-harmonic', destination: '/vastu-consultation', permanent: true },
    ]
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
