import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface UserInfo {
	compactMode: boolean
	imageSrc: string
	href: string
	id: string
	name: string
}

export const UserInfo: React.FC<UserInfo> = ({
	compactMode,
	id,
	href,
	imageSrc,
	name
}) => {
	return (
		<Link
			className={clsx(
				'flex py-4 gap-2 items-center mt-10 mb-4',
				compactMode ? 'px-0 justify-center' : 'px-5'
			)}
			href={href}
		>
			<Image
				src={imageSrc}
				alt={'user'}
				width={36}
				height={36}
				className='rounded-full w-10 h-10'
			/>
			{!compactMode && (
				<div className='flex flex-col gap-1 text-white justify-center'>
					<>
						<p className='text-sm'>{name}</p>
						<span className='text-xs text-white text-opacity-50'>{id}</span>
					</>
				</div>
			)}
		</Link>
	)
}
