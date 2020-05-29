import React from 'react';
import style from './Friends.module.scss';
import UserItem from './UserItem/UserItem';
import { NavLink } from 'react-router-dom';

const Friends = props => {
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
    <div className={style.friends}>
      <h2 className={style.title}>Dialods</h2>
      <ul className={style.list}>
        {userItem}
        <NavLink className={style.list__more} to={'/dialogs/'} exact>
          <div className={style.list__threeDots}></div>
        </NavLink>
      </ul>
    </div>
  );
};

export default Friends;
