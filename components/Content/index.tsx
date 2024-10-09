import React from 'react'
import styles from './style.module.css'
import { clsx } from 'clsx'

interface IContent {
	children: React.ReactNode
	className?: string
}

const Content: React.FC<IContent> = ({ children, className }) => {
	return <main className={clsx(styles.content, className)}>{children}</main>
}

export default Content
