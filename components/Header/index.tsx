'use client'
import React from 'react'
import { AlignJustify } from 'lucide-react'
import styles from './style.module.css'
import Logo from '../ui/Logo'
import { useSidebar } from '@/app/providers/sidebar'
import SearchBox from '../SearchBox'

const Header: React.FC = ({}) => {
	const { toggleSidebar } = useSidebar()

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className='-ml-1 flex items-center gap-3'>
					<button
						className='button-animated rounded-full p-2'
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
