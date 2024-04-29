import React from 'react'

import {
	MENU_COLLECTIONS,
	MENU_NAVIGATION,
	MENU_OTHER
} from '@/constants/menu.data'

import Sidebar from './index'
import { UserAuth } from './ui/UserAuth'
import { UserInfo } from './ui/UserInfo'

interface MiniSidebar {
	user: { info: boolean }
}

export const MiniSidebar: React.FC<MiniSidebar> = ({ user }) => {
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
			{user.info === true ? (
				<UserInfo
					compactMode={true}
					href='/'
					id='#12313'
					imageSrc='/Avatar.jpg'
					name='Timur Tyuchiev'
				/>
			) : (
				<UserAuth compact={true} />
			)}
		</aside>
	)
}
