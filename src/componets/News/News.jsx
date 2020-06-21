import React, { useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {
  getNewsArticlesList,
  getNewsTotalResults,
  getNewsPageSize,
  getNewsCurrentPage,
  getNewsCategoryList,
  getNewsCurrentCategory,
  getNewsPagPortionNumber,
} from '../../selectors/selectors';
import { Head } from '../common/Head/Head';
import { Pagination } from '../common/Pagination/Pagination';
import {
  getNewsArticles,
  setCurrentCategory,
  setCurrentPage,
  setPagPortionNumber,
  setPageSize,
} from './../../redux/newsReducer';
import { toogleRightSidebar } from './../../redux/sidebarReducer';
import { NewsBlock } from './NewsBlock/NewsBlock';
import { NewsControlPanel } from './NewsControlPanel/NewsControlPanel';

import style from './News.module.scss';

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
  setCurrentPage,
  setPagPortionNumber,
  pagPortionNumber,
}) => {
  useEffect(() => {
    getNewsArticles(currentCategory, pageSize, currentPage);
  }, [currentCategory, currentPage, getNewsArticles, pageSize]);

  useEffect(() => {
    toogleRightSidebar(false);
  }, [toogleRightSidebar]);

  const [vievMode, setViewMode] = useState('tablet');
  const pagesCount = Math.ceil(totalResults / pageSize);
  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
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
            setCurrentPage={setCurrentPage}
            setPagPortionNumber={setPagPortionNumber}
            currentPage={currentPage}
            pugPortionNumber={pagPortionNumber}
            pages={pages}
          />
          <NewsBlock articles={articles} viewMode={vievMode} />
          <div className={style.news__bottomControl}>
            <Pagination
              className={style.news__pagination}
              items={pages}
              setCurrentItem={setCurrentPage}
              currentItem={currentPage}
              pagPortionNumber={pagPortionNumber}
              setPagPortionNumber={setPagPortionNumber}
            />
          </div>
        </div>
      </PerfectScrollbar>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    articles: getNewsArticlesList(state),
    totalResults: getNewsTotalResults(state),
    pageSize: getNewsPageSize(state),
    currentPage: getNewsCurrentPage(state),
    categoryList: getNewsCategoryList(state),
    currentCategory: getNewsCurrentCategory(state),
    pagPortionNumber: getNewsPagPortionNumber(state),
  };
};

const NewsContainer = compose(
  connect(mapStateToProps, {
    toogleRightSidebar,
    getNewsArticles,
    setCurrentCategory,
    setPageSize,
    setCurrentPage,
    setPagPortionNumber,
  }),
  withAuthRedirect
)(News);

export { NewsContainer as News };
