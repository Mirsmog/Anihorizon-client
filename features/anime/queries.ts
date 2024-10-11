import { useQuery } from '@tanstack/react-query'
import { getAnimeBySearchFilter, getAnimeBySearchSuggestion, getAnimeInfoById, getHomePage } from './api'
import { ISearchFilterAnimeParams } from '@/types/anime/search'

function useHomePage() {
	return useQuery({ queryKey: ['home'], queryFn: getHomePage })
}

function useAnimeInfo(animeId: string) {
	return useQuery({ queryKey: ['animeInfo', animeId], queryFn: () => getAnimeInfoById(animeId) })
}

function useAnimeSearchFilter(params: ISearchFilterAnimeParams) {
	return useQuery({
		queryKey: ['animeSearchFilter', params],
		queryFn: () => getAnimeBySearchFilter(params),
		enabled: !!params.q
	})
}

function useAnimeSearchSuggestion(query: string) {
	return useQuery({
		queryKey: ['animeSearchSuggestion', query],
		queryFn: () => getAnimeBySearchSuggestion(query),
		enabled: !!query
	})
}

export { useHomePage, useAnimeInfo, useAnimeSearchFilter, useAnimeSearchSuggestion }
