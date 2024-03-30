import clsx from 'clsx'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'

import { Header } from '@/components/header'
import Sidebar from '@/components/sidebar'

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
	return (
		<html lang='en'>
			<Meta />
			<body
				style={
					{
						'--header-size': '56px',
						'--sidebar-size': '240px'
					} as React.CSSProperties
				}
				className={clsx(
					inter.className,
					'w-full min-h-screen bg-primary-blue text-white'
				)}
			>
				<Providers>
					<div className='w-full min-h-screen overflow-hidden'>
						<Header />
						<Sidebar />
						<main className='w-full h-full max-w-[calc(100%-var(--sidebar-size))] ml-auto mt-[var(--header-size)]'>
							{children}
						</main>
					</div>
				</Providers>
			</body>
		</html>
	)
}
