import { useQuery } from '@tanstack/react-query'

import {
	getFilterGenres,
	getFilterYears,
	getLatestTitles,
	getRandomTitle,
	getTitleByCode,
	getTitleBySearch
} from './api'
import { TitleRequestOptionsT, TitleSearchRequestOptionsT } from '@/types'

export function useSearchTitle({ search }: TitleSearchRequestOptionsT) {
	return useQuery({
		queryKey: ['search-titles', { search }],
		queryFn: () => getTitleBySearch({ search })
	})
}

export function useTitle({ code }: TitleRequestOptionsT) {
	return useQuery({
		queryKey: ['search-titles', { code }],
		queryFn: () => getTitleByCode({ code })
	})
}

export function useLatestTitles() {
	return useQuery({ queryKey: ['latest-titles'], queryFn: getLatestTitles })
}
export function useRandomTitle() {
	return useQuery({ queryKey: ['random-title'], queryFn: getRandomTitle })
}
export function useFilterYears() {
	return useQuery({ queryKey: ['years'], queryFn: getFilterYears })
}
export function useFilterGenres() {
	return useQuery({ queryKey: ['genres'], queryFn: getFilterGenres })
}
