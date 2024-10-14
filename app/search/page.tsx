'use client'
import Dropdown from '@/components/Dropdown'
import React from 'react'

export default function Search() {
	// TODO: move filter from page to component
	const [selectedGenres, setSelectedGenres] = React.useState<string[]>([])
	const animeGenres: string[] = [
		'Action',
		'Adventure',
		'Comedy',
		'Drama',
		'Fantasy',
		'Magic',
		'Supernatural',
		'Horror',
		'Mystery',
		'Psychological',
		'Romance',
		'Sci-Fi',
		'Slice of Life',
		'Sports',
		'Super Power',
		'Thriller',
		'Martial Arts',
		'Historical',
		'Mecha',
		'Military',
		'Music',
		'Parody',
		'Samurai',
		'Shoujo',
		'Shoujo Ai',
		'Shounen',
		'Shounen Ai',
		'Space',
		'Vampire',
		'Demons',
		'Game',
		'Harem',
		'Josei',
		'Police',
		'School',
		'Seinen',
		'Ecchi',
		'Yaoi',
		'Yuri',
		'Isekai'
	]

	return (
		<div>
			<Dropdown
				type='checkbox'
				data={animeGenres}
				selectedItems={selectedGenres}
				setSelectedItems={setSelectedGenres}
			>
				Select genre
			</Dropdown>
		</div>
	)
}
