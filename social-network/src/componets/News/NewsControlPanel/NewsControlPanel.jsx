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
  totalResults,
  setCurrentPage,
  setPagPortionNumber,
  currentPage,
  pugPortionNumber,
  pages,
}) => {
  console.log(setCurrentPage);
  console.log(setPagPortionNumber);
  console.log(currentPage);
  console.log(pugPortionNumber);

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
      <p className={style.controlPanel__totalResults}>
        Results:<span>{totalResults}</span>
      </p>
      <Pagination
        className={style.controlPanel__pagination}
        items={pages}
        setCurrentItem={setCurrentPage}
        currentItem={currentPage}
        pagPortionNumber={pugPortionNumber}
        setPagPortionNumber={setPagPortionNumber}
      />
    </div>
  );
};
