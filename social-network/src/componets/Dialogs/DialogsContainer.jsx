// import React from 'react'
import {
  addMessageActionCreator,
  onTextChangeActionCreator,
} from './../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'

let mapStateToProps = state => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newDialogMessage: state.dialogsPage.newDialogMessage,
    isAuth: state.auth.isAuth,
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
