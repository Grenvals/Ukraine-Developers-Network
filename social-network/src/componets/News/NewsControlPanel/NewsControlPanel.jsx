import { Pagination } from '../../common/Pagination/Pagination';
import React from 'react';
import { Select } from '../../common/Select/Select';
import style from './NewsControlPanel.module.scss';

export const NewsControlPanel = ({
  categoryList,
  currentCategory,
  pageSize,
  setCurrentCategory,
  setPageSize,
  setViewMode,
}) => {
  // let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pagesCount = 55;
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const newsCategoryOpt = categoryList.map(с => ({ value: с, label: с }));

  const usersOnPageOpt = [
    { value: '5', label: '5' },
    { value: '15', label: '15' },
    { value: '25', label: '25' },
    { value: '50', label: '50' },
  ];

  const newsViewOpt = [
    { value: 'tablet', label: 'tablet' },
    { value: 'list', label: 'list' },
    { value: 'large', label: 'large' },
  ];

  const handleChangeCategory = value => {
    setCurrentCategory(value.value);
  };

  const handleChangePageSize = value => {
    setPageSize(value.value);
  };

  const handleChangeViewMode = value => {
    setViewMode(value.value);
  };

  return (
    <div className={style.controlPanel}>
      <Select
        className={style.controlPanel__selectCount}
        label={'News'}
        onChange={handleChangePageSize}
        options={usersOnPageOpt}
        defaultValue={usersOnPageOpt[2]}
      />
      <Select
        className={style.controlPanel__selectCategory}
        label={'Category'}
        onChange={handleChangeCategory}
        options={newsCategoryOpt}
        defaultValue={newsCategoryOpt[2]}
      />
      <Select
        className={style.controlPanel__selectView}
        label={'View'}
        onChange={handleChangeViewMode}
        options={newsViewOpt}
        defaultValue={newsViewOpt[0]}
      />
      <Pagination
        className={style.controlPanel__pagination}
        pages={pages}
        // setCurrentPage={onPageChanget}
        // currentPage={currentPage}
        portionSize={5}
      />
    </div>
  );
};
