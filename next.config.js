/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    // Important: avoid Next inferring the wrong workspace root when
    // there are other lockfiles outside this project (common on dev machines / Pi).
    root: __dirname,
  },
};

module.exports = nextConfig;

