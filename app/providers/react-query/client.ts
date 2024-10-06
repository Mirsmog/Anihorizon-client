import { QueryClient } from '@tanstack/react-query'

const client = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 60 * 1000,
			refetchOnWindowFocus: false
		}
	}
})

export default client
