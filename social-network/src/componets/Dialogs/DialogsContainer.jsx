// import React from 'react'
import { addMessage } from './../../redux/dialogsReducer';
import { getDialogsUsersList } from './../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = state => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    profile: state.auth.profile,
  };
};

export default compose(
  connect(mapStateToProps, {
    addMessage,
    getDialogsUsersList,
  }),
  withAuthRedirect
)(Dialogs);
