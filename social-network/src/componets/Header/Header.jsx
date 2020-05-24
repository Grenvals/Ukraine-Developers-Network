import React from 'react'
import style from './Header.module.scss'
import { NavLink } from 'react-router-dom'
import { UserPhoto } from '../common/UserFoto/UserFoto'

const Header = props => {
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
            <UserPhoto
              photo={props.isAuth && props.profile != null && props.profile.photos.large}
            />
          </div>
          {props.isAuth ? (
            <button onClick={props.logOut} className={style.button}>
              Log out
            </button>
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
