import clsx from 'clsx'
import { PlayCircleIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import styles from '../index.module.css'

import { TitleCardInfoDetail } from './TitleCardInfoDetail'
import { TitleT } from '@/types'

interface TitleCardInfoProps extends TitleT {
	position: React.CSSProperties
	refProp: React.RefObject<HTMLDivElement>
}

export const TitleCardInfo: React.FC<TitleCardInfoProps> = ({
	type,
	team,
	names,
	description,
	status,
	season,
	genres,
	code,
	position,
	refProp,
	player
}) => {
	return (
		<div
			ref={refProp}
			className={clsx(
				styles.titleInfo,
				'group-hover:scale-100 group-hover:[&]:duration-150'
			)}
			style={position}
		>
			<h4 className='text-lg font-bold line-clamp-3 leading-6'>{names.ru}</h4>
			<div className='-mx-4 bg-white bg-opacity-10 mt-4'>
				<div className='px-4 flex items-center py-1 justify-between'>
					<span className='text-[13px] text-opacity-50 text-white'>
						Эпизодов: {player.episodes.string || 1}
					</span>
					<span className='bg-green-600 px-2 leading-5 rounded-sm text-xs font-semibold uppercase'>
						{type.string}
					</span>
				</div>
			</div>
			<span className='line-clamp-3 text-xs text-white text-opacity-50 mt-2'>
				{description}
			</span>

			<div className='text-[13px] mt-2'>
				<TitleCardInfoDetail
					title='Другое имя:'
					description={names.alternative ? names.alternative : names.en}
				/>
				<TitleCardInfoDetail
					title='Тип'
					description={type.full_string}
				/>
				<TitleCardInfoDetail
					title='Статус:'
					description={status.string}
				/>
				<TitleCardInfoDetail
					title='Сезон:'
					description={
						<span className=''>
							<Link
								className='hover:underline text-white text-opacity-80 mr-1'
								href={`/${season.code}`}
							>
								{season.string}
							</Link>
							<Link
								className='hover:underline text-white text-opacity-80'
								href={`/${season.year}`}
							>
								{season.year}
							</Link>
						</span>
					}
				/>
				<TitleCardInfoDetail
					title='Озвучка:'
					voices={team.voice}
				/>
				<TitleCardInfoDetail
					title='Жанры:'
					genres={genres}
				/>
			</div>
			<Link
				className='bg-indigo-600 text-white py-3 uppercase px-4 text-sm text-center font-semibold mt-2 -mx-4 -mb-4 flex items-center justify-center gap-1 hover:bg-indigo-700'
				href={`/watch?n=${code}`}
			>
				<PlayCircleIcon
					size={24}
					strokeWidth={1.5}
				/>
				<span>Смотреть сейчас</span>
			</Link>
		</div>
	)
}
