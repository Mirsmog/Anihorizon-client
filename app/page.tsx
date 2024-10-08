'use client'
import { useAnimeInfo } from '@/features/anime/queries'

export default function Home() {
	const { data } = useAnimeInfo('classroom-of-the-elite-713')
	const anime = data?.data
	return (
		<div>
			<h1>Hello world!</h1>
			<img
				src={anime?.anime.info.poster || ''}
				alt='fd'
			/>
			{JSON.stringify(anime?.anime.info)}
		</div>
	)
}
