'use client'
import React from 'react'
import { clsx } from 'clsx'
import { ChevronDown } from 'lucide-react'
import styles from './style.module.css'
import Checkbox from '../ui/Checkbox'
import Radio from '../ui/Radio'

interface IDropdown {
	name: string
	items: string[]
	selectedItems: string[]
	type: 'checkbox' | 'radio'
	setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>
}

const Dropdown: React.FC<IDropdown> = ({ items: data, type, name, setSelectedItems, selectedItems }) => {
	const [isOpen, setIsOpen] = React.useState(false)

	const handleAddItem = (newItem: string) => {
		setSelectedItems(prev =>
			type === 'radio' ? [newItem] : prev.includes(newItem) ? prev.filter(item => item !== newItem) : [...prev, newItem]
		)
	}

	const handleShowList = () => {
		setIsOpen(prev => !prev)
	}

	return (
		<div className='relative'>
			<button
				className={styles.button}
				onClick={handleShowList}
			>
				{name}
				<ChevronDown
					className={clsx(styles.chevron, { 'rotate-180': isOpen })}
					size={24}
				/>
			</button>
			<div className={clsx(styles.menu, isOpen ? 'scale-y-100' : 'scale-y-0')}>
				<ul className={clsx('p-4 bg-secondary rounded-md grid gap-x-9 gap-y-1 grid-cols-4')}>
					{data.map(item => {
						const checked = selectedItems.includes(item)
						return (
							<li key={item}>
								<label
									className={clsx(
										'flex cursor-pointer select-none items-center gap-1  text-sm p-1',
										checked ? 'text-accent' : 'text-foreground/90'
									)}
									onChange={() => handleAddItem(item)}
								>
									{type === 'radio' ? (
										<Radio
											checked={checked}
											onChange={() => {}}
										/>
									) : (
										<Checkbox
											checked={checked}
											onChange={() => {}}
										/>
									)}
									<span>{item}</span>
								</label>
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}

export default Dropdown
