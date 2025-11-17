import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.cotanet.com.br',
        port: '',
        pathname: '/img/**',
      },
      {
        protocol: 'https',
        hostname: 'scontent-bsb1-1.cdninstagram.com',
        port: '',
        pathname: '/v/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
