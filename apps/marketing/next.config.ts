import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  transpilePackages: ["@alsos/ui"],
  allowedDevOrigins: ["alsos.localhost", "*.alsos.localhost"],
  reactCompiler: true,
  logging: {
    browserToTerminal: true,
  },
}

export default nextConfig
