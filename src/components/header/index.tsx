import { AlignJustify } from 'lucide-react'
import React from 'react'

import { Logo } from '../ui/logo/index'

import './header.css'

interface Header {}

export const Header: React.FC<Header> = ({}) => {
	return (
		<header className='header'>
			<div className='px-4 h-full flex items-center'>
				<div className='flex items-center gap-4'>
					<button className='bg-transparent p-2 rounded-full text-white border-transparent border hover:bg-white hover:bg-opacity-10 active:bg-opacity-20 border-black border-opacity-10 transition-all duration-100 ease-in-out'>
						<AlignJustify
							className='pointer-events-none'
							size={24}
						/>
					</button>
					<Logo />
				</div>
			</div>
		</header>
	)
}
