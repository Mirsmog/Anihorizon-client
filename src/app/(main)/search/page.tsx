'use client'

import { useSearchParams } from 'next/navigation'
import React from 'react'

import { TitleCard } from '@/components/title-card'

import { useSearchTitle } from '@/services/queries'

interface SearchPage {}

const SearchPage: React.FC<SearchPage> = ({}) => {
	const searchParams = useSearchParams()
	const inpValue = searchParams.get('v') || ''
	const { data, isPending } = useSearchTitle({ search: inpValue })
	const animeList = data?.data.list || []
	const parentRef = React.useRef<HTMLDivElement>(null)
	if (isPending) {
		return <div>Pending...</div>
	}
	return (
		<div
			ref={parentRef}
			className='h-full min-h-[calc(100dvh-var(--header-size))]'
		>
			<ul className='flex flex-wrap h-full -mx-3'>
				{animeList.map(title => (
					<li
						className='shrink-0 basis-auto w-[calc(12.5%-24px)] max-w-[230px] min-w-[180px] mx-3 mb-8 h-fit'
						key={title.id}
					>
						<TitleCard
							{...title}
							parentRef={parentRef}
						/>
					</li>
				))}
			</ul>
		</div>
	)
}

export default SearchPage
