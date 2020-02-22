import React from 'react';
import style from './Navbar.module.css';

const Navbar = () => {
	return <nav className={style.nav}>
		<ul className="nav__list">
			<li className="nav__item"><a href="" className={`${style.link} ${style.active}`}>Profile</a></li>
			<li className="nav__item"><a href="" className={style.link}>Messages</a></li>
			<li className="nav__item"><a href="" className={style.link}>News</a></li>
			<li className="nav__item"><a href="" className={style.link}>Music</a></li>
			<li className="nav__item"><a href="" className={style.link}>Settings</a></li>
		</ul>
	</nav>;
}

export default Navbar;