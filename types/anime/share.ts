export enum AnimeTypes {
	tv = 'TV',
	ona = 'ONA',
	ova = 'OVA',
	music = 'Music',
	movies = 'Movies',
	special = 'Special'
}

export interface IEpisodesCount {
	dub: number | null
	sub: number | null
}

export interface IAnimeSeason {
	id: string
	name: string
	title: string
	poster: string
	isCurrent: boolean
}

export interface IBaseAnime {
	id: string
	name: string
	jname: string
	poster: string
	episodes: IEpisodesCount
	type: AnimeTypes
}

export interface ILatestEpisodeAnime extends IBaseAnime {
	duration: string
	rating: string | null
}

export interface ISpotlightAnime extends IBaseAnime {
	rank: number
	description: string
	otherInfo: string[]
}

export interface ITrendingAnime extends IBaseAnime {
	rank: number
}

export interface IRelatedAnime extends IBaseAnime {}
export interface ITopAiringAnime extends IBaseAnime {}
export interface ITop10Anime extends Omit<ITrendingAnime, 'type'> {}
export interface IAnime extends ILatestEpisodeAnime {}
export interface IMostFavoriteAnime extends IBaseAnime {}
export interface IMostPopularAnime extends IBaseAnime {}
export interface ILatestCompletedAnime extends IBaseAnime {}
export interface ITopUpcomingAnime extends ILatestEpisodeAnime {}
export interface IRecommendedAnime extends ILatestEpisodeAnime {}
