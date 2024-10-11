import axios from 'axios'
import {
	IDetailsAnimeData,
	IHomeAnimeData,
	IScheduleAnimeData,
	ISearchFilterAnimeData,
	ISearchFilterAnimeParams,
	ISearchSuggestionAnimeData
} from '@/types'

const API_URL = 'https://aniwatch-api-v2.vercel.app/api/v2/hianime/'

const animeApi = axios.create({
	baseURL: API_URL
})

async function getHomePage() {
	const { data } = await animeApi.get<IHomeAnimeData>('/home')
	return data
}

async function getAnimeInfoById(id: string) {
	const { data } = await animeApi.get<IDetailsAnimeData>(`anime/${id}`)
	return data
}

async function getAnimeBySearchFilter(params: ISearchFilterAnimeParams) {
	const { data } = await animeApi.get<ISearchFilterAnimeData>('search', { params })
	return data
}

async function getAnimeBySearchSuggestion(query: string) {
	const { data } = await animeApi.get<ISearchSuggestionAnimeData>('search/suggestion', { params: { q: query } })
	return data
}

async function getAnimeScheduleByDate(date: string) {
	const { data } = await animeApi.get<IScheduleAnimeData>(`schedule?date=${date}`)
	return data
}

export { getHomePage, getAnimeInfoById, getAnimeScheduleByDate, getAnimeBySearchFilter, getAnimeBySearchSuggestion }
