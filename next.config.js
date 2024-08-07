/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
  },
  async redirects(){
    return[{
      source:"/",
      destination: '/projects',
      permanent: true,
    }]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        port: '',
      },
    ],
    dangerouslyAllowSVG: true,
  },
}

module.exports = nextConfig
