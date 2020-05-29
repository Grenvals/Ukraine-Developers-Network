import React from 'react';
import style from './UserItem.module.scss';
import { UserPhoto } from '../../../common/UserFoto/UserFoto';
import { NavLink } from 'react-router-dom';

const UserItem = ({ id, userLogo, userName, newMessagesCount }) => {
  return (
    <li className={style.userItem}>
      <NavLink className={style.userItem__link} to={'/dialogs/' + id} exact>
        <UserPhoto
          className={style.userItem__photo}
          photo={userLogo}
          count={newMessagesCount}
        />
        <p className={style.userItem__name}>{userName}</p>
      </NavLink>
    </li>
  );
};

export default UserItem;
