// Anciennes adresses du site WordPress, encore indexées par les moteurs
// de recherche : redirigées en 301 vers les pages équivalentes.
const legacyRedirects = [
  ['/bio', '/biography'],
  ['/audios', '/audio'],
  ['/videos', '/video'],
  ['/politics', '/2025'],
  ['/menu', '/'],
  ['/page-de-maintenance', '/'],
  ['/test', '/'],
  ['/test-2', '/'],
  ['/test-3', '/'],
  ['/test-4', '/'],
  ['/citations-sename-koffi-agbodjinou', '/quotes'],
  ['/conferences-sename-koffi-agbodjinou', '/lectures'],
  ['/consulting-sename-koffi-agbodjinou', '/consulting'],
  ['/contact-sename-koffi-agbodjinou', '/contact'],
  ['/curating-sename-koffi-agbodjinou', '/curating'],
  ['/distinctions-sename-koffi-agbodjinou', '/honor'],
  ['/edition-sename-koffi-agbodjinou', '/edition'],
  ['/engagement-sename-koffi-agbodjinou', '/commitment'],
  ['/investir-avec-sename-koffi-agbodjinou', '/invest'],
  ['/lecons-sename-koffi-agbodjinou', '/lessons'],
  ['/photosphotos-sename-koffi-agbodjinou', '/photo'],
  ['/presse-sename-koffi-agbodjinou', '/press'],
  ['/publications-sename-koffi-agbodjinou', '/publication'],
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: false,
  async redirects() {
    return [
      ...legacyRedirects.map(([source, destination]) => ({ source, destination, permanent: true })),
      // Pages et flux WordPress qui n'existent plus
      { source: '/feed', destination: '/', permanent: true },
      { source: '/comments/feed', destination: '/', permanent: true },
      { source: '/wp-admin/:path*', destination: '/', permanent: true },
      { source: '/wp-login.php', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
