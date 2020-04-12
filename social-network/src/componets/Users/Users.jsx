import React from 'react'
import style from './Users.module.scss'
import Head from '../common/Head/Head'
import User from './User/User'
import Pagination from '../common/Pagination/Pagination'

const Users = props => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize );
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return (
      <div className={style.users}>
        <Head title="Users" />
        <div className={style.settings}>
          <Pagination pages={pages}  setCurrentPage={props.onPageChanget} currentPage={props.currentPage} />
        </div>
        <ul className="body">
          {props.users.map(u => (
            <User
              key={u.id}
              user={u}
              follow={props.follow}
              unfollow={props.unfollow}
            />
          ))}
        </ul>
      </div>
    )
}

export default Users
