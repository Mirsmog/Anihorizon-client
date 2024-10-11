'use client'
import React from 'react'
import { useSidebar } from '@/app/providers/sidebar'
import SidebarDefault from './Default'
import SidebarCompact from './Compact'
import styles from './style.module.css'

interface ISidebar {}

const Sidebar: React.FC<ISidebar> = ({}) => {
	const { isCompact } = useSidebar()
	return <aside className={styles.sidebar}>{isCompact ? <SidebarCompact /> : <SidebarDefault />}</aside>
}

export default Sidebar
