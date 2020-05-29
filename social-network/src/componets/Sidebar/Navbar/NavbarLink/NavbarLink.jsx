import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './NavbarLink.module.scss';

export const NavbarLink = ({ title, link, linkIcon }) => {
  return (
    <li className={style.navbarLink}>
      <NavLink
        to={link}
        className={style.navbarLink__link}
        activeClassName={style.navbarLink__link_active}>
        <img className={style.navbarLink__img} src={linkIcon} alt="link icon" />
        <h3 className={style.navbarLink__title}>{title}</h3>
      </NavLink>
    </li>
  );
};
