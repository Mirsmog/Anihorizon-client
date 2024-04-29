import clsx from 'clsx'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { SITE_NAME } from '@/constants/seo.constants'

import './globals.css'
import { Meta } from './meta'
import Providers from '@/app/providers'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: 'AniHorizon the pest streaming platform to watch anime'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<Meta />
			<Providers>
				<body
					className={clsx(
						inter.className,
						'w-full min-h-screen bg-primary-blue text-white'
					)}
				>
					{children}
				</body>
			</Providers>
		</html>
	)
}
