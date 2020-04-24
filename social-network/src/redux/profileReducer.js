import { usersAPI } from '../api/api'
const UPDATE_NEW_POST_MESSAGE = 'UPDATE-NEW-POST-MESSAGE'
const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
  profile: null,
  posts: [
    { id: 1, message: 'Hi, how are you?', likes: 11 },
    { id: 2, message: 'You can do it!', likes: 22 },
    { id: 3, message: 'Lets study React', likes: 5 },
  ],
  newPostMessage: '',
}

let profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD-POST': {
      debugger
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

export const getUserProfile = userId => {
  return dispatch => {
    usersAPI.getProfile(userId).then(data => {
      debugger
      dispatch(setUserProfile(data))
    })
  }
}

export default profileReducer
