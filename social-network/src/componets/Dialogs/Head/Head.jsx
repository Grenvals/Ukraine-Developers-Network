import React from "react";
import style from "./Head.module.scss";

const Header = props => {
  return (
    <div className={style.header}>
      <h2 className={style.header__title}>{props.title}</h2>
      <a href="#" className="more">
        <div className={style.threeDots}></div>
      </a>
    </div>
  );
};

export default Header;
