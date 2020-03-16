const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_DIALODS_MESSAGE = 'UPDATE-NEW-DIALODS-MESSAGE'

let dialogsReducer = (state, action) => {
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
