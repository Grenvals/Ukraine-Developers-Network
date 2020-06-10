import React from 'react';
import cn from 'classnames';
import newsDefaultImg from '../../../../assets/images/default-img.png';
import style from './NewsArticle.module.scss';

export const NewsArticle = ({
  photoUrl,
  title,
  description,
  publishedAt,
  authorName,
  viewMode,
}) => {
  return (
    <li
      className={cn(
        style.newsArticle,
        { [style.newsArticle_listMode]: viewMode === 'list' },
        { [style.newsArticle_tabletLargeMode]: viewMode === 'large' }
      )}>
      <div className={style.newsArticle__wrap}>
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
      </div>
    </li>
  );
};
