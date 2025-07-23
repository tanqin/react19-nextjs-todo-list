import type { NextConfig } from 'next'

import { name } from './package.json'

const nextConfig: NextConfig = {
  /* config options here */
  // devIndicators: false,
  basePath: process.env.NODE_ENV === 'production' ? `/${name}` : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? `/${name}/` : '',
  output: 'export', // 启用静态导出
  images: {
    unoptimized: true // 静态导出需禁用图片优化
  }
}

export default nextConfig
