import type { NextConfig } from 'next'

import { name } from './package.json'

const nextConfig: NextConfig = {
  /* config options here */
  // devIndicators: false,
  assetPrefix: process.env.NODE_ENV === 'production' ? `/${name}/` : '',
  output: 'export'
}

export default nextConfig
