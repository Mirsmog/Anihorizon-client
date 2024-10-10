'use client'
import React from 'react'
import { setCookie } from 'cookies-next'

interface ISidebarProvider {
	children: React.ReactNode
	isSidebarCompact: boolean
}

interface ISidebarContext {
	isCompact: boolean
	toggleSidebar: () => void
}

const SidebarContext = React.createContext<ISidebarContext>({ isCompact: false, toggleSidebar: () => {} })

export const SidebarProvider: React.FC<ISidebarProvider> = ({ children, isSidebarCompact }) => {
	const [isCompact, setIsCompact] = React.useState(isSidebarCompact)

	const toggleSidebar = () => {
		setIsCompact(prev => !prev)
	}

	React.useEffect(() => {
		setCookie('isSidebarCompact', String(isCompact), { sameSite: 'strict' })
	}, [isCompact])

	return <SidebarContext.Provider value={{ isCompact, toggleSidebar }}>{children}</SidebarContext.Provider>
}

export const useSidebar = () => {
	return React.useContext(SidebarContext)
}
