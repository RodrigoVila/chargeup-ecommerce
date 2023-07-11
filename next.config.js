module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.google.com',
        pathname: '/images/**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
