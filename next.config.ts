import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				hostname: 'shop.mango.com'
			}
		],
		// imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
	}
}

export default nextConfig
