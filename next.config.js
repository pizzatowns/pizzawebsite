/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        reactStrictMode: true,
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.pizzaguys.com',
          },
        ],
      },
}

module.exports = nextConfig
