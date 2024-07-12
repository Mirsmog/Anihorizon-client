import { Filter, SlidersHorizontal, SlidersVertical } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface FilterButton {}

export const FilterButton: React.FC<FilterButton> = ({}) => {
	return (
		<Link
			title='Поиск c фильтром'
			href={'/search'}
			className='min-w-10 min-h-10 flex justify-center items-center rounded-full bg-soft-blue bg-opacity-20'
		>
			<SlidersHorizontal
				strokeWidth={1}
				size={20}
			/>
		</Link>
	)
}
