const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_DIALODS_MESSAGE = 'UPDATE-NEW-DIALODS-MESSAGE'

let initialState = {
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
}

let dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD-MESSAGE':
      let newMessage = {
        id: 5,
        message: state.newDialogMessage,
      }
      state.messages.push(newMessage)
      state.newDialogMessage = ''
      return state
    case 'UPDATE-NEW-DIALODS-MESSAGE':
      state.newDialogMessage = action.message
      return state
    default:
      return state
  }
}

export const addMessageActionCreator = () => ({
  type: ADD_MESSAGE,
})

export const onTextChangeActionCreator = message => ({
  type: UPDATE_NEW_DIALODS_MESSAGE,
  message: message,
})

export default dialogsReducer
