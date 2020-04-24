// import React from 'react'
import {
  addMessageActionCreator,
  onTextChangeActionCreator,
} from './../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'


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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(Dialogs) 
