import React from 'react'
import style from './Head.module.scss'

const Header = props => {
  return (
    <div className={style.header}>
      <h2 className={style.header__title}>Chat / Messages</h2>
      <div className="more">
        <div className={style.threeDots}></div>
      </div>
    </div>
  )
}

export default Header
