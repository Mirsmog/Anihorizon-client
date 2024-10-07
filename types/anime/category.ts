import { IAnime, ITop10Anime } from './share'

export interface ICategoryAnimeData {
	success: boolean
	data: AnimeCategoryData
}

interface AnimeCategoryData {
	animes: IAnime[]
	genres: string[]
	top10Animes: Top10Animes
	category: string
	totalPages: number
	hasNextPage: boolean
	currentPage: number
}

interface Top10Animes {
	today: ITop10Anime[]
	week: ITop10Anime[]
	month: ITop10Anime[]
}
