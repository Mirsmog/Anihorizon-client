'use client'
import React from 'react'
import styles from './style.module.css'
import Logo from '../ui/Logo'
import { useSidebar } from '@/app/providers/sidebar'

interface IHeader {}

const Header: React.FC<IHeader> = ({}) => {
	const { toggleSidebar } = useSidebar()
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<button
					className='mr-1 text-accent uppercase'
					onClick={toggleSidebar}
				>
					bar
				</button>
				<Logo />
			</div>
		</header>
	)
}

export default Header
