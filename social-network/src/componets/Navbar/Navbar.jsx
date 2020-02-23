import React from 'react';
import style from './Navbar.module.css';

const Navbar = () => {
	return <nav className={style.nav}>
		<ul className="nav__list">
			<li className="nav__item"><a href="/profile" className={`${style.link} ${style.active}`}>Profile</a></li>
			<li className="nav__item"><a href="/dialogs" className={style.link}>Messages</a></li>
			<li className="nav__item"><a href="/news" className={style.link}>News</a></li>
			<li className="nav__item"><a href="/music" className={style.link}>Music</a></li>
			<li className="nav__item"><a href="/settings" className={style.link}>Settings</a></li>
		</ul>
	</nav>;
}

export default Navbar;