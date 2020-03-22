import React from 'react'
import {
  addMessageActionCreator,
  onTextChangeActionCreator,
} from './../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import StoreContext from '../../redux/context-store'

const DialogsContainer = props => {
  return (
    <StoreContext>
      {store => {
        let state = store.getState()
        let dialogs = state.dialogsPage.dialogs
        let messages = state.dialogsPage.messages
        let newDialogMessage = state.dialogsPage.newDialogMessage
        let addMessage = () => {
          store.dispatch(addMessageActionCreator())
        }
        let onTextChange = text => {
          store.dispatch(onTextChangeActionCreator(text))
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
      }}
    </StoreContext>
  )
}

export default DialogsContainer
