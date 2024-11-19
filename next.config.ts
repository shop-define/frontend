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

/** @type {import('next').NextConfig} */
/*const nextConfig = {
  // Указываем директорию с исходным кодом
  basePath: '/src',
  // Включаем транспиляцию пакетов
  transpilePackages: ['antd'],
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3003/api/:path*', // Замените на ваш бэкенд сервер
      },
    ]
  },
  // Опции оптимизации
  reactStrictMode: true,
}

export default nextConfig */
