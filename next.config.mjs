/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allows all external hosts
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during build and deployment
  },
};

export default nextConfig;
