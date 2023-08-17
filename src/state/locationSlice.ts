import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Location } from '../types'

const initialState: Location = 'Helsinki, Finland'

export const locationSlice = createSlice({
  name: 'location',
  initialState: initialState as Location,
  reducers: {
    setLocation: (
      _state: Location,
      action: PayloadAction<Location>,
    ): Location => {
      console.log('action from reducer =>', action)
      return action.payload
    },
  },
})

export const { setLocation } = locationSlice.actions

export default locationSlice.reducer
