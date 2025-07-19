import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://i.ytimg.com/**'), new URL('https://yt3.ggpht.com/**')]
  }
};

export default nextConfig;
