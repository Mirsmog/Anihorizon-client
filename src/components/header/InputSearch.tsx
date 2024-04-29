import { useIsFetching } from '@tanstack/react-query'
import clsx from 'clsx'
import { LoaderCircle, Search, X } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

import { LayoutContext } from '../wrapper'

interface InputSearch {}

export const InputSearch: React.FC<InputSearch> = ({}) => {
	const searchParams = useSearchParams()
	const urlSearchValue = searchParams.get('v') || ''

	const router = useRouter()
	const searchRef = React.useRef<HTMLDivElement | null>(null)
	const inputRef = React.useRef<HTMLInputElement | null>(null)
	const { wrapperRef } = React.useContext(LayoutContext)
	const [value, setValue] = React.useState(urlSearchValue)
	const [searchFocus, setSearchFocus] = React.useState(false)
	const isFetching = useIsFetching({
		queryKey: ['search-titles', { search: value }]
	})

	const handleSearch = () => {
		const checkWhiteSpace = /^\s+$/
		const valid = value && !checkWhiteSpace.test(value)
		if (valid) router.push(`/search?v=${value}`)
	}
	const handleClear = () => {
		setValue('')
		inputRef.current?.focus()
	}

	React.useEffect(() => {
		const handleSearchFocus = (e: MouseEvent) => {
			if (!e.composedPath().includes(searchRef.current as HTMLDivElement)) {
				setSearchFocus(false)
			}
		}
		wrapperRef?.current?.addEventListener('click', handleSearchFocus)
		return () =>
			wrapperRef?.current?.removeEventListener('click', handleSearchFocus)
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
					{isFetching ? (
						<LoaderCircle
							className='min-w-5 min-h-5 animate-spin'
							strokeWidth={1.5}
							size={20}
						/>
					) : (
						<Search
							className='min-w-5 min-h-5'
							strokeWidth={1}
							size={20}
						/>
					)}
				</div>
				<input
					ref={inputRef}
					onFocus={() => setSearchFocus(true)}
					placeholder='Найдите любимое аниме'
					className='bg-transparent text-white outline-none text-base w-full placeholder:text-base'
					type='text'
					value={value}
					onChange={e => setValue(e.currentTarget.value)}
					onKeyDown={e => e.code === 'Enter' && handleSearch()}
				/>
				<div
					title='Очисть поиск'
					className={clsx(
						'relative p-5 hover:bg-white hover:bg-opacity-20 rounded-full',
						value ? 'visible' : 'invisible'
					)}
					onClick={handleClear}
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
				onClick={() => handleSearch()}
			>
				<Search
					strokeWidth={1}
					color='white'
				/>
			</button>
		</div>
	)
}
