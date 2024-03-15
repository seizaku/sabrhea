/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["su.edu.ph", "firebasestorage.googleapis.com"],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "100mb",
    },
  },
};

export default nextConfig;
