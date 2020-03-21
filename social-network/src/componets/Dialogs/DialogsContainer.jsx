import React from 'react'
import {
  addMessageActionCreator,
  onTextChangeActionCreator,
} from './../../redux/dialogsReducer'
import Dialogs from './Dialogs'

const DialogsContainer = props => {
  debugger
  let state = props.store.getState()
  let dialogs = state.dialogsPage.dialogs
  let messages = state.dialogsPage.messages
  let newDialogMessage = state.dialogsPage.newDialogMessage
  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator())
  }
  let onTextChange = text => {
    props.store.dispatch(onTextChangeActionCreator(text))
  }
  return (
    <Dialogs
      dialogs={dialogs}
      messages={messages}
      addMessage={addMessage}
      onTextChange={onTextChange}
      newDialogMessage={newDialogMessage}
    />
  )
}

export default DialogsContainer
