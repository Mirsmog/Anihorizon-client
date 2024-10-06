'use client'

import React from 'react'
import ReactQueryProvider from './react-query'

const Providers = ({ children }: { children: React.ReactNode }) => {
	return <ReactQueryProvider>{children}</ReactQueryProvider>
}

export default Providers
