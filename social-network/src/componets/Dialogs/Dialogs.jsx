import React, { useEffect } from 'react';
import {
  getDialogMessages,
  getDialogsUsersList,
  sendMessage,
} from './../../redux/dialogsReducer';

import { Chat } from './Сhat/Сhat';
import { DialogsList } from './DialogsList/DialogsList';
import { Preloader } from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { connect } from 'react-redux';
import style from './Dialogs.module.scss';
import { toogleRightSidebar } from './../../redux/sidebarReducer';
import { useHistory } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { withRouter } from 'react-router';

const Dialogs = React.memo(
  ({
    dialogs,
    messages,
    profile,
    sendMessage,
    getDialogsUsersList,
    getDialogMessages,
    toogleRightSidebar,
    match,
  }) => {
    const history = useHistory();
    let activeDialogUserId = match.params.userId;
    useEffect(() => {
      if (activeDialogUserId) {
        console.log('1');
        getDialogMessages(activeDialogUserId);
      }
    }, [activeDialogUserId, getDialogMessages]);
    useEffect(() => {
      if (dialogs) {
        console.log('2');
        history.push('/dialogs/' + dialogs[0].id);
      }
    }, [dialogs, history]);
    useEffect(() => {
      getDialogsUsersList();
    }, [getDialogsUsersList]);
    useEffect(() => {
      toogleRightSidebar(false);
    }, [toogleRightSidebar]);
    return (
      <div className={style.dialogs}>
        {dialogs && profile ? (
          <div className={style.dialogs__container}>
            <DialogsList dialogs={dialogs} getDialogsUsersList={getDialogsUsersList} />
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
        ) : (
          <Preloader />
        )}
      </div>
    );
  }
);

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
