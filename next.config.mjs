/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
      styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.ankama.com',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
