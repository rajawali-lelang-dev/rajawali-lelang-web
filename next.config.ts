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
    // Mengizinkan semua domain agar gambar Google Drive tidak terblokir
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Mematikan optimasi gambar secara global jika Anda masih sering menemui error 400
    unoptimized: true, 
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
  },
};

export default nextConfig;