import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { NavLink } from 'react-router-dom';

import newsLogo from '../../../assets/images/news/google-news.jpg';
import { Preloader } from '../../common/Preloader/Preloader';
import { NewsItem } from './NewsItem/NewsItem';

import style from './NewsPanel.module.scss';

const NewsPanel = ({ headlines, newsError }) => {
  let newsItem = [];
  if (headlines !== null) {
    newsItem = headlines.map((u, i) => (
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
      <div className={style.newsPanel__container}>
        {headlines !== null ? (
          <PerfectScrollbar className={style.newsPanel__scrollbar} component="div">
            <ul className={style.newsPanel__list}>{newsItem}</ul>
          </PerfectScrollbar>
        ) : (
          <React.Fragment>
            {newsError ? (
              <div className={style.newsPanel__error}>{newsError}</div>
            ) : (
              <Preloader />
            )}
          </React.Fragment>
        )}
      </div>
      <NavLink className={style.newsPanel__button} to={'/news/'} exact>
        <img className={style.newsPanel__logo} src={newsLogo} alt="" />
        <div className={style.newsPanel__dots}></div>
      </NavLink>
    </div>
  );
};

export { NewsPanel };
