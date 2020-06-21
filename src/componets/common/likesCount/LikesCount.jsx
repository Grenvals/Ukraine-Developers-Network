import React from 'react';

import likeImg from '../../../assets/images/profile/heart.svg';

import style from './LikesCount.module.scss';

export const LikesCount = ({ likes }) => {
  return (
    <div className={style.likesCount}>
      <img className={style.likesCount__img} src={likeImg} alt="" />
      <span className={style.likesCount__value}>{likes}</span>
    </div>
  );
};
