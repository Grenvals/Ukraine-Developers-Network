import { Head } from '../common/Head/Head';
import { Pagination } from '../common/Pagination/Pagination';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Preloader } from '../common/Preloader/Preloader';
import React from 'react';
import { Select } from '../common/Select/Select';
import { User } from './User/User';
import style from './Users.module.scss';

const Users = ({
  users,
  totalUsersCount,
  pageSize,
  onPageChanget: onPageChange,
  currentPage,
  isLoading,
  followingInProgress,
  followUser,
  unfollowUser,
  startDialogWithUser,
  updatePageSize,
  pagPortionNumber,
  setPagPortionNumber,
}) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  const handleChange = value => {
    updatePageSize(value.value);
  };

  const usersOnPageOpt = [
    { value: '5', label: '5' },
    { value: '15', label: '15' },
    { value: '25', label: '25' },
    { value: '50', label: '50' },
  ];
  return (
    <div className={style.users__wrap}>
      <PerfectScrollbar className={style.users__scrollbar} component="div">
        <div className={style.users}>
          <Head title="Users list" />
          {totalUsersCount && (
            <div className={style.users__settings}>
              <Select
                className={style.users__select}
                label={'Users'}
                onChange={handleChange}
                options={usersOnPageOpt}
                defaultValue={usersOnPageOpt[2]}
              />
              <Pagination
                className={style.users__pagination}
                items={pages}
                setCurrentItem={onPageChange}
                currentItem={currentPage}
                pagPortionNumber={pagPortionNumber}
                setPagPortionNumber={setPagPortionNumber}
              />
            </div>
          )}
          {isLoading ? (
            <Preloader />
          ) : (
            <React.Fragment>
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
              <div className={style.users__settings}>
                <Pagination
                  className={style.users__pagination}
                  items={pages}
                  setCurrentItem={onPageChange}
                  currentItem={currentPage}
                  pagPortionNumber={pagPortionNumber}
                  setPagPortionNumber={setPagPortionNumber}
                />
              </div>
            </React.Fragment>
          )}
        </div>
      </PerfectScrollbar>
    </div>
  );
};

export { Users };
