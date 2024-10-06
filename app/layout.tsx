import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/globals.css'
import Providers from './providers'
import { SITE_META_INFO } from '@/consts'

export const metadata: Metadata = {
	title: SITE_META_INFO.name,
	description: SITE_META_INFO.description
}

const inter = Inter({ subsets: ['cyrillic', 'latin'], variable: '--font-inter' })

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<Providers>
				<body className={inter.className}>{children}</body>
			</Providers>
		</html>
	)
}
