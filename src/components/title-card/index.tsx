'use client'

import clsx from 'clsx'
import { Play } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { ImageDomainUrl } from '@/constants/image.domain'

import { useTooltipPosition } from '@/hooks/useTooltipPos'

import styles from './index.module.css'
import { TitleCardInfo } from './ui/TitleCardInfo'
import { TitleT } from '@/types'

interface TitleCardProps extends TitleT {
	parentRef: React.RefObject<HTMLDivElement>
}

export const TitleCard: React.FC<TitleCardProps> = ({
	parentRef,
	...title
}) => {
	const { names, code, posters, player } = title
	const titleQuality = Object.values(player.list)[0]?.hls.hd ? 'HD' : 'SD'
	const tooltipRef = React.useRef<HTMLDivElement>(null)
	const [position] = useTooltipPosition(parentRef, tooltipRef)

	return (
		<div>
			<div className='relative group'>
				<Link href={`/watch?n=${code}`}>
					<div className='relative group'>
						<div className='absolute w-full h-full top-0 left-0 z-10 pointer-events-none'>
							<span className={styles.titleQuality}>{titleQuality}</span>
							<span className={styles.titleEpisode}>
								Ep {player.episodes.last || 1}
							</span>
						</div>
						<Image
							width={350}
							height={500}
							className='w-full max-h-[324px] rounded-lg rounded-bl-2xl rounded-tl-2xl'
							// src={ImageDomainUrl + posters.small.url}
							src={`https:via.placeholder.com/350x500/1e293b`}
							alt={names.ru}
						/>

						<div
							className={clsx(styles.titleHover, 'group-hover:opacity-100 ')}
						>
							<Play
								className={clsx(
									styles.titleHover__icon,
									'group-hover:scale-100'
								)}
								strokeWidth={4}
								fill='white'
								width={40}
								height={40}
							/>
						</div>
					</div>
				</Link>
				{position !== null && (
					<TitleCardInfo
						{...title}
						position={position}
						refProp={tooltipRef}
					/>
				)}
			</div>
			<Link href={`/watch?n=${code}`}>
				<h4 className={styles.titleName}>{names.ru}</h4>
			</Link>
		</div>
	)
}
