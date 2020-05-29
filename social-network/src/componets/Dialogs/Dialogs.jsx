import React, { useEffect } from 'react';
import style from './Dialogs.module.scss';
import NotificationItem from './NotificationItem/NotificationItem';
import Chat from './Сhat/Сhat';
import { Head } from '../common/Head/Head';

const Dialogs = ({ dialogs, messages, profile, addMessage, getDialogsUsersList }) => {
  useEffect(() => {
    getDialogsUsersList();
  }, [getDialogsUsersList]);

  let notificationItem = dialogs.map(d => (
    <NotificationItem
      key={d.id}
      id={d.id}
      hasNewMessages={d.hasNewMessages}
      userName={d.userName}
      userLogo={d.photos.small}
      newMessagesCount={d.newMessagesCount}
      lastUserActivity={d.lastUserActivityDate}
    />
  ));
  return (
    <div className={style.dialogs}>
      <Head title="Dialogs / Chat" />
      <ul className={style.notificationList}>{notificationItem}</ul>
      <Chat messages={messages} addMessage={addMessage} profile={profile} />
    </div>
  );
};

export default Dialogs;
