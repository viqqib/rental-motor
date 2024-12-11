import next from 'next';

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.promediateknologi.id',
      },
    ],
  },
};

export default nextConfig;
