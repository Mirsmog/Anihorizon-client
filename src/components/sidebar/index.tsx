'use client'

import { Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import {
	MENU_COLLECTIONS,
	MENU_NAVIGATION,
	MENU_OTHER
} from '../../constants/menu.data'

import { NavGroup } from './NavGroup'
import { NavLink } from './NavLink'
import './sidebar.css'

interface SidebarProps {}

const Sidebar = ({}: SidebarProps) => {
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
					maxPreviewItems={4}
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
			<Link
				className='flex py-4 px-5 gap-2 items-center mt-10 mb-4'
				href='/'
			>
				<Image
					src={
						'https://wallpapers.com/images/high/anime-profile-picture-jioug7q8n43yhlwn.webp'
					}
					alt={'user'}
					width={36}
					height={36}
					className='rounded-full w-10 h-10'
				/>
				<div className='flex flex-col gap-1 text-white justify-center'>
					<p className='text-sm'>Bonderrico</p>
					<span className='text-xs text-white text-opacity-50'>#034325</span>
				</div>
			</Link>
		</aside>
	)
}

Sidebar.NavGroup = NavGroup
Sidebar.NavLink = NavLink
export default Sidebar
