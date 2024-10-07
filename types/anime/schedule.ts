export interface IScheduleAnimeData {
	success: boolean
	data: IScheduleData
}

interface IScheduleData {
	scheduledAnimes: IScheduleAnime[]
}

interface IScheduleAnime {
	id: string
	time: string
	name: string
	jname: string
	episode: number
	airingTimestamp: number
	secondsUntilAiring: number
}
