import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
<<<<<<< HEAD
    remotePatterns: [],
    // Tambahkan localPatterns untuk mengizinkan query string pada API internal
    localPatterns: [
      {
        pathname: '/api/drive-image',
        search: '',
=======
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rajawalilelangindo.com',
        pathname: '/api/drive-image',
      },
      {
        protocol: 'https',
        hostname: 'rajawali-lelang-web.vercel.app',
        pathname: '/api/drive-image',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/api/drive-image',
>>>>>>> origin/main
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'inline',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    // Bagian turbo tetap dihapus untuk menghindari error sebelumnya
  },
};

export default nextConfig;