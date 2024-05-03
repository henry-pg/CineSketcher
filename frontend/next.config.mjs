/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/home',
          permanent: true, // Set to false if you want temporary redirect (HTTP 302)
        },
      ];
    },
  };
  
  export default nextConfig;
  