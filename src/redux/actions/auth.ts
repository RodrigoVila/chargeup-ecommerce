import { Dispatch } from 'redux'
import { register, login, logout } from '@services'
import {
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  LOGIN_USER,
} from './types'

export const registerNewUser = (userInputs: UserType) => ({
  type: REGISTER_USER,
  userInputs,
})

export const successRegisterUser = (user: UserType) => ({
  type: REGISTER_USER_SUCCESS,
  user,
})

export const errorRegisterUser = (error: any) => ({
  type: REGISTER_USER_FAIL,
  error,
})

export const loginUser = (username: string, password: string) => ({
  type: LOGIN_USER,
  username,
  password,
})

export const successLoginUser = (username: string, password: string) => ({
  type: LOGIN_SUCCESS,
  username,
  password,
})

export const errorLoginUser = () => ({ type: LOGIN_FAIL })

export const logoutUser = () => ({ type: LOGOUT })
