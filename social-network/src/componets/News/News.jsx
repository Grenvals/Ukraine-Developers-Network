import React, { useEffect, useState } from 'react';
import {
  getNewsArticles,
  setCurrentCategory,
  setPageSize,
} from './../../redux/newsReducer';

import { Head } from '../common/Head/Head';
import { NewsBlock } from './NewsBlock/NewsBlock';
import { NewsControlPanel } from './NewsControlPanel/NewsControlPanel';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { compose } from 'redux';
import { connect } from 'react-redux';
import style from './News.module.scss';
import { toogleRightSidebar } from './../../redux/sidebarReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const News = ({
  toogleRightSidebar,
  articles,
  currentPage,
  getNewsArticles,
  categoryList,
  currentCategory,
  pageSize,
  setCurrentCategory,
  setPageSize,
  totalResults,
}) => {
  useEffect(() => {
    getNewsArticles(currentCategory, pageSize, currentPage);
  }, [currentCategory, currentPage, getNewsArticles, pageSize]);
  useEffect(() => {
    toogleRightSidebar(false);
  }, [toogleRightSidebar]);
  const [vievMode, setViewMode] = useState('tablet');

  return (
    <div className={style.news}>
      <PerfectScrollbar className={style.news__scrollbar} component="div">
        <div className={style.news__container}>
          <Head title="News catalog" />
          <NewsControlPanel
            categoryList={categoryList}
            currentCategory={currentCategory}
            pageSize={pageSize}
            setCurrentCategory={setCurrentCategory}
            setPageSize={setPageSize}
            setViewMode={setViewMode}
            totalResults={totalResults}
          />
          <NewsBlock articles={articles} viewMode={vievMode} />
        </div>
      </PerfectScrollbar>
    </div>
  );
};

let mapStateToProps = state => {
  return {
    articles: state.news.articles,
    totalResults: state.news.totalResults,
    pageSize: state.news.pageSize,
    currentPage: state.news.currentPage,
    categoryList: state.news.categoryList,
    currentCategory: state.news.currentCategory,
  };
};

const NewsContainer = compose(
  connect(mapStateToProps, {
    toogleRightSidebar,
    getNewsArticles,
    setCurrentCategory,
    setPageSize,
  }),
  withAuthRedirect
)(News);

export { NewsContainer as News };
