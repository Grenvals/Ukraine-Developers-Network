import { authAPI } from '../api/api'

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
        ...action.data,
        isAuth: true,
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
export const setAuthUserData = (userId, email, login) => {
  return {
    type: SET_AUTH_USER_DATA,
    data: { userId, email, login },
  }
}

export const getAuthUserData = () => {
  return dispatch => {
    authAPI.getAuthUserData().then(data => {
      if (data.data.resultCode === 0) {
        let { id, email, login } = data.data.data
        dispatch(setAuthUserData(id, email, login))
      }
    })
  }
}

export default authReducer
