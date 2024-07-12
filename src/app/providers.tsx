'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

interface Providers extends React.PropsWithChildren {}

const Providers: React.FC<Providers> = ({ children }) => {
	const [client] = React.useState(
		new QueryClient({
			defaultOptions: { queries: { refetchOnWindowFocus: false } }
		})
	)

	return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}

export default Providers
