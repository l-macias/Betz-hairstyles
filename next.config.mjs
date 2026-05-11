/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: [
    '@prisma/client',
    '.prisma/client',
    '@prisma/adapter-pg',
    'pg',
    'pg-cloudflare',
  ],

  turbopack: {
    disabled: true,
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.betzpeinados.com.ar',
          },
        ],
        destination: 'https://betzpeinados.com.ar/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
