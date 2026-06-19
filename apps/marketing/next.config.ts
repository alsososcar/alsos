import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  transpilePackages: ["@alsos/ui"],
  allowedDevOrigins: ["alsos.localhost", "*.alsos.localhost"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.alsos.localhost",
        pathname: "/image/**",
      },
      {
        protocol: "https",
        hostname: "media.alsos.dev",
        pathname: "/image/**",
      },
    ],
  },
  reactCompiler: true,
  logging: {
    // browserToTerminal: true,
  },
};

const withNextIntl = createNextIntlPlugin({
  experimental: {
    extract: true,
    messages: {
      format: "po",
      locales: ["en", "nb", "nn"],
      path: "./src/i18n/messages",
      sourceLocale: "nb",
    },
    srcPath: ["./src", "../../packages/ui/src"],
  },
});

export default withNextIntl(nextConfig);
