import clsx from 'clsx'
import { Search, X } from 'lucide-react'
import React from 'react'

import { LayoutContext } from '../wrapper'

interface AnimeSearch {}

export const AnimeSearch: React.FC<AnimeSearch> = ({}) => {
	const [value, setValue] = React.useState('')
	const searchRef = React.useRef<HTMLDivElement | null>(null)
	const [searchFocus, setSearchFocus] = React.useState(false)
	const { wrapperRef } = React.useContext(LayoutContext)
	const handleSearch = (e: Event) => {
		console.log(e)
	}
	React.useEffect(() => {
		const handleSearchFocus = (e: MouseEvent) => {
			if (!e.composedPath().includes(searchRef.current as HTMLDivElement)) {
				setSearchFocus(false)
			}
		}
		wrapperRef?.current?.addEventListener('click', handleSearchFocus)
		return wrapperRef?.current?.removeEventListener('click', handleSearchFocus)
	}, [])

	return (
		<div
			className='flex items-center w-full'
			ref={searchRef}
		>
			<div
				className={clsx(
					'flex items-center h-10 border rounded-s-full w-full relative',
					searchFocus
						? `pl-12 ml-0 border-opacity-100 border-accent-blue`
						: `pl-4 border-soft-blue border-opacity-30 ml-8`
				)}
			>
				<div
					className={clsx(
						'absolute top-[calc(50%-10px)] left-0 pl-4 pr-3',
						searchFocus ? 'visible' : 'invisible'
					)}
				>
					<Search
						className='min-w-5 min-h-5'
						strokeWidth={1}
						size={20}
					/>
				</div>
				<input
					onFocus={() => setSearchFocus(true)}
					placeholder='Найдите любимое аниме'
					className='bg-transparent text-white outline-none text-base w-full placeholder:text-base'
					type='text'
					value={value}
					onChange={e => setValue(e.currentTarget.value)}
				/>
				<div
					title='Очисть поиск'
					className={clsx(
						'relative p-5 hover:bg-white hover:bg-opacity-20 rounded-full',
						value ? 'visible' : 'invisible'
					)}
					onClick={() => setValue('')}
				>
					<X
						className='cursor-pointer  min-w-8 min-h-8 absolute top-[calc(50%-16px)] left-[calc(50%-16px)]'
						strokeWidth={1}
						width={32}
						height={32}
					/>
				</div>
			</div>
			<button
				className='bg-soft-blue bg-opacity-20 border border-l-0 border-soft-blue border-opacity-30 rounded-e-full h-10 min-w-16 flex items-center justify-center'
				title='Поиск'
			>
				<Search
					strokeWidth={1}
					color='white'
				/>
			</button>
		</div>
	)
}
