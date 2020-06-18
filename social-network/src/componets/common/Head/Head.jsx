import React from 'react';

import defaultBg from '../../../assets/images/background.jpg';

import style from './Head.module.scss';

export const Head = props => {
  return (
    <div className={style.header}>
      <h2 className={style.header__title}>{props.title}</h2>
      <div className="more">
        <div className={style.threeDots}></div>
      </div>
    </div>
  );
};

export const HeadImage = ({ image = defaultBg, className }) => {
  return (
    <div className={style.headImage}>
      <img className={style.headImage__img} src={image} alt="bg" />
    </div>
  );
};
