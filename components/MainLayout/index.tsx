'use client'
import React from 'react'
import { useSidebar } from '@/app/providers/sidebar'
import styles from './style.module.css'
import { clsx } from 'clsx'

interface IMainLayout {
	children: React.ReactNode
}

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
	const { isCompact } = useSidebar()

	return <div className={clsx(styles.layout, { [styles.compact]: isCompact })}>{children}</div>
}

export default MainLayout
