/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000']
    }
  },
  images: {
    unoptimized: true
  }
};

export default nextConfig;
