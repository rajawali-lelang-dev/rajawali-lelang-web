/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Sesuaikan jika kamu punya hostname spesifik
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  contentDispositionType: 'inline',
  contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  experimental: {
    // Kosongkan atau hapus jika tidak ada fitur eksperimental yang digunakan
  },
};

export default nextConfig;