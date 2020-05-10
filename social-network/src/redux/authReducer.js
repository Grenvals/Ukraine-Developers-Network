import { authAPI } from '../api/api'
import { stopSubmit } from 'redux-form'

const FOLLOW = 'auth/FOLLOW'
const UNFOLLOW = 'auth/UNFOLLOW'
const SET_LOADING_STATUS = 'auth/SET_LOADING_STATUS'
const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA'

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isLoading: true,
  users: [],
  errors: '',
}

let authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'auth/FOLLOW': {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return { ...u, followed: true }
          }
          return u
        }),
      }
    }
    case 'auth/UNFOLLOW': {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return { ...u, followed: false }
          }
          return u
        }),
      }
    }
    case 'auth/SET_LOADING_STATUS': {
      return {
        ...state,
        isLoading: action.loading,
      }
    }
    case 'auth/SET_AUTH_USER_DATA': {
      return {
        ...state,
        ...action.payload,
      }
    }
    default:
      return state
  }
}

export const follow = userID => ({
  type: FOLLOW,
  userID,
})
export const unfollow = userID => {
  return {
    type: UNFOLLOW,
    userID,
  }
}
export const setLoadingStatus = loadingStatus => ({
  type: SET_LOADING_STATUS,
  loading: loadingStatus,
})
export const setAuthUserData = (userId, email, login, isAuth) => {
  return {
    type: SET_AUTH_USER_DATA,
    payload: { userId, email, login, isAuth },
  }
}

export const getAuthUserData = () => async dispatch => {
  let response = await authAPI.getAuthUserData()
  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data
    dispatch(setAuthUserData(id, email, login, true))
  }
}

export const logIn = (
  userEmail,
  userPassword,
  userRemember
) => async dispatch => {
  let response = await authAPI.logIn(userEmail, userPassword, userRemember)
  if (response.resultCode === 0) {
    dispatch(getAuthUserData())
  } else {
    let message =
      response.data.messages.length > 0
        ? 'Error on server: ' + response.messages[0]
        : 'Errors, your login or emails are not valid'
    dispatch(stopSubmit('Login', { _error: message }))
  }
}

export const logOut = (
  userEmail,
  userPassword,
  userRemember
) => async dispatch => {
  let response = await authAPI.logOut()
  if (response.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}

export default authReducer
