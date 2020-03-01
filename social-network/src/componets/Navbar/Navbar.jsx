import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <ul className={style.list}>
        <li className={style.list__item}>
          <NavLink
            exact
            to="/profile"
            className={style.link}
            activeClassName={style.linkActive}
          >
            Profile
          </NavLink>
        </li>
        <li className={style.list__item}>
          <NavLink
            exact
            to="/dialogs"
            className={style.link}
            activeClassName={style.linkActive}
          >
            Messages
          </NavLink>
        </li>
        <li className={style.list__item}>
          <NavLink
            exact
            to="/news"
            className={style.link}
            activeClassName={style.linkActive}
          >
            News
          </NavLink>
        </li>
        <li className={style.list__item}>
          <NavLink
            exact
            to="/music"
            className={style.link}
            activeClassName={style.linkActive}
          >
            Music
          </NavLink>
        </li>
        <li className={style.list__item}>
          <NavLink
            exact
            to="/settings"
            className={style.link}
            activeClassName={style.linkActive}
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
