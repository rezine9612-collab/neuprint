/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // External-facing neutral endpoint
      { source: "/engine_v1.1/analyze", destination: "/api" },
    ];
  },
};

export default nextConfig;
