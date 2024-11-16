import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  root: './src/',
  server: {
    port: 3000,
    host: true,
  },
  transpilePackages: ['antd'],
}

export default nextConfig
