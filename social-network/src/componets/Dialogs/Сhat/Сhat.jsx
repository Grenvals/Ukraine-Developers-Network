import 'react-perfect-scrollbar/dist/css/styles.css';

import { ChatMessageForm } from './ChatMessageForm/ChatMessageForm';
import { Head } from '../../common/Head/Head';
import { Messages } from './Messages/Messages';
import React from 'react';
import style from './Chat.module.scss';

const Chat = ({ messages, profile, dialogs, activeDialogUserId, sendMessage }) => {
  return (
    <div className={style.chat}>
      <Head title="Messages" />
      <Messages
        messages={messages}
        profile={profile}
        dialogs={dialogs}
        activeDialogUserId={activeDialogUserId}
      />
      <ChatMessageForm
        sendMessage={sendMessage}
        activeDialogUserId={activeDialogUserId}
      />
    </div>
  );
};

export { Chat };
