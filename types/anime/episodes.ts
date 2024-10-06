export interface IAnimeEpisodes {
	success: boolean
	data: AnimeEpisodesData
}

export interface IAnimeEpisodeServers {
	success: boolean
	data: AnimeEpisodeServersData
}

export interface IAnimeEpisodeStreamingLinks {
	success: boolean
	data: AnimeEpisodeStreamingLinksData
}

interface AnimeEpisodesData {
	totalEpisodes: number
	episodes: IEpisode[]
}

interface AnimeEpisodeServersData {
	sub: IEpisodeServer[]
	dub: IEpisodeServer[]
	raw: IEpisodeServer[]
	episodeId: string
	episodeNo: number
}

interface AnimeEpisodeStreamingLinksData {
	tracks: IEpisodeTrack[]
	intro: EpisodeTimeRange
	outro: EpisodeTimeRange
	sources: IEpisodeSource[]
	anilistID: number
	malID: number
}

interface EpisodeTimeRange {
	start: number
	end: number
}

interface IEpisode {
	title: string
	episodeId: string
	number: number
	isFiller: boolean
}

interface IEpisodeTrack {
	file: string
	kind: string
	label?: string
	default?: boolean
}

interface IEpisodeSource {
	url: string
	type: string
}

interface IEpisodeServer {
	serverId: number
	serverName: string
}
