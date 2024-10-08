import { useQuery } from '@tanstack/react-query'
import { getAnimeInfoById, getHomePage } from './api'

function useHomePage() {
	return useQuery({ queryKey: ['home'], queryFn: getHomePage })
}

function useAnimeInfo(animeId: string) {
	return useQuery({ queryKey: ['animeInfo', animeId], queryFn: () => getAnimeInfoById(animeId) })
}

export { useHomePage, useAnimeInfo }
