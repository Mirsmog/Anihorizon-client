'use client'

import { getCookie, setCookie } from 'cookies-next'
import React from 'react'

interface Wrapper extends React.PropsWithChildren {
	compactValue: boolean
}
export interface ILayoutContext {
	headerSize: number
	setHeaderSize: (size: number) => void
	compact: boolean
	setCompact: (mode: boolean) => void
	sidebarSize: number
	setSidebarSize: (size: number) => void
	wrapperRef: React.RefObject<HTMLDivElement | null> | null
}
export const LayoutContext = React.createContext<ILayoutContext>({
	headerSize: 56,
	sidebarSize: 240,
	compact: false,
	setCompact: () => {},
	setHeaderSize: () => {},
	setSidebarSize: () => {},
	wrapperRef: null
})
export const Wrapper: React.FC<Wrapper> = ({ children, compactValue }) => {
	const [headerSize, setHeaderSize] = React.useState(56)
	const [sidebarSize, setSidebarSize] = React.useState(240)
	const [compact, setCompact] = React.useState(compactValue)
	const wrapperRef = React.useRef<HTMLDivElement | null>(null)

	React.useEffect(() => {
		const cookieCompactMode = getCookie('compactMode')
		if (cookieCompactMode) setCompact(JSON.parse(cookieCompactMode))
	}, [])
	React.useEffect(() => {
		setCookie('compactMode', JSON.stringify(compact), { sameSite: 'lax' })
	}, [compact])

	return (
		<div
			ref={wrapperRef}
			style={
				{
					'--header-size': `${headerSize}px`,
					'--sidebar-size': `${!compact ? sidebarSize : 72}px`
				} as React.CSSProperties
			}
			className='w-full min-h-screen overflow-hidden'
		>
			<LayoutContext.Provider
				value={{
					headerSize,
					setHeaderSize,
					sidebarSize,
					setSidebarSize,
					compact,
					setCompact,
					wrapperRef
				}}
			>
				{children}
			</LayoutContext.Provider>
		</div>
	)
}
