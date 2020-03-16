const UPDATE_NEW_POST_MESSAGE = 'UPDATE-NEW-POST-MESSAGE'
const ADD_POST = 'ADD-POST'

let profileReducer = (state, action) => {
  switch (action.type) {
    case 'ADD-POST':
      let newPost = {
        id: 5,
        message: state.newPostMessage,
        likes: 0,
      }
      state.posts.push(newPost)
      state.newPostMessage = ''
      return state
    case 'UPDATE-NEW-POST-MESSAGE':
      state.newPostMessage = action.message
      return state
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

export default profileReducer
