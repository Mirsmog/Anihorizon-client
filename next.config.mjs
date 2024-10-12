/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [{ hostname: 'cdn.noitatnemucod.net', pathname: '/**', protocol: 'https' }]
	}
}

export default nextConfig
