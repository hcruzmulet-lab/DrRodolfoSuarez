import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Render <head> metadata synchronously instead of streaming it.
  // Next 16 streams metadata inside a `<div hidden style="display:contents">`
  // + Suspense wrapper; in dev that wrapper is prone to hydration mismatches
  // (e.g. a browser extension stripping the style attr). Disabling streaming
  // removes the fragile wrapper and puts title/OG tags straight in <head>,
  // which is also better for SEO/social crawlers. Prerendered prod pages
  // already resolve metadata at build time, so this only affects dev.
  htmlLimitedBots: /.*/,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
