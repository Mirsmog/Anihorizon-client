import React from 'react'

import {
	MENU_COLLECTIONS,
	MENU_NAVIGATION,
	MENU_OTHER
} from '@/constants/menu.data'

import Sidebar from './index'
import { UserInfo } from './ui/UserInfo'

interface MiniSidebar {}

export const MiniSidebar: React.FC<MiniSidebar> = ({}) => {
	return (
		<aside className='sidebar '>
			<div className='flex-grow'>
				<Sidebar.NavGroup>
					{MENU_NAVIGATION.map(({ Icon, name, path }) => (
						<Sidebar.NavLink
							key={name}
							Icon={Icon}
							href={path}
							title={name}
							compact={true}
						/>
					))}
				</Sidebar.NavGroup>
				<Sidebar.NavGroup maxPreviewItems={3}>
					{MENU_COLLECTIONS.map(({ Icon, name, path }) => (
						<Sidebar.NavLink
							key={name}
							Icon={Icon}
							href={path}
							title={name}
							compact={true}
						/>
					))}
				</Sidebar.NavGroup>
				<Sidebar.NavGroup>
					{MENU_OTHER.map(({ Icon, name, path }) => (
						<Sidebar.NavLink
							key={name}
							Icon={Icon}
							href={path}
							title={name}
							compact={true}
						/>
					))}
				</Sidebar.NavGroup>
			</div>
			<UserInfo
				compactMode={true}
				href='/'
				id='#12313'
				imageSrc='https://wallpapers.com/images/high/anime-profile-picture-jioug7q8n43yhlwn.webp'
				name='Timur Tyuchiev'
			/>
		</aside>
	)
}
