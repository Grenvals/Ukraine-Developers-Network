import 'react-perfect-scrollbar/dist/css/styles.css';

import { ChatMessageForm } from './ChatMessageForm/ChatMessageForm';
import { Head } from '../../common/Head/Head';
import { Message } from './Message/Message';
import PerfectScrollbar from 'react-perfect-scrollbar';
import React from 'react';
import style from './Chat.module.scss';

export const Chat = props => {
  let messageBlock = props.messages.map(m => (
    <Message
      key={m.id}
      body={m.body}
      addedAt={m.addedAt}
      senderId={m.senderId}
      userId={props.profile.userId}
      activeDialogUserId={props.activeDialogUserId}
      viewed={m.viewed}
      photo={props.profile != null && props.profile.photos.large}
      dialogs={props.dialogs}
    />
  ));
  return (
    <div className={style.chat}>
      <Head title="Messages" />
      <div className={style.chat__wrap}>
        <PerfectScrollbar className="scrollbar" component="div">
          <ul className={style.chat__list}>{messageBlock}</ul>
        </PerfectScrollbar>
      </div>
      <ChatMessageForm
        sendMessage={props.sendMessage}
        activeDialogUserId={props.activeDialogUserId}
      />
    </div>
  );
};
