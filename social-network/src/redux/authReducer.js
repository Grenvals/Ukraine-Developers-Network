import { authAPI } from '../api/api'
import { stopSubmit } from 'redux-form'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_LOADING_STATUS = 'SET_LOADING_STATUS'
const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

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
    case 'FOLLOW': {
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
    case 'UNFOLLOW': {
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
    case 'SET_LOADING_STATUS': {
      return {
        ...state,
        isLoading: action.loading,
      }
    }
    case 'SET_AUTH_USER_DATA': {
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

export const getAuthUserData = () => {
  return dispatch => {
    return authAPI.getAuthUserData().then(data => {
      if (data.data.resultCode === 0) {
        let { id, email, login } = data.data.data
        dispatch(setAuthUserData(id, email, login, true))
      }
    })
  }
}

export const logIn = (userEmail, userPassword, userRemember) => {
  return dispatch => {
    authAPI.logIn(userEmail, userPassword, userRemember).then(data => {
      console.log(data)
      if (data.resultCode === 0) {
        dispatch(getAuthUserData())
      } else {
        let message =
          data.messages.length > 0
            ? 'Error on server: ' + data.messages[0]
            : 'Errors, your login or emails are not valid'
        dispatch(stopSubmit('Login', { _error: message }))
      }
    })
  }
}

export const logOut = (userEmail, userPassword, userRemember) => {
  return dispatch => {
    authAPI.logOut().then(data => {
      console.log(data)
      if (data.resultCode === 0) {
        debugger
        dispatch(setAuthUserData(null, null, null, false))
      }
    })
  }
}

export default authReducer
