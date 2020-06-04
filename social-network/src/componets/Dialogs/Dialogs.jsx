import React, { useEffect } from 'react';
import {
  getDialogMessages,
  getDialogsUsersList,
  sendMessage,
} from './../../redux/dialogsReducer';

import { Chat } from './Сhat/Сhat';
import { DialogsList } from './DialogsList/DialogsList';
import { compose } from 'redux';
import { connect } from 'react-redux';
import style from './Dialogs.module.scss';
import { toogleRightSidebar } from './../../redux/sidebarReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { withRouter } from 'react-router';

const Dialogs = ({
  dialogs,
  messages,
  profile,
  sendMessage,
  getDialogsUsersList,
  getDialogMessages,
  toogleRightSidebar,
  match,
}) => {
  useEffect(() => {
    getDialogsUsersList();
  }, [getDialogsUsersList]);
  useEffect(() => {
    toogleRightSidebar(false);
  }, [toogleRightSidebar]);
  let activeDialogUserId = match.params.userId;
  return (
    <div className={style.dialogs}>
      <div className={style.dialogs__container}>
        <DialogsList
          dialogs={dialogs}
          getDialogsUsersList={getDialogsUsersList}
          getDialogMessages={getDialogMessages}
        />
        {profile && (
          <Chat
            messages={messages}
            sendMessage={sendMessage}
            profile={profile}
            activeDialogUserId={activeDialogUserId}
            dialogs={dialogs}
          />
        )}
      </div>
    </div>
  );
};

let mapStateToProps = state => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    profile: state.auth.profile,
  };
};

export const DialogsContainer = compose(
  connect(mapStateToProps, {
    getDialogsUsersList,
    getDialogMessages,
    sendMessage,
    toogleRightSidebar,
  }),
  withAuthRedirect,
  withRouter
)(Dialogs);
