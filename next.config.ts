import type { NextConfig } from 'next'

import { name } from './package.json'

// 基础路径
const NEXT_PUBLIC_BASE_PATH = process.env.NODE_ENV === 'production' ? `/${name}` : ''

const nextConfig: NextConfig = {
  /* config options here */
  // devIndicators: false,
  basePath: NEXT_PUBLIC_BASE_PATH,
  output: 'export', // 启用静态导出
  env: {
    NEXT_PUBLIC_BASE_PATH
  }
}

export default nextConfig
