import type { Metadata } from 'next'
import { Varta } from 'next/font/google'
import './globals.css'
import { SITE_NAME } from '@/constants/seo.constants'
import Providers from './providers'
import Head from 'next/head'
import { Meta } from './meta'

const varta = Varta({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: 'AniHorizon the pest streaming platform to watch anime'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<Meta />
			<body className={varta.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
