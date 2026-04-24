/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sename.lafricaine.org',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;
