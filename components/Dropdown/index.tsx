'use client'
import React from 'react'
import { clsx } from 'clsx'
import { ChevronDown } from 'lucide-react'
import styles from './style.module.css'
import Checkbox from '../ui/Checkbox'

interface IDropdown {
	data: string[]
	type: 'checkbox' | 'radio'
	children: React.ReactNode
}

const Dropdown: React.FC<IDropdown> = ({ data, type, children }) => {
	const [isOpen, setIsOpen] = React.useState(false)
	const handleClick = (e: any) => {
		setIsOpen(prev => !prev)
	}
	return (
		<div className='relative'>
			<button
				className={styles.button}
				onClick={handleClick}
			>
				{children}
				<ChevronDown
					className={clsx(styles.chevron, { 'rotate-180': isOpen })}
					size={24}
				/>
			</button>
			<div className={clsx(styles.menu, isOpen ? 'scale-y-100' : 'scale-y-0')}>
				<ul className={clsx('p-4 bg-secondary rounded-md grid gap-x-10 gap-y-2 grid-cols-4')}>
					{data.map(item => (
						<li key={item}>
							<label className='flex cursor-pointer select-none items-center gap-1 text-foreground/90 text-sm'>
								<Checkbox />
								<span>{item}</span>
							</label>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Dropdown
