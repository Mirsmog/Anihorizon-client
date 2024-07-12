import clsx from 'clsx'
import { LogIn } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface UserAuth {
	compact?: boolean
}

export const UserAuth: React.FC<UserAuth> = ({ compact }) => {
	return (
		<Link
			className={clsx('flex py-4 gap-4 items-center mt-10 mb-4 justify-center')}
			href='/auth/sign-in'
		>
			<LogIn />
			{!compact && (
				<div className='flex flex-col gap-1 text-white justify-center'>
					<p className='text-sm'>Авторизоваться</p>
				</div>
			)}
		</Link>
	)
}
