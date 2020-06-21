import React from 'react';

import cn from 'classnames';

import { UserPhoto } from '../../../../common/UserFoto/UserFoto';

import style from './Message.module.scss';

const Message = ({
  body,
  addedAt,
  senderId,
  userId,
  activeDialogUserId,
  viewed,
  photo,
  dialogs,
}) => {
  let userLogo = photo;
  if (senderId !== userId) {
    const user = dialogs.filter(e => e.id === senderId);
    userLogo = user[0].photos.small;
  }
  return (
    <li
      className={cn(style.message, {
        [style.message_authUser]: senderId === userId,
      })}>
      <UserPhoto
        className={cn(style.message__logo, {
          [style.message__logo_authUser]: senderId === userId,
        })}
        photo={userLogo}
      />
      <div className={style.message__item}>
        <p className={style.message__text}>{body}</p>
        <div className={style.message__date}>{addedAt}</div>
      </div>
    </li>
  );
};

export { Message };
