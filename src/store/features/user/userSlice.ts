import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type LoginPayload = {
  data: {
    id: string
    email: string
  }, 
  auth: {
    token: string,
  }
}

type UserState = {
  data: {
    id: string
    email: string
  }, 
  auth: {
    token: string,
    isAuth: boolean
  }
}

const initialState: UserState = {
  data: {
    id: '',
    email: '',
  }, 
  auth: {
    token: '',
    isAuth: false
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginPayload>) => {
      state.auth = {
        token: action.payload.auth.token,
        isAuth: true
      }
      state.data = action.payload.data
    },

    logout: state => {
      const newState = {...initialState}
      state.data = newState.data
      state.auth = newState.auth
    }
  }
})

export const selectUser = (state: {user: UserState}) => state.user
export const { login, logout } = userSlice.actions

export default userSlice.reducer