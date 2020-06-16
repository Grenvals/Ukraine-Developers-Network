import { NavbarLink } from './NavbarLink/NavbarLink';
import React from 'react';
import messageIcon from '../../../assets/images/nav/message.svg';
import newspaperIcon from '../../../assets/images/nav/newspaper.svg';
import profileIcon from '../../../assets/images/nav/user.svg';
import settingsIcon from '../../../assets/images/nav/settings.svg';
import style from './Navbar.module.scss';
import usersIcon from '../../../assets/images/nav/users.svg';

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <ul className={style.navbar__list}>
        <NavbarLink link={'/profile/'} linkIcon={profileIcon} title={'Profile'} />
        <NavbarLink link={'/dialogs/'} linkIcon={messageIcon} title={'Messages'} />
        <NavbarLink link={'/users/'} linkIcon={usersIcon} title={'Users'} />
        <NavbarLink link={'/news/'} linkIcon={newspaperIcon} title={'News'} />
        <NavbarLink link={'/settings/'} linkIcon={settingsIcon} title={'Settings'} />
      </ul>
    </nav>
  );
};

export { Navbar };
