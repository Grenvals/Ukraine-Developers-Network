const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_DIALODS_MESSAGE = 'UPDATE-NEW-DIALODS-MESSAGE'

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
        message: state.newDialogMessage,
      }

      return {
        ...state,
        newDialogMessage: '',
        messages: [...state.messages, newMessage],
      }
    }

    case 'UPDATE-NEW-DIALODS-MESSAGE': {
      return { ...state, newDialogMessage: action.message }
    }
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
