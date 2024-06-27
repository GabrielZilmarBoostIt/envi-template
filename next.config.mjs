/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/suppliers",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
