import React from 'react';
import logo from './logo.svg';
import './App.scss';

const App = () => {
  return (
    <div className="wrapper">
      <header className="header"></header>
      <div className="aside">
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item"><a href="" className="nav__link">Profile</a></li>
            <li className="nav__item"><a href="" className="nav__link">Messages</a></li>
            <li className="nav__item"><a href="" className="nav__link">News</a></li>
            <li className="nav__item"><a href="" className="nav__link">Music</a></li>
            <li className="nav__item"><a href="" className="nav__link">Settings</a></li>
          </ul>
        </nav>
      </div>
      <div className="content"></div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
