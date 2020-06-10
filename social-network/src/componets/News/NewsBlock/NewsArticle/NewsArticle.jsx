import React from 'react';
import newsDefaultImg from '../../../../assets/images/default-img.png';
import style from './NewsArticle.module.scss';

export const NewsArticle = ({
  photoUrl,
  title,
  description,
  publishedAt,
  authorName,
}) => {
  return (
    <li className={style.newsArticle}>
      <div className={style.newsArticle__img}>
        <img src={photoUrl ? photoUrl : newsDefaultImg} alt="cover" />
      </div>
      <div className={style.newsArticle__content}>
        <h3 className={style.newsArticle__title}>{title}</h3>
        <p className={style.newsArticle__descr}>{description}</p>
        <div className={style.newsArticle__info}>
          <p className={style.newsArticle__name}>{authorName}</p>
          <span className={style.newsArticle__date}>{publishedAt}</span>
        </div>
      </div>
    </li>
  );
};
