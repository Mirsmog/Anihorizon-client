import clsx from 'clsx'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cookies } from 'next/headers'
import React from 'react'

import { Header } from '@/components/header'
import { Main } from '@/components/main'
import Sidebar from '@/components/sidebar'
import { Wrapper } from '@/components/wrapper'

import { SITE_NAME } from '@/constants/seo.constants'

import './globals.css'
import { Meta } from './meta'
import Providers from '@/app/providers'

const inter = Inter({ subsets: ['latin'] })

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
	const mode = cookies().get('compactMode')
	const compactMode = JSON.parse(mode?.value || 'false')
	return (
		<html lang='en'>
			<Meta />
			<body
				className={clsx(
					inter.className,
					'w-full min-h-screen bg-primary-blue text-white'
				)}
			>
				<Providers>
					<Wrapper compactValue={compactMode}>
						<Header />
						<Sidebar />
						<Main>{children}</Main>
					</Wrapper>
				</Providers>
			</body>
		</html>
	)
}
