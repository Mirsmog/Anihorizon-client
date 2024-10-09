import React from 'react'
import styles from './style.module.css'

interface ISidebar {}

const Sidebar: React.FC<ISidebar> = ({}) => {
	return <div className={styles.sidebar}></div>
}

export default Sidebar
