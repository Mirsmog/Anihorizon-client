import React from 'react'

interface Main extends React.PropsWithChildren {}

export const Main: React.FC<Main> = ({ children }) => {
	return (
		<main className='w-full h-full max-w-[calc(100%-var(--sidebar-size))] ml-auto mt-[var(--header-size)]'>
			{children}
		</main>
	)
}
