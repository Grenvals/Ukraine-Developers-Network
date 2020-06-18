import React from 'react';

import style from './PaginationCountItem.module.scss';

export const PaginationСountItem = ({ countNumber, currentItem, setCurrentItem }) => {
  const onChange = () => {
    setCurrentItem(countNumber);
  };

  return (
    <li
      className={
        countNumber === currentItem
          ? `${style.countItem} ${style.countItem_active}`
          : style.countItem
      }
      onClick={onChange}>
      {countNumber}
    </li>
  );
};
