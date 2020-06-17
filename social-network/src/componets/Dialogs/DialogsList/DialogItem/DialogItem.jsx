import { NavLink } from 'react-router-dom';
import React from 'react';
import { UserPhotoLink } from '../../../common/UserFoto/UserFoto';
import style from './DialogItem.module.scss';

const DialogItem = ({ id, userName, userLogo, newMessagesCount, lastUserActivity }) => {
  return (
    <li className={style.dialogItem}>
      <NavLink
        className={style.dialogItem__link}
        activeClassName={style.dialogItem__link_active}
        to={'/dialogs/' + id}
        onClick={() => {}}>
        exact
        <UserPhotoLink
          className={style.dialogItem__logo}
          photo={userLogo}
          count={newMessagesCount}
          link={'/profile/' + id}
        />
        <div className={style.dialogItem__container}>
          <p className={style.dialogItem__name}>{userName}</p>
          <div className={style.dialogItem__activity}>
            last activity: <span>{lastUserActivity}</span>
          </div>
        </div>
        <svg className={style.dialogItem__messageIcon} viewBox="0 0 40 32">
          <path d="M24.381 7.621h-21.333c-1.378 0-3.048 1.606-3.048 3.046v13.716c0 1.443 1.67 3.048 3.048 3.048v4.57l12.19-4.568v-3.051l-9.143 3.051v-3.051h-3.048v-13.714h21.333v16.763c1.378 0 3.048-1.605 3.048-3.048v-13.716c0-1.44-1.67-3.046-3.048-3.046zM18.286 27.432h3.048v-3.048h-3.048v3.048zM6.095 16.763h15.238v-3.046h-15.238v3.046zM6.095 21.336h9.143v-3.048h-9.143v3.048zM15.238 3.051h24.381c0-1.443-1.67-3.049-3.048-3.049h-21.333c-1.378 0-3.048 1.606-3.048 3.049v1.527h3.048v-1.527zM36.571 16.763l-4.571-0.002v3.051l-3.048-1.016v3.301l6.095 2.284v-4.568c0.779 0 1.524 0 1.524 0 1.378 0 3.048-1.606 3.048-3.049v-4.571h-3.048v4.571zM36.571 9.144h3.048v-3.048h-3.048v3.048z"></path>
        </svg>
      </NavLink>
    </li>
  );
};

export { DialogItem };
