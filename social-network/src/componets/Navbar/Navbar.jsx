import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return <nav className={style.nav}>
		<ul className="nav__list">
			<li className="nav__item"><NavLink to="/profile" activeClassName={style.active} className={style.link}>Profile</NavLink></li>
			<li className="nav__item"><NavLink to="/dialogs" activeClassName={style.active} className={style.link}>Messages</NavLink></li>
			<li className="nav__item"><NavLink to="/news" activeClassName={style.active} className={style.link}>News</NavLink></li>
			<li className="nav__item"><NavLink to="/music" activeClassName={style.active} className={style.link}>Music</NavLink></li>
			<li className="nav__item"><NavLink to="/settings" activeClassName={style.active} className={style.link}>Settings</NavLink></li>
		</ul>
	</nav>;
}

export default Navbar;