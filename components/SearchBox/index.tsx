import React from 'react'
import Link from 'next/link'
import { clsx } from 'clsx'
import { LoaderCircle, Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'

import { useDebounce } from '@/hooks'
import { useAnimeSearchSuggestion } from '@/features/anime/queries'
import AnimeSuggestionCard from '../AnimeSuggestionCard'
import styles from './style.module.css'

interface ISearchBox {}

const SearchBox: React.FC<ISearchBox> = () => {
	const router = useRouter()
	const searchParams = useSearchParams()
	const initialQueryValue = searchParams.get('q') || ''
	const searchRef = React.useRef<HTMLDivElement | null>(null)
	const [isPopupOpen, setIsPopupOpen] = React.useState(false)
	const [inputValue, setInputValue] = React.useState(initialQueryValue)

	const { data, isLoading } = useAnimeSearchSuggestion(useDebounce(inputValue, 300))
	const animes = data?.data.suggestions || []

	const handleInputValue = (e: React.FormEvent<HTMLInputElement>) => {
		setInputValue(e.currentTarget.value)
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		router.push(`/search${inputValue ? `?q=${inputValue}` : ''}`)
	}

	const handleClickOutside = (event: MouseEvent) => {
		if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
			setIsPopupOpen(false)
		}
	}

	React.useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	return (
		// TODO: add animation for popup
		<div
			className='border-1 relative flex h-10 items-center rounded-md bg-background/50 text-base'
			ref={searchRef}
		>
			<form
				className='flex h-full flex-grow items-center px-1'
				onSubmit={handleSubmit}
			>
				{isLoading ? (
					<div className='z-20 flex h-full items-center px-2 opacity-80'>
						<LoaderCircle
							className='animate-spin-fast'
							size={20}
						/>
					</div>
				) : (
					<button className='z-20 h-full px-2 opacity-80 hover:opacity-100'>
						<Search size={20} />
					</button>
				)}
				<input
					className='z-20 h-full w-full bg-transparent pl-1 pr-3 focus:outline-none'
					type='search'
					value={inputValue}
					onChange={handleInputValue}
					onFocus={() => setIsPopupOpen(true)}
				/>
			</form>

			<div className={clsx(styles.popup, { [styles.show]: isPopupOpen })}>
				<ul className=''>
					{animes.map(anime => (
						<li
							key={anime.id}
							className='group bg-background first:border-t first:border-gray-600/60 hover:bg-secondary'
						>
							<AnimeSuggestionCard {...anime} />
						</li>
					))}
				</ul>
				{animes.length > 4 && (
					<Link
						className={styles.button}
						href={`/search?q=${inputValue}`}
					>
						View all results
					</Link>
				)}
			</div>
		</div>
	)
}

export default SearchBox
