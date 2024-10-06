import React from 'react'
import styles from './index.module.css'

interface IHeader {}

const Header: React.FC<IHeader> = ({}) => {
	return <div className='text-secondary'>I'm header</div>
}

export default Header
