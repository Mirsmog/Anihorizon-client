import clsx from 'clsx'
import { ChevronDown } from 'lucide-react'
import React from 'react'

interface NavGroup extends React.PropsWithChildren {
	title?: string
	collapsible?: boolean
	maxPreviewItems?: number
}

export const NavGroup: React.FC<NavGroup> = ({
	children,
	title,
	collapsible = false,
	maxPreviewItems = 5
}) => {
	const [compact, setCompact] = React.useState(true)
	const navList = React.Children.toArray(children)
	const compactList = navList.slice(0, maxPreviewItems)
	return (
		<div className='flex flex-col  py-4 border-b mx-5 border-soft-blue border-opacity-30 last-of-type:border-none'>
			{title && (
				<h3 className='text-soft-blue font-semibold uppercase text-sm mb-2'>
					{title}
				</h3>
			)}

			<div className='flex flex-col gap-1'>
				<div className='flex flex-col gap-1'>
					{navList.length > maxPreviewItems && compact ? compactList : navList}
				</div>

				{collapsible && (
					<button
						onClick={() => setCompact(!compact)}
						title={title}
						className={clsx(
							'flex items-center text-sm font-normal text-white -mx-5 gap-5 py-[11px] px-5 border-x border-transparent transition-all duration-100 ease-in-out hover:bg-accent-blue hover:bg-opacity-10 active:bg-opacity-20'
						)}
					>
						<ChevronDown
							size={24}
							className={clsx(!compact && 'rotate-180')}
						/>
						<span>{compact ? 'Показать больше' : 'Показать меньше'}</span>
					</button>
				)}
			</div>
		</div>
	)
}
