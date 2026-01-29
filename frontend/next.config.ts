import type { NextConfig } from "next";

const withVideos = require('next-videos');

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {}
};

export default withVideos(nextConfig);
