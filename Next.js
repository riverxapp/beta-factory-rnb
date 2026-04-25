/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable experimental features if needed
  experimental: {
    // appDir is enabled by default in Next.js 13.4+
  },
};

module.exports = nextConfig;
// Optional: Add redirects or headers if required later
// async redirects() {
//   return [
//     {
//       source: '/old-path',
//       destination: '/new-path',
//       permanent: true,
//     },
//   ];
// },
// async headers() {
//   return [
//     {
//       source: '/(.*)',
//       headers: [
//         {
//           key: 'X-Frame-Options',
//           value: 'DENY',
//         },
//         {
//           key: 'X-Content-Type-Options',
//           value: 'nosniff',
//         },
//         {
//           key: 'Referrer-Policy',
//           value: 'strict-origin-when-cross-origin',
//         },
//       ],
//     },
//   ];
// },
