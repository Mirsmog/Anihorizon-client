import React from 'react'
import { useRouter } from 'next/navigation'
import { useDebounce } from '@/hooks'
import { Search } from 'lucide-react'
import { clsx } from 'clsx'
import { useAnimeSearchSuggestion } from '@/features/anime/queries'
import Link from 'next/link'

interface ISearchBox {}

const SearchBox: React.FC<ISearchBox> = ({}) => {
	const router = useRouter()
	const [inputValue, setInputValue] = React.useState('')
	const [isInputFocus, setIsInputFocus] = React.useState(false)

	const { data, isLoading } = useAnimeSearchSuggestion(useDebounce(inputValue, 300))

	const animes = data ? data.data.suggestions : []

	const handleInputValue = (e: React.FormEvent<HTMLInputElement>) => {
		const value = e.currentTarget.value
		setInputValue(value)
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const query = inputValue ? `?q=${inputValue}` : ''
		router.push(`/search${query}`)
	}
	//#23223a
	console.log(animes)

	return (
		<div className='relative flex h-10 items-center rounded-md bg-background/50 text-base'>
			<form
				className='flex h-full flex-grow items-center px-1'
				onSubmit={handleSubmit}
				autoComplete='off'
			>
				<button className='z-20 h-full px-2 opacity-80 hover:opacity-100'>
					<Search size={20} />
				</button>
				<input
					className='z-20 h-full w-full bg-transparent pl-1 pr-3 focus:outline-none'
					type='search'
					value={inputValue}
					onChange={handleInputValue}
					onFocus={() => setIsInputFocus(true)}
					onBlur={() => setIsInputFocus(true)}
				/>
			</form>
			{/* popup */}
			<div
				className={clsx(
					'absolute -top-[1px] -left-[1px] -right-[1px] pt-10 z-10 border-2 rounded-md bg-background/90 transition-all duration-500 overflow-hidden',
					isInputFocus ? 'max-h-screen border-accent/20' : 'max-h-0 border-transparent'
				)}
			>
				<div>
					<ul>
						{animes.map(({ id, poster, name, jname, moreInfo }) => (
							<li
								className='odd:bg-secondary hover:bg-accent/20'
								key={id}
							>
								<Link
									className='px-3 py-3 flex'
									href={`/watch?v=${id}`}
								>
									<img
										src={poster}
										width={60}
									/>
									<div>
										<p>{name}</p>
										<p>{jname}</p>
										<ul className='flex items-center'>
											{moreInfo.map((info, index) => (
												<li key={info}>{info}</li>
											))}
										</ul>
									</div>
								</Link>
							</li>
						))}
					</ul>
					<button>View all results</button>
				</div>
			</div>
		</div>
	)
}

export default SearchBox
