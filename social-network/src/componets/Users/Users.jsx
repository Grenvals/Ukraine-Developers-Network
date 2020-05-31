import React from 'react';
import style from './Users.module.scss';
import User from './User/User';
import Pagination from '../common/Pagination/Pagination';
import { Preloader } from '../common/Preloader/Preloader';
import { Head } from '../common/Head/Head';

const Users = props => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={style.users}>
      <Head title="Users" />
      <div className={style.users__settings}>
        <Pagination
          pages={pages}
          setCurrentPage={props.onPageChanget}
          currentPage={props.currentPage}
          portionSize={5}
        />
      </div>
      {props.isLoading ? (
        <Preloader />
      ) : (
        <ul className={style.users__list}>
          {props.users.map(u => (
            <User
              key={u.id}
              user={u}
              id={u.id}
              photo={u.photos.small}
              name={u.name}
              status={u.status}
              followed={u.followed}
              followingInProgress={props.followingInProgress}
              followUser={props.followUser}
              unfollowUser={props.unfollowUser}
              startDialogWithUser={props.startDialogWithUser}
            />
          ))}
        </ul>
      )}
      <div className={style.users__settings}>
        <Pagination
          pages={pages}
          setCurrentPage={props.onPageChanget}
          currentPage={props.currentPage}
          portionSize={5}
        />
      </div>
    </div>
  );
};

export default Users;
