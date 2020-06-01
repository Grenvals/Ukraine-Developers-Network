import { NavLink } from 'react-router-dom';
import React from 'react';
import { UserPhoto } from '../../../common/UserFoto/UserFoto';
import style from './UserItem.module.scss';

const UserItem = ({ id, userLogo, userName, newMessagesCount, openDialogWithUser }) => {
  return (
    <li className={style.userItem}>
      <NavLink
        className={style.userItem__link}
        to={'/dialogs/' + id}
        onClick={() => {
          openDialogWithUser(id);
        }}
        exact>
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
