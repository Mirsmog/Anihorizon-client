'use client'
import React from 'react'
import { clsx } from 'clsx'
import { ChevronDown } from 'lucide-react'
import styles from './style.module.css'

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
				className='bg-secondary py-2 pr-10 px-4 w-full text-left rounded-md relative'
				onClick={handleClick}
			>
				{children}
				<ChevronDown
					className={clsx('absolute right-2  top-1/2 -translate-y-1/2 transition-transform duration-300', {
						'rotate-180': isOpen
					})}
					size={24}
				/>
			</button>
			<div className={clsx(styles.menu, isOpen ? 'scale-y-100' : 'scale-y-0')}>
				<ul className={clsx('p-2 bg-secondary rounded-md flex h-56')}>
					{data.map(item => (
						<li key={item}>
							<label className='cursor-pointer select-none'>
								<input type='checkbox' />
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
