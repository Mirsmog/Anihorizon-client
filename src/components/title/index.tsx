'use client'

import { useSearchParams } from 'next/navigation'
import React from 'react'

import { SITE_NAME } from '@/constants/seo.constants'

import { TitleT } from '@/types'

interface AnimeTitle extends TitleT {}

const AnimeTitle: React.FC<AnimeTitle> = ({ names }) => {
	return (
		<div className='max-w-[1700px] mx-auto'>
			<title>{`${names.ru} | ${SITE_NAME}`}</title>
			<div className='flex gap-4 text-opacity-0 text-white'>
				<div className='w-1/2 grow bg-indigo-700 h-[512px] rounded-lg'>
					player
				</div>
				<div className='w-1/4 min-w-[300px] bg-blue-700 rounded-lg'>series</div>
			</div>
			{/* <div>{JSON.stringify(data.data)}</div> */}
		</div>
	)
}

export default AnimeTitle
