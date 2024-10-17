import React from 'react'
import { Check } from 'lucide-react'
import clsx from 'clsx'

interface ICheckbox {
	checked: boolean
	onChange: () => void
}

const Checkbox: React.FC<ICheckbox> = ({ checked, onChange }) => {
	return (
		<div className='relative pl-4'>
			<input
				className='sr-only'
				type='checkbox'
				checked={checked}
				onChange={onChange}
			/>
			<span
				className={clsx(
					'w-3.5 h-3.5 absolute top-1/2 -translate-y-1/2 left-0 rounded-sm flex items-center justify-center',
					checked ? 'bg-indigo-600' : 'bg-[#474555]'
				)}
			>
				<Check
					className={clsx('transition-transform duration-300 text-foreground', checked ? 'scale-100' : 'scale-0')}
					size={12}
					strokeWidth={4}
				/>
			</span>
		</div>
	)
}

export default Checkbox
