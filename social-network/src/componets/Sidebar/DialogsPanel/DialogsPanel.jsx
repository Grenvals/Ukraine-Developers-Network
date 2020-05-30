import React from 'react';
import style from './DialogsPanel.module.scss';
import UserItem from './UserItem/UserItem';
import { NavLink } from 'react-router-dom';

export const DialogsPanel = props => {
  let userItem = props.state
    .slice(0, 5)
    .map(u => (
      <UserItem
        key={u.id}
        id={u.id}
        userLogo={u.photos.small}
        userName={u.userName}
        newMessagesCount={u.newMessagesCount}
      />
    ));
  return (
    <div className={style.dialogsPanel}>
      <h2 className={style.dialogsPanel__title}>Dialods</h2>
      <ul className={style.dialogsPanel__list}>
        {userItem}
        <NavLink className={style.dialogsPanel__button} to={'/dialogs/'} exact>
          <div className={style.dialogsPanel__dots}></div>
        </NavLink>
      </ul>
    </div>
  );
};
