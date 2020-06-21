import React from 'react';
import { NavLink } from 'react-router-dom';

import { UserPhoto } from '../../../common/UserFoto/UserFoto';

import style from './UserItem.module.scss';

const UserItem = ({ id, userLogo, userName, newMessagesCount, openDialogWithUser }) => {
  const handleClick = () => {
    openDialogWithUser(id);
  };
  return (
    <li className={style.userItem}>
      <NavLink
        className={style.userItem__link}
        to={'/dialogs/' + id}
        onClick={handleClick}
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

export { UserItem };
