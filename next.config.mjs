/** @type {import('next').NextConfig} */

const nextConfig = {
	async redirects() {
		return [
			{
				source: '/',
				destination: '/home',
				permanent: true
			}
		]
	},
	images: {
		remotePatterns: [
			{ protocol: 'https', hostname: 'anilibria.tv' },
			{ protocol: 'https', hostname: 'via.placeholder.com' }
		]
	}
}

export default nextConfig
