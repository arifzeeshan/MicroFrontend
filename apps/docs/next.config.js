/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: '/docs-static',
  reactStrictMode: true,
  transpilePackages: ['@acme/components', '@acme/design-system', '@acme/utils'],
  async rewrites() {
    return {
      beforeFiles: [
        // This rewrite is necessary to support assetPrefix only in Next 14 and below.
        // It is not necessary in Next 15.
        {
          source: '/docs-static/_next/:path*',
          destination: '/_next/:path*',
        },
      ],
    }
  },
}

export default nextConfig
