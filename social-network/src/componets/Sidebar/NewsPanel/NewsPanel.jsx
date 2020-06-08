import { NavLink } from 'react-router-dom';
import { NewsItem } from './NewsItem/NewsItem';
import PerfectScrollbar from 'react-perfect-scrollbar';
import React from 'react';
import newsLogo from '../../../assets/images/news/google-news.jpg';
import style from './NewsPanel.module.scss';

export const NewsPanel = props => {
  const newsItem = props.headlines.map(u => (
    <NewsItem
      key={u.source.id}
      photoUrl={u.urlToImage}
      title={u.title}
      publishedAt={u.publishedAt}
      link={u.url}
    />
  ));
  return (
    <div className={style.newsPanel}>
      <h2 className={style.newsPanel__title}>Last developers news</h2>
      <div className={style.newsPanel__container}>
        <PerfectScrollbar className={style.newsPanel__scrollbar} component="div">
          <ul className={style.newsPanel__list}>{newsItem}</ul>
        </PerfectScrollbar>
      </div>
      <NavLink className={style.newsPanel__button} to={'/news/'} exact>
        <img className={style.newsPanel__logo} src={newsLogo} alt="" />
        <div className={style.newsPanel__dots}></div>
      </NavLink>
    </div>
  );
};
