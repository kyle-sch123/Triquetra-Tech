import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
 output: 'export',
  images: {
    unoptimized: true, // required if you're using next/image
  },
};

export default nextConfig;
