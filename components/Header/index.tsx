'use client'
import React from 'react'
import { AlignJustify } from 'lucide-react'
import styles from './style.module.css'
import Logo from '../ui/Logo'
import { useSidebar } from '@/app/providers/sidebar'
import SearchBox from '../SearchBox'

interface IHeader {}

const Header: React.FC<IHeader> = ({}) => {
	const { toggleSidebar } = useSidebar()

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className='flex gap-3 items-center -ml-1'>
					<button
						className='p-2 rounded-full button-animated'
						onClick={toggleSidebar}
					>
						<AlignJustify size={24} />
					</button>
					<Logo />
				</div>
				{/* TODO: find better way to center search */}
				<div className='mx-auto w-full max-w-xl '>
					<SearchBox />
				</div>
			</div>
		</header>
	)
}

export default Header
