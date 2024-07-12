import React from 'react'

import { useFilterGenres, useFilterYears } from '@/services/queries'

interface Filter {}

export const Filter: React.FC<Filter> = ({}) => {
	const { data: genresData } = useFilterGenres()
	const { data: yearsData } = useFilterYears()
	const genres = genresData?.data || []
	const years = yearsData?.data.slice(0, yearsData.data.length - 4) || []

	return (
		<div className='flex'>
			<div>
				{years.map(year => (
					<div key={year}>{year}</div>
				))}
			</div>
			<div>
				{genres.map(genre => (
					<div key={genre}>{genre}</div>
				))}
			</div>
		</div>
	)
}
