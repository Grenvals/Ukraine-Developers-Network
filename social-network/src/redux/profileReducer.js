import { usersAPI, profileAPI } from '../api/api'
const ADD_POST = 'profile/ADD-POST'
const DELETE_POST = 'profile/DELETE-POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_USER_STATUS = 'profile/SET_USER_STATUS'

let initialState = {
  profile: null,
  posts: [
    { id: 1, message: 'Hi, how are you?', likes: 11 },
    { id: 2, message: 'You can do it!', likes: 22 },
    { id: 3, message: 'Lets study React', likes: 5 },
  ],
  newPostMessage: '',
  status: '',
}

let profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'profile/ADD-POST': {
      let newPost = {
        id: 5,
        message: action.message,
        likes: 0,
      }
      return { ...state, newPostMessage: '', posts: [...state.posts, newPost] }
    }
    case 'profile/DELETE-POST': {
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.id),
      }
    }
    case 'profile/SET_USER_PROFILE': {
      return { ...state, profile: action.profile }
    }
    case 'profile/SET_USER_STATUS': {
      return { ...state, status: action.status }
    }
    default:
      return state
  }
}

export const addPostActionCreator = message => ({
  type: ADD_POST,
  message: message,
})
export const deletePostActionCreator = id => ({
  type: DELETE_POST,
  id: id,
})
export const setUserProfile = profile => ({
  type: SET_USER_PROFILE,
  profile,
})
export const setUserStatus = status => ({
  type: SET_USER_STATUS,
  status,
})

export const getUserProfile = userId => async dispatch => {
  let response = await usersAPI.getProfile(userId)
  dispatch(setUserProfile(response))
}

export const getUserStatus = userId => async dispatch => {
  let response = await profileAPI.getStatus(userId)
  dispatch(setUserStatus(response))
}

export const updateUserStatus = status => async dispatch => {
  let response = await profileAPI.updateStatus(status)
  if (response.resultCode === 0) {
    dispatch(setUserStatus(status))
  }
}

export default profileReducer
