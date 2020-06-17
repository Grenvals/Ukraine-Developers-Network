import 'react-perfect-scrollbar/dist/css/styles.css';

import { Message } from './Message/Message';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Preloader } from '../../../common/Preloader/Preloader';
import React from 'react';
import style from './Messages.module.scss';

const Messages = ({ messages, profile, dialogs, activeDialogUserId }) => {
  let message = [];
  if (messages) {
    message = messages.map(m => (
      <Message
        key={m.id}
        body={m.body}
        addedAt={m.addedAt}
        senderId={m.senderId}
        userId={profile.userId}
        activeDialogUserId={activeDialogUserId}
        viewed={m.viewed}
        photo={profile != null && profile.photos.large}
        dialogs={dialogs}
      />
    ));
  }
  return (
    <div className={style.messages}>
      {messages !== null ? (
        <PerfectScrollbar className={style.messages__scrollbar} component="div">
          {messages.length < 1 && (
            <div className={style.messages__preview}>
              <p className={style.messages__quote}>
                The most important kind of freedom is to be what you really are... Write a
                message first...{' '}
                <span role="img" aria-label="smile">
                  🙂👨🏻‍🚀
                </span>
              </p>
            </div>
          )}
          <ul className={style.messages__list}>{message}</ul>
        </PerfectScrollbar>
      ) : (
        <Preloader />
      )}
    </div>
  );
};

export { Messages };
