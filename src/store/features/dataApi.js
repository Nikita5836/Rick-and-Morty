import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../api/api'

export const api = createApi({
	reducerPath: 'fetchData',
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: build => ({
		getCharacters: build.query({
			query: () => 'character',
		}),
	}),
})

export const { useGetCharactersQuery } = api
