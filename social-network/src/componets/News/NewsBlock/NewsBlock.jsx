import { NewsArticle } from './NewsArticle/NewsArticle';
import { Preloader } from '../../common/Preloader/Preloader';
import React from 'react';
import style from './NewsBlock.module.scss';

export const NewsBlock = ({ articles }) => {
  let newsList = [];
  if (articles !== null) {
    newsList = articles.map(u => (
      <NewsArticle
        key={u.source.id}
        photoUrl={u.urlToImage}
        title={u.title}
        description={u.description}
        publishedAt={u.publishedAt}
        link={u.url}
        authorName={u.source.name}
      />
    ));
  }
  return (
    <div className={style.newsBlock}>
      {articles ? (
        <ul className={style.newsBlock__list}>{newsList}</ul>
      ) : (
        <Preloader className={style.newsBlock__preloader} />
      )}
    </div>
  );
};
