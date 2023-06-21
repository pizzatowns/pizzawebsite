/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
     
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.pizzaguys.com',
          },
        ],
      },
}

module.exports = nextConfig
