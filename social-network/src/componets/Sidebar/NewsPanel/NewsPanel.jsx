import { NavLink } from 'react-router-dom';
import { NewsItem } from './NewsItem/NewsItem';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Preloader } from '../../common/Preloader/Preloader';
import React from 'react';
import newsLogo from '../../../assets/images/news/google-news.jpg';
import style from './NewsPanel.module.scss';

export const NewsPanel = props => {
  let newsItem = [];
  if (props.headlines !== null) {
    newsItem = props.headlines.map((u, i) => (
      <NewsItem
        key={i}
        photoUrl={u.urlToImage}
        title={u.title}
        publishedAt={u.publishedAt}
        link={u.url}
      />
    ));
  }
  return (
    <div className={style.newsPanel}>
      <h2 className={style.newsPanel__title}>Google Tech News</h2>
      {props.headlines !== null ? (
        <div className={style.newsPanel__container}>
          <PerfectScrollbar className={style.newsPanel__scrollbar} component="div">
            <ul className={style.newsPanel__list}>{newsItem}</ul>
          </PerfectScrollbar>
        </div>
      ) : (
        <Preloader />
      )}
      <NavLink className={style.newsPanel__button} to={'/news/'} exact>
        <img className={style.newsPanel__logo} src={newsLogo} alt="" />
        <div className={style.newsPanel__dots}></div>
      </NavLink>
    </div>
  );
};
