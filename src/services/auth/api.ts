import axios from 'axios'

const API_URL = 'http://localhost:4200/'
const axiosInstance = axios.create({
	baseURL: API_URL
})

export const getProfile = async (token: string) => {
	return await axiosInstance.get('user', {
		headers: { Authorization: `Bearer ${token}` }
	})
}
