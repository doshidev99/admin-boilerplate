import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import authReducer from 'features/auth/authSlice'

const rootReducer = combineReducers({
  auth: authReducer,
})
export const store = configureStore({
  reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
