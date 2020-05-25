import React from 'react'
import style from './Header.module.scss'
import { UserPhoto } from '../common/UserFoto/UserFoto'
import { Button, NavLinkButton } from '../common/Buttons/Buttons'

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
            <Button
              className={style.header__button}
              onClick={props.logOut}
              name={'Log out'}
              type={'button'}
            />
          ) : (
            <NavLinkButton
              className={style.header__button}
              name={'Log in'}
              link={'/login'}
            />
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
