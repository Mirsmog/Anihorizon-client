import clsx from 'clsx'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { SITE_NAME } from '@/constants/seo.constants'

import './logo.css'

interface Logo {}
const mont = Montserrat({ subsets: ['latin', 'cyrillic'] })

export const Logo: React.FC<Logo> = ({}) => {
	return (
		<Link
			className='relative my-[8px] pl-[35px] inline-block text-white logo'
			href={'/'}
		>
			<Image
				className='logo_front backface-hidden'
				src={'/icons/favicon.svg'}
				width={30}
				height={30}
				alt={SITE_NAME}
				title={SITE_NAME + ' logo'}
			/>
			<Image
				className='logo_back backface-hidden'
				src={'/logo-back.svg'}
				width={30}
				height={30}
				alt={SITE_NAME}
				title={SITE_NAME + ' logo'}
			/>
			<p className={clsx(mont.className, 'font-bold')}>HORIZON</p>
		</Link>
	)
}
