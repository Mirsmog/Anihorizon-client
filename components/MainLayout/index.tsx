'use client'
import React from 'react'
import { useSidebar } from '@/app/providers/sidebar'
import styles from './style.module.css'

interface IMainLayout {
	children: React.ReactNode
}

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
	const { isCompact } = useSidebar()

	const [headerHeight] = React.useState(56)
	const [sidebarWidth, setSidebarWidth] = React.useState(isCompact ? 60 : 240)

	React.useEffect(() => {
		setSidebarWidth(isCompact ? 60 : 240)
	}, [isCompact])

	const cssVar = {
		'--sidebar-width': `${sidebarWidth}px`,
		'--header-height': `${headerHeight}px`
	} as React.CSSProperties

	return (
		<div
			className={styles.layout}
			style={cssVar}
		>
			{children}
		</div>
	)
}

export default MainLayout
