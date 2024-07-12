import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

interface TitleCardInfoDetailProps {
	title: string
	description?: string | React.ReactElement
	genres?: string[]
	voices?: string[]
}

export const TitleCardInfoDetail: React.FC<TitleCardInfoDetailProps> = ({
	title,
	description,
	genres,
	voices
}) => {
	const isEmpty = !description && !voices?.length && !genres?.length
	return (
		<div
			className={clsx('text-[13px]', (genres || voices) && 'flex flex-wrap')}
		>
			<span className='font-medium text-opacity-50 text-white mr-1'>
				{title}
			</span>
			{isEmpty && 'N/A'}
			{voices || genres ? (
				[genres, voices].map(
					items =>
						items &&
						items.map((item, i) => (
							<span
								className='mr-1 last:mr-0 text-[13px]'
								key={item}
							>
								<Link
									href={`/${item}`}
									className={clsx(
										'hover:underline',
										genres ? 'text-accent-blue' : 'text-light-salmon'
									)}
								>
									{item}
								</Link>
								{i !== items.length - 1 && ','}
							</span>
						))
				)
			) : (
				<span className='text-white text-opacity-80'>{description}</span>
			)}
		</div>
	)
}
