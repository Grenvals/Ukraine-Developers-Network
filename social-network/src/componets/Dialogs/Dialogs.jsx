import React, { useEffect } from 'react';
import style from './Dialogs.module.scss';
import NotificationItem from './NotificationItem/NotificationItem';
import Chat from './Сhat/Сhat';
import { Head } from '../common/Head/Head';

const Dialogs = ({
  dialogs,
  messages,
  profile,
  sendMessage,
  getDialogsUsersList,
  getDialogMessages,
  match,
}) => {
  useEffect(() => {
    getDialogsUsersList();
  }, [getDialogsUsersList]);
  let activeDialogUserId = match.params.userId;
  let notificationItem = dialogs.map(d => (
    <NotificationItem
      key={d.id}
      id={d.id}
      hasNewMessages={d.hasNewMessages}
      userName={d.userName}
      userLogo={d.photos.small}
      newMessagesCount={d.newMessagesCount}
      lastUserActivity={d.lastUserActivityDate}
      getDialogMessages={getDialogMessages}
    />
  ));
  return (
    <div className={style.dialogs}>
      <Head title="Dialogs / Chat" />
      <ul className={style.notificationList}>{notificationItem}</ul>
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
  );
};

export default Dialogs;
