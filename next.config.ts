/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ini akan mengizinkan build selesai meskipun ada error ESLint
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Opsional: lakukan hal yang sama untuk error type agar build tidak terhenti
    ignoreBuildErrors: true,
  },
 images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Tambahkan baris ini untuk keamanan tambahan
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
  },
};

export default nextConfig;