import React from 'react'
import style from './Header.module.scss'
import { NavLink } from 'react-router-dom'
import defaultUserPhoto from "../../assets/images/user-default.svg"

const Header = props => {
  console.log(props)
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.logo}>
          UDN <span className={style.name}>Ukraine developers Network</span>
        </div>
        <div className={style.user}>
          <div className={style.user__flag}></div>
          <div className={style.user__name}>{props.login}</div>
          <div className={style.user__logo}>
            <img
              src={props.isAuth ? (
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHyEwZiidXHLnJ4qyOeJR81Lyx_3Xt9gBQcdvuIZuXr9GVLga8"
              ) : (
                defaultUserPhoto
              )}
              alt=""
            />
          </div>
          {props.isAuth ? (
            <NavLink to={'/login'} className={style.button}>
              Log out
            </NavLink>
          ) : (
            <NavLink to={'/login'} className={style.button}>
              Log in
            </NavLink>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
