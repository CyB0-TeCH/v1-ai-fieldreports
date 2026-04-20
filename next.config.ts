import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // We removed the top-level eslint key because Next 16 handles it differently
  // or via the CLI now.
};

export default nextConfig;
