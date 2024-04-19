import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL, CHARACTERS } from '../../../api/api'

export const getCharacters = createAsyncThunk(
	'data/getCharacters',
	async (page, thunkAPI) => {
		try {
			const res = await axios.get(`${BASE_URL + CHARACTERS}?page=${page}`)
			const result = res.data.results
			return result
		} catch (error) {
			return thunkAPI.rejectWithValue({ error: error.message })
		}
	}
)

const initialState = {
	data: [],
	loading: false,
	error: null,
}

const dataSlice = createSlice({
	name: 'data',
	initialState,
	reducers: {},
	extraReducers: {
		[getCharacters.pending]: state => {
			state.loading = true
		},
		[getCharacters.fulfilled]: (state, action) => {
			state.loading = false
			state.fulfilled = action.payload
			state.error = null
		},
		[getCharacters.rejected]: (state, action) => {
			state.loading = false
			state.error = action.payload.error
		},
	},
})

export default dataSlice
