import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		dangerouslyAllowSVG: true,
		remotePatterns: [
			{
				hostname: 'shop.mango.com'
			}
		]
	}
}

export default nextConfig
