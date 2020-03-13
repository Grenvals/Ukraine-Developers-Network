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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHyEwZiidXHLnJ4qyOeJR81Lyx_3Xt9gBQcdvuIZuXr9GVLga8"
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
