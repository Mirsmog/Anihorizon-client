import React from 'react'
import styles from './index.module.css'

interface Header {}

export const Header: React.FC<Header> = ({}) => {
	return <header className={styles.header}>Header</header>
}
