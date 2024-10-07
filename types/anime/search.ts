import { IAnime, IMostPopularAnime } from './share'

export interface ISearchAnimeData {
	success: boolean
	data: ISearchData
}

interface ISearchData {
	animes: IAnime[]
	mostPopularAnimes: IMostPopularAnime[]
	searchQuery: string
	searchFilters: {
		[key: string]: string
	}
	totalPages: number
	hasNextPage: boolean
	currentPage: number
}
