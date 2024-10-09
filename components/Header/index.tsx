'use client'
import React from 'react'
import styles from './style.module.css'
import Logo from '../ui/Logo'

interface IHeader {}

const Header: React.FC<IHeader> = ({}) => {
	return (
		<div className={styles.header}>
			<div className={styles.container}>
				<Logo />
			</div>
		</div>
	)
}

export default Header
