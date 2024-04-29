import React from 'react'

interface Main extends React.PropsWithChildren {}

export const Main: React.FC<Main> = ({ children }) => {
	return (
		<main className='overflow-y-auto w-full p-6 max-w-[calc(100%-var(--sidebar-size))] ml-auto mt-[var(--header-size)] h-full min-h-[calc(100dvh-var(--header-size))]'>
			{children}
		</main>
	)
}
