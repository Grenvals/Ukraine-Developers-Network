const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
  users: [],
}

let usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FOLLOW': {
      debugger
      console.log(action.userID)
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
      console.log(action.userID)
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
        users: [...state.users, ...action.users],
      }
    }
    default:
      return state
  }
}

export const followAC = userID => ({
  type: FOLLOW,
  userID,
})
export const unfollowAC = userID => {
  return {
    type: UNFOLLOW,
    userID,
  }
}
export const setUsersAC = users => ({
  type: SET_USERS,
  users,
})

export default usersReducer
