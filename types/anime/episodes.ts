export interface IEpisodesAnimeData {
	success: boolean
	data: IEpisodesData
}

export interface IEpisodeAnimeServersData {
	success: boolean
	data: IEpisodeServersData
}

export interface IEpisodeAnimeStreamingLinksData {
	success: boolean
	data: IEpisodeStreamingLinksData
}

interface IEpisodesData {
	totalEpisodes: number
	episodes: IEpisode[]
}

interface IEpisodeServersData {
	sub: IEpisodeServer[]
	dub: IEpisodeServer[]
	raw: IEpisodeServer[]
	episodeId: string
	episodeNo: number
}

interface IEpisodeStreamingLinksData {
	tracks: IEpisodeTrack[]
	intro: IEpisodeTimeRange
	outro: IEpisodeTimeRange
	sources: IEpisodeSource[]
	anilistID: number
	malID: number
}

interface IEpisodeTimeRange {
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
