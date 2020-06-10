import { Preloader } from '../../common/Preloader/Preloader';
import React from 'react';
import style from './UserCountPanel.module.scss';
import usersIcon from '../../../assets/images/nav/users.svg';

export const UserCountPanel = ({ userCount, userId }) => {
  return (
    <div className={style.userCount}>
      <h2 className={style.userCount__title}>Users count</h2>
      {userCount !== null ? (
        <div className={style.userCount__container}>
          <div className={style.userCount__total}>
            <span>{userCount}</span>
            <span className={style.userCount__label}>total</span>
            <img src={usersIcon} alt="users" />
          </div>
          <p className={style.userCount__small}>
            {userId ? 'User id: ' + userId : 'UDN'}
          </p>
          <p className={`${style.userCount__small} ${style.userCount__small_right}`}>
            v1.0.4
          </p>
        </div>
      ) : (
        <Preloader />
      )}
    </div>
  );
};
