import { createSlice } from '@reduxjs/toolkit'
import { Profile } from 'models'

export interface AuthState {
  isLoggedIn: boolean
  logging: boolean
  isLoading: boolean
  user: Profile | {}
}

const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  isLoading: false,
  user: {},
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
})

const { actions, reducer } = authSlice

export const authAction = actions

export default reducer
