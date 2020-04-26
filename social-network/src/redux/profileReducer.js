import { usersAPI, profileAPI } from '../api/api'
const UPDATE_NEW_POST_MESSAGE = 'UPDATE-NEW-POST-MESSAGE'
const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'

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
    case 'ADD-POST': {
      let newPost = {
        id: 5,
        message: state.newPostMessage,
        likes: 0,
      }
      return { ...state, newPostMessage: '', posts: [...state.posts, newPost] }
    }
    case 'UPDATE-NEW-POST-MESSAGE': {
      return { ...state, newPostMessage: action.message }
    }
    case 'SET_USER_PROFILE': {
      return { ...state, profile: action.profile }
    }
    case 'SET_USER_STATUS': {
      return { ...state, status: action.status }
    }
    default:
      return state
  }
}

export const addPostActionCreator = () => ({
  type: ADD_POST,
})
export const updateNewPostMessageActionCreator = message => ({
  type: UPDATE_NEW_POST_MESSAGE,
  message: message,
})
export const setUserProfile = profile => ({
  type: SET_USER_PROFILE,
  profile,
})
export const setUserStatus = status => ({
  type: SET_USER_STATUS,
  status,
})

export const getUserProfile = userId => {
  return dispatch => {
    usersAPI.getProfile(userId).then(data => {
      dispatch(setUserProfile(data))
    })
  }
}
export const getUserStatus = userId => {
  return dispatch => {
    profileAPI.getStatus(userId).then(data => {
      dispatch(setUserStatus(data))
    })
  }
}
export const updateUserStatus = status => {
  return dispatch => {
    profileAPI.updateStatus(status).then(data => {
      if (data.resultCode === 0) {
        dispatch(setUserStatus(status))
      }
    })
  }
}

export default profileReducer
