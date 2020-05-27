import React from 'react'
import style from './LikesCount.module.scss'
import likeImg from '../../../assets/images/profile/heart.svg'

export const LikesCount = ({ likes }) => {
  return (
    <div className={style.likesCount}>
      <img className={style.likesCount__img} src={likeImg} alt="" />
      <span className={style.likesCount__value}>{likes}</span>
    </div>
  )
}
