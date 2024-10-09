import Image from 'next/image'
import React from 'react'
import { Montserrat } from 'next/font/google'
import { SITE_META_INFO } from '@/consts'
import clsx from 'clsx'
import Link from 'next/link'

const mont = Montserrat({ subsets: ['latin'], weight: ['700'] })

interface ILogo {
	url?: string
}

const Logo: React.FC<ILogo> = ({ url }) => {
	const link = url || '/'

	return (
		<Link
			className={clsx(mont.className, 'flex items-center gap-[5px] text-white')}
			href={link}
		>
			<Image
				src='/favicon/favicon.svg'
				alt={SITE_META_INFO.name + ' logo'}
				width={30}
				height={30}
			/>
			<span>HORIZON</span>
		</Link>
	)
}

export default Logo
