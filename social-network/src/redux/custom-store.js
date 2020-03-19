import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import sidebarReducer from './sidebarReducer'

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
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)
    this._callSubscriber(this._state)
  },
}

export default store
