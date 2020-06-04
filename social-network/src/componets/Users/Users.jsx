import { Head } from '../common/Head/Head';
import Pagination from '../common/Pagination/Pagination';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Preloader } from '../common/Preloader/Preloader';
import React from 'react';
import User from './User/User';
import style from './Users.module.scss';

export const Users = ({
  users,
  totalUsersCount,
  pageSize,
  onPageChanget,
  currentPage,
  isLoading,
  followingInProgress,
  followUser,
  unfollowUser,
  startDialogWithUser,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={style.users__wrap}>
      <PerfectScrollbar className={style.users__scrollbar} component="div">
        <div className={style.users}>
          <Head title="Users" />
          {totalUsersCount && (
            <div className={style.users__settings}>
              <Pagination
                pages={pages}
                setCurrentPage={onPageChanget}
                currentPage={currentPage}
                portionSize={5}
              />
            </div>
          )}
          {isLoading ? (
            <Preloader />
          ) : (
            <ul className={style.users__list}>
              {users.map(u => (
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
              ))}
            </ul>
          )}
          <div className={style.users__settings}>
            <Pagination
              pages={pages}
              setCurrentPage={onPageChanget}
              currentPage={currentPage}
              portionSize={5}
            />
          </div>
        </div>
      </PerfectScrollbar>
    </div>
  );
};
