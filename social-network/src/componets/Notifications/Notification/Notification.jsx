import React from 'react';
import errorIcon from '../../../assets/images/notification/error.svg';
import notificationIcon from '../../../assets/images/notification/notification.svg';
import style from './Notification.module.scss';

export const Notification = ({ message, error }) => {
  return (
    <li className={style.notification}>
      <div className={style.notification__container}>
        <p className={style.notification__info}>{message}</p>
        <div className={style.notification__img}>
          <img src={error ? errorIcon : notificationIcon} alt="icon" />
        </div>
      </div>
    </li>
  );
};
