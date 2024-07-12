import Image from 'next/image'
import React from 'react'

import './index.css'

interface AuthLayoutProps {
	children: React.ReactElement
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
	return (
		<div className='flex min-h-dvh w-full justify-center items-center'>
			<div className='w-1/2 flex'>
				<div className='w-2/5 bg-[url("/pos2.jpg")] bg-cover  bg-repeat-x bg-center bg-cool-black opacity-80 slideAnimation'>
					<div className='flex flex-col items-center justify-center h-full bg-blue-800 bg-opacity-60 backdrop-blur-sm'></div>
				</div>
				<div className='flex justify-center items-center grow bg-cool-black'>
					{children}
				</div>
			</div>
		</div>
	)
}

export default AuthLayout
