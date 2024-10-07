import { IAnime, ITopAiringAnime } from './share'

export interface IGenreAnimeData {
	success: boolean
	data: IGenreData
}

interface IGenreData {
	animes: IAnime[]
	genres: string[]
	topAiringAnimes: ITopAiringAnime[]
	totalPages: number
	hasNextPage: boolean
	currentPage: number
}
