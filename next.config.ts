/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Mencegah error INVALID_IMAGE_OPTIMIZE_REQUEST
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
      },
    ],
  },
};
module.exports = nextConfig;