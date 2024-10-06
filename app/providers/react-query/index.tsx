import { QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import client from './client'

const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
	const [queryClient] = React.useState(client)
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default ReactQueryProvider
