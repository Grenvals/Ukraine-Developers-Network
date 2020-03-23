import React from 'react'
import {
  addMessageActionCreator,
  onTextChangeActionCreator,
} from './../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'

// const DialogsContainer = props => {
//   return (
//     <StoreContext>
//       {store => {
//         let state = store.getState()
//         let dialogs = state.dialogsPage.dialogs
//         let messages = state.dialogsPage.messages
//         let newDialogMessage = state.dialogsPage.newDialogMessage
//         let addMessage = () => {
//           store.dispatch(addMessageActionCreator())
//         }
//         let onTextChange = text => {
//           store.dispatch(onTextChangeActionCreator(text))
//         }
//         return (
//           <Dialogs
//             dialogs={dialogs}
//             messages={messages}
//             addMessage={addMessage}
//             onTextChange={onTextChange}
//             newDialogMessage={newDialogMessage}
//           />
//         )
//       }}
//     </StoreContext>
//   )
// }

let mapStateToProps = state => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newDialogMessage: state.dialogsPage.newDialogMessage,
  }
}

let mapDispatchToProps = dispatch => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator())
    },
    onTextChange: text => {
      dispatch(onTextChangeActionCreator(text))
    },
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
