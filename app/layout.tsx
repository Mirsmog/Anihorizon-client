import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './providers'
import { SITE_META_INFO } from '@/consts'
import Header from '@/components/Header'
import Meta from './meta'
import './styles/globals.css'

const inter = Inter({ subsets: ['cyrillic', 'latin'], variable: '--font-inter' })

export const metadata: Metadata = {
	title: SITE_META_INFO.name,
	description: SITE_META_INFO.description
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<Meta />
			<Providers>
				<body className={inter.className}>
					<Header />
					{children}
				</body>
			</Providers>
		</html>
	)
}
