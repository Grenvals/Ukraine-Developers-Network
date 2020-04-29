const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
  dialogs: [
    {
      id: 0,
      userName: 'Anton Demin',
      messageCount: 4,
      lastMessage: 'Great, I’ll see you tomorrow!...',
    },
    {
      id: 1,
      userName: 'Alexander Dmitriew',
      messageCount: 5,
      lastMessage: 'Great, I’ll see you tomorrow!...',
    },
    {
      id: 2,
      userName: 'Nicolas Volodin',
      messageCount: 2,
      lastMessage: 'Hi Elaine! I have a question...',
    },
    {
      id: 3,
      userName: 'Garold Insbruck',
      messageCount: 1,
      lastMessage: 'Great, I’ll see you tomorrow!...',
    },
  ],
  messages: [
    { id: 0, message: 'Good food!' },
    { id: 1, message: 'Please buy the food!' },
  ],
  newDialogMessage: '',
}

let dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD-MESSAGE': {
      let newMessage = {
        id: 5,
        message: action.message,
      }
      return {
        ...state,
        newDialogMessage: '',
        messages: [...state.messages, newMessage],
      }
    }
    default:
      return state
  }
}

export const addMessageActionCreator = message => ({
  type: ADD_MESSAGE,
  message: message,
})

export default dialogsReducer
