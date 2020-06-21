import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { useHistory } from 'react-router-dom';
import { compose } from 'redux';

import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {
  getAuthProfile,
  getDialogs,
  getDialogMessagesList,
} from '../../selectors/selectors';
import { Preloader } from '../common/Preloader/Preloader';
import {
  getDialogMessages,
  getDialogsUsersList,
  sendMessage,
} from './../../redux/dialogsReducer';
import { toogleRightSidebar } from './../../redux/sidebarReducer';
import { DialogsList } from './DialogsList/DialogsList';
import { Chat } from './Сhat/Сhat';

import style from './Dialogs.module.scss';

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
        getDialogMessages(activeDialogUserId);
      }
    }, [activeDialogUserId, getDialogMessages]);

    useEffect(() => {
      if (dialogs && !activeDialogUserId) {
        history.push('/dialogs/' + dialogs[0].id);
      }
    }, [activeDialogUserId, dialogs, history]);

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

const mapStateToProps = state => {
  return {
    dialogs: getDialogs(state),
    messages: getDialogMessagesList(state),
    profile: getAuthProfile(state),
  };
};

const DialogsContainer = compose(
  connect(mapStateToProps, {
    getDialogsUsersList,
    getDialogMessages,
    sendMessage,
    toogleRightSidebar,
  }),
  withAuthRedirect,
  withRouter
)(Dialogs);

export { DialogsContainer as Dialogs };
