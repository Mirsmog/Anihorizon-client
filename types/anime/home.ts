import {
	ILatestCompletedAnime,
	ILatestEpisodeAnime,
	IMostFavoriteAnime,
	IMostPopularAnime,
	ISpotlightAnime,
	ITop10Anime,
	ITopAiringAnime,
	ITopUpcomingAnime,
	ITrendingAnime
} from './share'

export interface IHomeAnimeData {
	success: boolean
	data: IHomeData
}

interface IHomeData {
	top10Animes: ITop10Animes
	trendingAnimes: ITrendingAnime[]
	topAiringAnimes: ITopAiringAnime[]
	spotlightAnimes: ISpotlightAnime[]
	mostPopularAnimes: IMostPopularAnime[]
	topUpcomingAnimes: ITopUpcomingAnime[]
	mostFavoriteAnimes: IMostFavoriteAnime[]
	latestEpisodeAnimes: ILatestEpisodeAnime[]
	latestCompletedAnimes: ILatestCompletedAnime[]
	genres: string[]
}

interface ITop10Animes {
	today: ITop10Anime[]
	week: ITop10Anime[]
	month: ITop10Anime[]
}
