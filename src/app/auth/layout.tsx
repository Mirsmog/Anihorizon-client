import Image from 'next/image'
import React from 'react'

import './index.css'

interface AuthLayoutProps {
	children: React.ReactElement
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
	return (
		<div className='flex w-full'>
			<div className='w-2/3 h-dvh bg-[url("/pos2.jpg")] bg-cover  bg-repeat-x bg-center bg-cool-black opacity-80 slideAnimation'>
				<div className='flex flex-col items-center justify-center h-full bg-blue-700 bg-opacity-60 backdrop-blur-sm'></div>
			</div>
			<div className='flex justify-center items-center grow'>{children}</div>
		</div>
	)
}

export default AuthLayout
