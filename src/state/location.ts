import { PayloadAction, createAction, createReducer } from '@reduxjs/toolkit'

export const setLocation = createAction<initialLocation>('SET_LOCATION')

type initialLocation =
  | 'Helsinki, Finland'
  | 'Turku, Finland'
  | 'Oulu, Finland'
  | 'Vaasa, Finland'

const initialState: initialLocation = 'Helsinki, Finland'

const locationReducer = createReducer(initialState, {
  ['SET_LOCATION']: (state, action: PayloadAction) => {
    location: action.payload
  },
})

export default locationReducer
