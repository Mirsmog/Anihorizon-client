import { AnimeTypes, IAnimeSeason, IEpisodesCount, IMostFavoriteAnime, IRecommendedAnime, IRelatedAnime } from './share'

export interface IDetailsAnimeData {
	success: boolean
	data: IDetailsData
}

interface IDetailsData {
	anime: IAnime
	seasons: IAnimeSeason[]
	mostPopularAnimes: IMostFavoriteAnime[]
	relatedAnimes: IRelatedAnime[]
	recommendedAnimes: IRecommendedAnime[]
}

interface IAnime {
	info: IAnimeInfo
	moreInfo: IAnimeMoreInfo
}

interface IAnimeInfo {
	id: string
	name: string
	poster: string
	description: string
	anilistId: number
	malId: number
	stats: IAnimeInfoStats
	promotionalVideos: IPromotionalVideo[]
}

interface IAnimeMoreInfo {
	japanese: string
	synonyms: string
	aired: string
	primiered: string
	duration: string
	status: string
	malscore: string
	genres: string[]
	producers: string[]
	studios: string
}

interface IAnimeInfoStats {
	rating: string
	quality: 'HD' | 'SD'
	type: AnimeTypes
	duration: string
	episodes: IEpisodesCount[]
}

interface IPromotionalVideo {
	title: string
	source: string
	thumbnail: string
}
