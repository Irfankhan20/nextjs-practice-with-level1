/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/products/add",
        destination: "/dashboard/addProducts/add",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
