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
	selectedItems: string[]
	setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>
}

const Dropdown: React.FC<IDropdown> = ({ data, type, children, setSelectedItems, selectedItems }) => {
	const [isOpen, setIsOpen] = React.useState(false)

	const handleAddItem = (newItem: string) => {
		if (selectedItems.includes(newItem)) {
			setSelectedItems(prev => prev.filter(prevItem => prevItem !== newItem))
		} else {
			setSelectedItems(prev => [...prev, newItem])
		}
	}

	React.useEffect(() => {
		console.log(selectedItems)
	}, [selectedItems])

	const handleClick = () => {
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
				<ul className={clsx('p-4 bg-secondary rounded-md grid gap-x-9 gap-y-1 grid-cols-4')}>
					{data.map(item => (
						<li key={item}>
							<label
								className={clsx(
									'flex cursor-pointer select-none items-center gap-1  text-sm p-1',
									selectedItems.includes(item) ? 'text-accent' : 'text-foreground/90'
								)}
								onChange={() => handleAddItem(item)}
							>
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
