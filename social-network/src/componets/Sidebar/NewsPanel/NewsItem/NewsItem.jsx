import React from 'react';
import { dateHandler } from '../../../../utils/handlers/handlers';
import style from './NewsItem.module.scss';

export const NewsItem = ({ photoUrl, title, link, publishedAt }) => {
  return (
    <li className={style.newsItem}>
      <a className={style.newsItem__link} href={link} target={'blank'}>
        <article className={style.newsItem__article}>
          <img src={photoUrl} alt="news" className={style.newsItem__photo} />
          <div className={style.newsItem__content}>
            <h3 className={style.newsItem__title}>{title}</h3>
            <span className={style.newsItem__date}>{dateHandler(publishedAt)}</span>
          </div>
        </article>
      </a>
    </li>
  );
};
