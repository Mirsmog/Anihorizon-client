export interface AnimeDedailInfo {
	anime: AnimeDedailInfo
	seasons: AnimeInfoSeason[]
	mostPopularAnimes: AnimeInfoMostPopular[]
	relatedAnimes: AnimeInfoRelated[]
	recommended: AnimeInfoRecommended[]
}

export interface AnimeInfo {
	info: {
		id: string
		anilistId: number
		name: string
		poster: string
		description: string
		stats: {
			rating: string
			quality: 'SD' | 'HD'
		}
		episodes: IEpisodes
	}
	moreInfo: {}
}

export interface AnimeInfoSeason {
	id: string
	name: string
	title: string
	poster: string
	isCurrent: boolean
}

export interface AnimeInfoMostPopular {
	id: string
	name: string
	jname: string
	poster: string
	episodes: IEpisodes
	type: AnimeTypes
}

export interface AnimeInfoRelated extends AnimeInfoMostPopular {}

export interface AnimeInfoRecommended extends AnimeInfoMostPopular {
	duration: string
	rating: string | null
}

// ====================
// ==== GOOD TYPES ====
// ====================

export enum AnimeTypes {
	movies = 'Movies',
	tv = 'TV',
	ova = 'OVA',
	ona = 'ONA',
	special = 'Special',
	music = 'Music'
}

export interface IEpisodes {
	dub: number | null
	sub: number | null
}
