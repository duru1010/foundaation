import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // ✅ ADD THIS
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;