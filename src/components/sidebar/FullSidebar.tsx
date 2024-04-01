import { Plus } from 'lucide-react'
import React from 'react'

import {
	MENU_COLLECTIONS,
	MENU_NAVIGATION,
	MENU_OTHER
} from '@/constants/menu.data'

import Sidebar from './index'
import { UserInfo } from './ui/UserInfo'

interface FullSidebar {}

export const FullSidebar = ({}: FullSidebar) => {
	return (
		<aside className='sidebar '>
			<div className='flex-grow'>
				<Sidebar.NavGroup title='Навигация'>
					{MENU_NAVIGATION.map(({ Icon, name, path }) => (
						<Sidebar.NavLink
							key={name}
							Icon={Icon}
							href={path}
							title={name}
						/>
					))}
				</Sidebar.NavGroup>
				<Sidebar.NavGroup
					title='Моя коллекция'
					collapsible={true}
					maxPreviewItems={5}
				>
					{MENU_COLLECTIONS.map(({ Icon, name, path }) => (
						<Sidebar.NavLink
							key={name}
							Icon={Icon}
							href={path}
							title={name}
						/>
					))}{' '}
					<button className='bg-[#292a3e] flex items-center justify-center gap-2 text-sm text-white py-[10px] rounded-lg'>
						<Plus
							size={24}
							className='text-soft-blue'
							strokeWidth={1}
						/>
						<span>Создать плейлист</span>
					</button>
				</Sidebar.NavGroup>
				<Sidebar.NavGroup title='Другие'>
					{MENU_OTHER.map(({ Icon, name, path }) => (
						<Sidebar.NavLink
							key={name}
							Icon={Icon}
							href={path}
							title={name}
						/>
					))}
				</Sidebar.NavGroup>
			</div>

			<UserInfo
				compactMode={false}
				href='/'
				id='#12313'
				imageSrc='https://wallpapers.com/images/high/anime-profile-picture-jioug7q8n43yhlwn.webp'
				name='Timur Tyuchiev'
			/>
		</aside>
	)
}
