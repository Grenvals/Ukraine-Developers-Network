import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Friends.module.scss'

const Friends = props => {
  return (
    <div className={style.friends}>
      <h2 className={style.title}>Friends</h2>
      <ul className={style.list}>
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
              <div className={style.messageCount}>10</div>
            </div>
            <p className={style.name}> Anton</p>
          </NavLink>
        </li>
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
              <div className={style.messageCount}>10</div>
            </div>
            <p className={style.name}> Anton</p>
          </NavLink>
        </li>
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
              <div className={style.messageCount}>10</div>
            </div>
            <p className={style.name}> Anton</p>
          </NavLink>
        </li>
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
              <div className={style.messageCount}>10</div>
            </div>
            <p className={style.name}> Anton</p>
          </NavLink>
        </li>
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
              <div className={style.messageCount}>10</div>
            </div>
            <p className={style.name}> Anton</p>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Friends
