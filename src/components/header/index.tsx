'use client'

import { AlignJustify } from 'lucide-react'
import React from 'react'

import { Logo } from '../ui/logo/index'
import { LayoutContext } from '../wrapper'

import { AnimeSearch } from './AnimeSearch'
import './header.css'

interface Header {}

export const Header: React.FC<Header> = ({}) => {
	const { setCompact, compact, wrapperRef } = React.useContext(LayoutContext)

	const handleCompactMode = () => {
		setCompact(!compact)
	}
	return (
		<header className='header'>
			<div className='px-4 h-full flex items-center'>
				<div className='flex items-center gap-4'>
					<button
						className='bg-transparent p-2 rounded-full text-white border-transparent border hover:bg-white hover:bg-opacity-10 active:bg-opacity-20 border-black border-opacity-10 transition-all duration-100 ease-in-out'
						onClick={handleCompactMode}
					>
						<AlignJustify
							className='pointer-events-none'
							size={24}
						/>
					</button>
					<Logo />
				</div>
				<div className='flex flex-shrink flex-grow-0 basis-[640px] mx-auto'>
					<AnimeSearch />
				</div>
			</div>
		</header>
	)
}
