import React from 'react'
import style from './Contacts.module.scss'

export const ContactIcon = ({ name, link, icon }) => {
  return (
    <li className={style.contactIcon}>
      <a className={style.contactIcon__link} href={link}>
        <img className={style.contactIcon__logo} src={icon} alt={name} />
      </a>
    </li>
  )
}
