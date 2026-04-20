import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // This ensures the App Router looks into the src directory correctly
  distDir: '.next',
};

export default nextConfig;
