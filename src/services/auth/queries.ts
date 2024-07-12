import { useQuery } from '@tanstack/react-query'

import { getProfile } from './api'

export function useProfile(token: string) {
	return useQuery({ queryKey: ['profile'], queryFn: () => getProfile(token) })
}
