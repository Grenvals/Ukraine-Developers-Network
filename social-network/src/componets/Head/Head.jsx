import React from 'react'
import style from './Head.module.scss'
import { Link } from 'react-router-dom'

const Header = props => {
  return (
    <div className={style.header}>
      <h2 className={style.header__title}>Chat / Messages</h2>
      <a href="#" className="more">
        <div className={style.threeDots}></div>
      </a>
    </div>
  )
}

export default Header
