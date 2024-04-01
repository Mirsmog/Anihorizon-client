'use client'
import clsx from 'clsx'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface NavLink {
	title: string
	href: string
	Icon: LucideIcon
	compact?: boolean
}

export const NavLink: React.FC<NavLink> = ({
	title,
	href,
	Icon,
	compact = false
}) => {
	const pathName = usePathname()
	const isActiveLink = pathName === href
	return (
		<Link
			href={href}
			title={title}
			className={clsx(
				'flex items-center text-sm font-normal text-white -mx-5 gap-5 py-[11px] px-5 border-x border-transparent transition-all duration-100 ease-in-out hover:bg-accent-blue hover:bg-opacity-10 active:bg-opacity-20',
				isActiveLink &&
					'bg-blue-300 bg-opacity-10 border-r-4 border-r-accent-blue font-semibold',
				compact && 'justify-center'
			)}
		>
			<Icon
				size={24}
				strokeWidth={isActiveLink ? 2 : 1}
				className={isActiveLink ? 'text-accent-blue' : 'text-soft-blue'}
			/>
			{!compact && <span>{title}</span>}
		</Link>
	)
}
