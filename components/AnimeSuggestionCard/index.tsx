import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

interface IAnimeSuggestionCard {
	id: string
	name: string
	jname: string
	poster: string
	moreInfo: string[]
}

const AnimeSuggestionCard: React.FC<IAnimeSuggestionCard> = ({ id, name, jname, poster, moreInfo }) => {
	// TODO: find better color palette
	return (
		<li
			className='group odd:bg-secondary hover:bg-accent/20'
			key={id}
		>
			<Link
				className='flex px-3 py-3'
				href={`/watch?v=${id}`}
				tabIndex={0}
			>
				<Image
					className='mr-4 h-auto max-h-[70px] w-full max-w-[50px] rounded-sm border-none bg-gray-700 object-cover shadow-md'
					src={poster}
					alt={name}
					width={50}
					height={70}
				/>
				<div>
					<p className='max-w-md truncate text-lg font-semibold group-hover:text-accent-salmon'>{name}</p>
					<p className='max-w-md truncate text-sm text-gray-500'>{jname}</p>
					<ul className='mt-1 flex items-center text-xs text-gray-400'>
						{moreInfo.map((info, index) => (
							<li
								key={info}
								className={clsx('mr-2', { 'text-white group-hover:text-accent-salmon': index === 1 })}
							>
								{info}
							</li>
						))}
					</ul>
				</div>
			</Link>
		</li>
	)
}

export default AnimeSuggestionCard
