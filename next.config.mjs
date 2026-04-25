/** @type {import('next').NextConfig} */
const nextConfig = {
  // Asegúrate de que no haya nada raro aquí que bloquee el CSS
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
