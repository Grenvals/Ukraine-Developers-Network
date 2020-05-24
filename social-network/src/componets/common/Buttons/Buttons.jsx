import React from 'react'
import style from './Buttons.module.scss'
import { NavLink } from 'react-router-dom'
import editImg from '../../assets/images/edit-white.svg'
import cn from 'classnames'

export const NavLinkButton = ({
  name = 'Edit',
  link = '/',
  className,
  icon = editImg,
}) => {
  return (
    <div className={className}>
      <NavLink to={link} className={cn(style.button, style.button_withIcon)}>
        <img src={icon} alt="icon" className={style.button__icon} />
        <p className={style.button__text}>{name}</p>
      </NavLink>
    </div>
  )
}
export const Button = ({
  className = style.button__wrap,
  name = 'Submit',
  type = 'submit',
  accent = false,
  disabled = false,
  onClick,
}) => {
  return (
    <div className={`${className} ${style.button__wrap}`}>
      <button
        type={type}
        disabled={disabled}
        className={cn(style.button, { [style.button_accent]: accent === true })}
        onClick={onClick}
      >
        <p className={style.button__text}>{name}</p>
      </button>
    </div>
  )
}
