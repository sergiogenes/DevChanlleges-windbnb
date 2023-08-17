import { configureStore } from '@reduxjs/toolkit'
import locationReducer from './locationSlice'
import guestsReducer from './guestsSlice'

const store = configureStore({
  reducer: {
    location: locationReducer,
    guests: guestsReducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
