import { usersAPI } from '../api/api'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_LOADING_STATUS = 'SET_LOADING_STATUS'
const TOOGLE_FOLLOWNG_PROGRESS = 'TOOGLE_FOLLOWNG_PROGRESS'

let initialState = {
  users: [],
  pageSize: 7,
  totalUsersCount: 0,
  currentPage: 2,
  isLoading: true,
  followingInProgress: [],
}

let usersReducer = (state = initialState, action) => {
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
    case 'SET_USERS': {
      return {
        ...state,
        users: action.users,
      }
    }
    case 'SET_CURRENT_PAGE': {
      return {
        ...state,
        currentPage: action.currentPage,
      }
    }
    case 'SET_TOTAL_USERS_COUNT': {
      return {
        ...state,
        totalUsersCount: action.count,
      }
    }
    case 'SET_LOADING_STATUS': {
      return {
        ...state,
        isLoading: action.loading,
      }
    }
    case 'TOOGLE_FOLLOWNG_PROGRESS': {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : [...state.followingInProgress.filter(id => id !== action.userId)],
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
export const setUsers = users => ({
  type: SET_USERS,
  users,
})
export const setCurrentPage = currentPage => ({
  type: SET_CURRENT_PAGE,
  currentPage: currentPage,
})
export const setTotalUsersCount = totalUsersCount => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
})
export const setLoadingStatus = loadingStatus => ({
  type: SET_LOADING_STATUS,
  loading: loadingStatus,
})
export const toogleFollowingProgress = (userId, isFetching) => ({
  type: TOOGLE_FOLLOWNG_PROGRESS,
  userId: userId,
  isFetching: isFetching,
})

export const getUsers = (currentPage, pageSize) => {
  return dispatch => {
    dispatch(setLoadingStatus(true))
    usersAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(setUsers(data.items))
      dispatch(setTotalUsersCount(data.totalCount))
      dispatch(setLoadingStatus(false))
    })
  }
}

export const followUser = userId => {
  return dispatch => {
    dispatch(toogleFollowingProgress(userId, true))
    usersAPI.followUser(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(follow(userId))
      }
      dispatch(toogleFollowingProgress(userId, false))
    })
  }
}

export const unfollowUser = userId => {
  return dispatch => {
    dispatch(toogleFollowingProgress(userId, true))
    usersAPI.unfollowUser(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(unfollow(userId))
      }
      dispatch(toogleFollowingProgress(userId, false))
    })
  }
}

export default usersReducer
