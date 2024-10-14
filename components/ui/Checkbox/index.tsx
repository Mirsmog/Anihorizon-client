import React from 'react'
import styles from './style.module.css'
import { Check } from 'lucide-react'
import clsx from 'clsx'

interface ICheckbox {}

const Checkbox: React.FC<ICheckbox> = ({}) => {
	const [checked, setChecked] = React.useState(false)
	const handleChecked = () => {
		setChecked(prev => !prev)
	}
	return (
		<div className='relative pl-4'>
			<input
				className='sr-only'
				onChange={handleChecked}
				type='checkbox'
			/>
			<span
				className={clsx(
					'w-3.5 h-3.5 absolute top-1/2 -translate-y-1/2 left-0 rounded-sm flex items-center justify-center',
					checked ? 'bg-indigo-600' : 'bg-[#474555]'
				)}
			>
				<Check
					className={clsx(checked ? 'block' : 'hidden')}
					size={12}
					strokeWidth={4}
				/>
			</span>
		</div>
	)
}

export default Checkbox
