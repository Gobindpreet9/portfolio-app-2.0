const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/logs',
        permanent: true,
      },
      {
        source: '/blog/:path*',
        destination: '/logs/:path*',
        permanent: true,
      },
      {
        source: '/log',
        destination: '/logs',
        permanent: true,
      },
      {
        source: '/log/:path*',
        destination: '/logs/:path*',
        permanent: true,
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "images-na.ssl-images-amazon.com",
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'huggingface.co',
      },
      {
        protocol: 'https',
        hostname: 'www.claudemcp.com',
      },
      {
        protocol: 'https',
        hostname: 'www.anthropic.com',
      },
      {
        protocol: 'https',
        hostname: 'uveec.ca',
      },
      {
        protocol: 'https',
        hostname: 'i.kym-cdn.com',
      },
      {
        protocol: 'https',
        hostname: 'substackcdn.com',
      },
    ],
  },
};

module.exports = nextConfig;
