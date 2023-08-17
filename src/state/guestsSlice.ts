import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: number = 0

const guestsSlice = createSlice({
  name: 'guests',
  initialState,
  reducers: {
    setGuests: (_state: number, action: PayloadAction<number>): number => {
      return action.payload
    },
  },
})

export const { setGuests } = guestsSlice.actions

export default guestsSlice.reducer
