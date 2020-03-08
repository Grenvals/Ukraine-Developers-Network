import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './UserItem.module.scss'

const UserItem = props => {
  return (
    <li className={style.listItem}>
      <NavLink
        exact
        to={'/dialogs/' + props.id}
        className={style.notificationItem}
        activeClassName={style.linkActive}
      >
        <div className={style.logo}>
          <img
            src="https://pbs.twimg.com/profile_images/1167923688450052096/wvr50pbL_400x400.jpg"
            alt="logo"
          />
          <div className={style.messageCount}>{props.messagesCount}</div>
        </div>
        <p className={style.name}>{props.name}</p>
      </NavLink>
    </li>
  )
}

export default UserItem
