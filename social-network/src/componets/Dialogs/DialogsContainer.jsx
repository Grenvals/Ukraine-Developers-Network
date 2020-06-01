import {
  getDialogMessages,
  getDialogsUsersList,
  sendMessage,
} from './../../redux/dialogsReducer';

import Dialogs from './Dialogs';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { withRouter } from 'react-router';

let mapStateToProps = state => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    profile: state.auth.profile,
  };
};

export default compose(
  connect(mapStateToProps, {
    getDialogsUsersList,
    getDialogMessages,
    sendMessage,
  }),
  withAuthRedirect,
  withRouter
)(Dialogs);
