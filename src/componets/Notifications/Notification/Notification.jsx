import React from 'react';

import cn from 'classnames';

import errorIcon from '../../../assets/images/notification/error.svg';
import notificationIcon from '../../../assets/images/notification/notification.svg';

import style from './Notification.module.scss';

const Notification = ({ message, error }) => {
  return (
    <li className={style.notification}>
      <div className={style.notification__container}>
        <p
          className={cn(style.notification__info, {
            [style.notification__info_error]: error,
          })}>
          {message}
        </p>
        <div className={style.notification__img}>
          <img src={error ? errorIcon : notificationIcon} alt="icon" />
        </div>
      </div>
    </li>
  );
};

export { Notification };
