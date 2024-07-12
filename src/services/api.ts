import axios from 'axios'

import {
	GenresT,
	TitleRequestOptionsT,
	TitleSearchRequestOptionsT,
	TitleT,
	TitlesDataT,
	YearsT
} from '@/types'

const API_URL = 'https://api.anilibria.tv/v3/'
const axiosInstance = axios.create({
	baseURL: API_URL
})

export const getLatestTitles = async () => {
	return await axiosInstance.get<TitlesDataT>('title/updates')
}
export const getRandomTitle = async () => {
	return await axiosInstance.get<TitleT>('title/random')
}
export const getFilterYears = async () => {
	return await axiosInstance.get<YearsT>('years')
}
export const getFilterGenres = async () => {
	return await axiosInstance.get<GenresT>('genres')
}

export const getTitleBySearch = async ({
	search
}: TitleSearchRequestOptionsT) => {
	if (!search) return
	return await axiosInstance.get<TitlesDataT>(
		`title/search?search=${search}&limit=50`
	)
}

export const getTitleByCode = async ({ code }: TitleRequestOptionsT) => {
	if (!code) return null
	return await axiosInstance.get<TitleT>(`title?code=${code}`)
}
