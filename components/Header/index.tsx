'use client'
import React from 'react'
import styles from './style.module.css'
import Logo from '../ui/Logo'
import { useSidebar } from '@/app/providers/sidebar'

interface IHeader {}

const Header: React.FC<IHeader> = ({}) => {
	const { toggleSidebar } = useSidebar()
	return (
		<div className={styles.header}>
			<div className={styles.container}>
				<Logo />
				<button
					className='ml-auto'
					onClick={toggleSidebar}
				>
					toggle
				</button>
			</div>
		</div>
	)
}

export default Header
