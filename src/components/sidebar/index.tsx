import React from 'react'

import { FullSidebar } from './FullSidebar'
import { NavGroup } from './NavGroup'
import { NavLink } from './NavLink'
import './sidebar.css'

interface SidebarProps {}

const Sidebar = ({}: SidebarProps) => {
	return <FullSidebar />
}
export default Sidebar

Sidebar.NavGroup = NavGroup
Sidebar.NavLink = NavLink
