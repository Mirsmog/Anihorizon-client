import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { Inter } from 'next/font/google'

import { SITE_META_INFO } from '@/consts'
import Meta from './meta'
import Providers from './providers'
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
	const isSidebarCompact = cookies().get('isSidebarCompact')?.value === 'true'

	return (
		<html lang='en'>
			<Meta />
			<Providers isSidebarCompact={isSidebarCompact}>
				<body className={inter.className}>{children}</body>
			</Providers>
		</html>
	)
}
