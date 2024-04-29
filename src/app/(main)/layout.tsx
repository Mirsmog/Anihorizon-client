import { cookies } from 'next/headers'
import React from 'react'

import { Header } from '@/components/header'
import { Main } from '@/components/main'
import Sidebar from '@/components/sidebar'
import { Wrapper } from '@/components/wrapper'

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	const mode = cookies().get('compactMode')
	const compactMode = JSON.parse(mode?.value || 'false')
	return (
		<Wrapper compactValue={compactMode}>
			<Header />
			<Sidebar />
			<Main>{children}</Main>
		</Wrapper>
	)
}
