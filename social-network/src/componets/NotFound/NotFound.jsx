import React from 'react'
import style from './NotFound.module.scss'
import { NavLink } from 'react-router-dom'

export const NotFound = props => {
  return (
    <div className={style.notFound}>
      <div className={style.notFound__item}>
        <h1 className={style.notFound__title}>404</h1>
        <p className={style.notFound__subtitle}>Page not found</p>
        <NavLink to={'/profile'} className={style.button}>
          Home
        </NavLink>
      </div>
    </div>
  )
}
