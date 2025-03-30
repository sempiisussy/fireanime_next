/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['fireani.me'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

export default nextConfig

