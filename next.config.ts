import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // Images are transformed by ImageKit (tr= params); skip Vercel's
    // image optimizer so it doesn't bill a second transformation pass.
    unoptimized: true,
  },
}

export default nextConfig
