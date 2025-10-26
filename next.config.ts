import createMDX from '@next/mdx'
import type { NextConfig } from 'next'

// Keep options serializable if/when you go back to Turbopack.
// (No custom functions for remark/rehype here.)
const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {}
})

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
}

export default withMDX(nextConfig)
