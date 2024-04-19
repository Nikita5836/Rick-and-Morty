import { combineReducers } from '@reduxjs/toolkit'
import dataSlice from './features/getCharactersSlice/index.js'

const rootReducer = combineReducers({
	data: dataSlice,
})

export default rootReducer
