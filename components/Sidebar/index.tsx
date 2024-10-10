import React from 'react'
import styles from './style.module.css'

interface ISidebar {}

const Sidebar: React.FC<ISidebar> = ({}) => {
	return <aside className={styles.sidebar}></aside>
}

export default Sidebar
