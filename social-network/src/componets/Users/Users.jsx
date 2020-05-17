import React from 'react'
import style from './Users.module.scss'
import Head from '../common/Head/Head'
import User from './User/User'
import Pagination from '../common/Pagination/Pagination'
import Preloader from '../common/Preloader/Preloader'

const Users = props => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  return (
    <div className={style.users}>
      <Head title="Users" />
      <div className={style.settings}>
        <Pagination
          pages={pages}
          setCurrentPage={props.onPageChanget}
          currentPage={props.currentPage}
          portionSize={10}
        />
      </div>
      {props.isLoading ? (
        <Preloader />
      ) : (
        <ul className="body">
          {props.users.map(u => (
            <User
              key={u.id}
              user={u}
              followingInProgress={props.followingInProgress}
              followUser={props.followUser}
              unfollowUser={props.unfollowUser}
            />
          ))}
        </ul>
      )}
      <div className={style.settings}>
        <Pagination
          pages={pages}
          setCurrentPage={props.onPageChanget}
          currentPage={props.currentPage}
          portionSize={10}
        />
      </div>
    </div>
  )
}

export default Users
