'use client'
import React from 'react'
import ReactQueryProvider from './react-query'
import { SidebarProvider } from './sidebar'

interface IProviders {
	children: React.ReactNode
	isSidebarCompact: boolean
}

const Providers = ({ children, isSidebarCompact }: IProviders) => {
	return (
		<SidebarProvider isSidebarCompact={isSidebarCompact}>
			<ReactQueryProvider>{children}</ReactQueryProvider>
		</SidebarProvider>
	)
}

export default Providers
