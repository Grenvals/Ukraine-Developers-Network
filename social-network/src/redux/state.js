const UPDATE_NEW_POST_MESSAGE = 'UPDATE-NEW-POST-MESSAGE'
const ADD_POST = 'ADD-POST'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_DIALODS_MESSAGE = 'UPDATE-NEW-DIALODS-MESSAGE'

let store = {
  _state: {
    dialogsPage: {
      dialogs: [
        {
          id: 1,
          userName: 'Anton Demin',
          messageCount: 4,
          lastMessage: 'Great, I’ll see you tomorrow!...',
        },
        {
          id: 2,
          userName: 'Alexander Dmitriew',
          messageCount: 5,
          lastMessage: 'Great, I’ll see you tomorrow!...',
        },
        {
          id: 3,
          userName: 'Nicolas Volodin',
          messageCount: 2,
          lastMessage: 'Hi Elaine! I have a question...',
        },
        {
          id: 4,
          userName: 'Garold Insbruck',
          messageCount: 1,
          lastMessage: 'Great, I’ll see you tomorrow!...',
        },
      ],
      messages: [
        { id: 1, message: 'Good food!' },
        { id: 2, message: 'Please buy the food!' },
      ],
      newDialogMessage: '',
    },
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likes: 11 },
        { id: 2, message: 'You can do it!', likes: 22 },
        { id: 3, message: 'Lets study React', likes: 5 },
      ],
      newPostMessage: '',
    },
    sidebar: {
      friends: [
        { id: 1, name: 'Ihor', messagesCount: 2 },
        { id: 1, name: 'Anton', messagesCount: 5 },
        { id: 1, name: 'Nicolas', messagesCount: 1 },
        { id: 1, name: 'Garold', messagesCount: 10 },
      ],
    },
  },
  _callSubscriber(state) {
    console.log('state changed')
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer // Паттерн наблюдатель, observer // publisher-subscribe (eddEventListener)
  },
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostMessage,
        likes: 0,
      }
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostMessage = ''
      this._callSubscriber(this._state)
    } else if (action.type === 'ADD-MESSAGE') {
      let newMessage = {
        id: 5,
        message: this._state.dialogsPage.newDialogMessage,
      }
      this._state.dialogsPage.messages.push(newMessage)
      this._state.dialogsPage.newDialogMessage = ''
      this._callSubscriber(this._state)
    } else if (action.type === 'UPDATE-NEW-POST-MESSAGE') {
      this._state.profilePage.newPostMessage = action.message
      this._callSubscriber(this._state)
    } else if (action.type === 'UPDATE-NEW-DIALODS-MESSAGE') {
      this._state.dialogsPage.newDialogMessage = action.message
      this._callSubscriber(this._state)
    }
  },
}

export const addPostActionCreator = message => ({
  type: ADD_POST,
  message: message,
})
export const updateNewPostMessageActionCreator = message => ({
  type: UPDATE_NEW_POST_MESSAGE,
  message: message,
})

export const addMessageActionCreator = message => ({
  type: ADD_MESSAGE,
  message: message,
})

export const onTextChangeActionCreator = message => ({
  type: UPDATE_NEW_DIALODS_MESSAGE,
  message: message,
})

export default store
