import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // netlify Drop + static hosts: use public/_redirects for /favicon.ico → /icon.svg
};

export default nextConfig;
