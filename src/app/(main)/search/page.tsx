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
			<ul className='flex flex-wrap h-full gap-4 sm:gap-x-6 gap-y-8 max-w-[1920px] mx-auto '>
				{animeList.map(title => (
					<li
						className='w-[calc((100%-(16px))/2)] sm:w-[calc((100%-(24px*3))/4)] lg:w-[calc((100%-(24px*4))/5)] xl:w-[calc((100%-(24px*5))/6)] 2xl:w-[calc((100%-(24px*7))/8)] '
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
