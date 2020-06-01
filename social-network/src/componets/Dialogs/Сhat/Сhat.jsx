import React from 'react';
import style from './Chat.module.scss';
import MessagesBlock from './MessagesBlock/MessagesBlock';
import ChatMessageForm from './ChatMessageForm/ChatMessageForm';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { Head } from '../../common/Head/Head';

const Chat = props => {
  let messageBlock = props.messages.map(m => (
    <MessagesBlock
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
      <div className={style.chatBlock}>
        <PerfectScrollbar className="scrollbar" component="div">
          <ul className={style.chatList}>{messageBlock}</ul>
        </PerfectScrollbar>
      </div>
      <ChatMessageForm
        sendMessage={props.sendMessage}
        activeDialogUserId={props.activeDialogUserId}
      />
    </div>
  );
};

export default Chat;
