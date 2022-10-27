/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ['utils', 'app', 'interfaces', 'models', 'components', 'pages']
  },
}

module.exports = nextConfig
