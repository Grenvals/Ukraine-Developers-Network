import React from 'react';

import { User } from '../User/User';

import style from './UsersList.module.scss';

const UsersList = React.memo(
  ({ users, followingInProgress, followUser, unfollowUser, startDialogWithUser }) => {
    let usersList;
    if (users !== null) {
      usersList = users.map(u => (
        <User
          key={u.id}
          user={u}
          id={u.id}
          photo={u.photos.small}
          name={u.name}
          status={u.status}
          followed={u.followed}
          followingInProgress={followingInProgress}
          followUser={followUser}
          unfollowUser={unfollowUser}
          startDialogWithUser={startDialogWithUser}
        />
      ));
    }
    return <ul className={style.users__list}>{usersList}</ul>;
  }
);

export { UsersList };
