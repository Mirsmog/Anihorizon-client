import { IAnime, IMostPopularAnime, ISuggestionAnime } from './share'

export interface ISearchFilterAnimeData {
	success: boolean
	data: ISearchFilterData
}

export interface ISearchSuggestionAnimeData {
	success: boolean
	data: ISearchSuggestionData
}

export interface ISearchFilterAnimeParams {
	q: string
	page?: number
	type?: string
	status?: string
	rated?: string
	score?: string
	season?: string
	language?: string
	start_date?: string
	end_date?: string
	sort?: string
	genres?: string
}

interface ISearchFilterData {
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

interface ISearchSuggestionData {
	suggestions: ISuggestionAnime[]
}
