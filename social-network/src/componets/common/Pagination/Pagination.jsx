import React, { useEffect, useState } from 'react';

import { PaginationButton } from './PaginationButton/PaginationButton';
import PaginationCountItem from './PaginationCountItem/PaginationCountItem';
import arrowLeft from './../../../assets/images/arrows/left-arrow.svg';
import arrowRight from './../../../assets/images/arrows/right-arrow.svg';
import style from './Pagination.module.scss';

const Pagination = React.memo(props => {
  let [portionNumber, setPortionNumber] = useState(1);
  let [leftButtonMode, setleftButtonMode] = useState(false);
  let [RightButtonMode, setRigthButtonMode] = useState(false);

  let pages = [...props.pages];
  let allPagesCount = props.pages.length;
  let portionCount = Math.ceil(allPagesCount / props.portionSize);
  let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
  let rightPortionPageNumber = portionNumber * props.portionSize;
  let lastPages = [];

  for (let i = 0; i <= 1; i++) {
    lastPages.unshift(allPagesCount - i);
    pages.pop();
  }
  const countItem = pages
    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
    .map(p => (
      <PaginationCountItem
        key={p}
        countNumber={p}
        currentPage={props.currentPage}
        setCurrentPage={props.setCurrentPage}
      />
    ));

  const lastPagesCountItem = lastPages.map(p => (
    <PaginationCountItem
      key={p}
      countNumber={p}
      currentPage={props.currentPage}
      setCurrentPage={props.setCurrentPage}
    />
  ));
  const onLeftButtonClick = () => {
    setPortionNumber(portionNumber - 1);
  };
  const onRightButtonClick = () => {
    setPortionNumber(portionNumber + 1);
  };

  useEffect(() => {
    if (leftPortionPageNumber <= 1) {
      setleftButtonMode(false);
    } else {
      setleftButtonMode(true);
    }
    if (portionNumber < portionCount - 1) {
      setRigthButtonMode(true);
    } else {
      setRigthButtonMode(false);
    }
  }, [leftPortionPageNumber, portionCount, portionNumber]);

  return (
    <div className={style.pagination}>
      <PaginationButton
        icon={arrowLeft}
        onClick={onLeftButtonClick}
        active={leftButtonMode}
      />
      <ul className={style.pagination__list}>
        {countItem}
        <li className={style.pagination__dots}> ... </li>
        {portionCount > 2 && lastPagesCountItem}
      </ul>
      <PaginationButton
        icon={arrowRight}
        onClick={onRightButtonClick}
        active={RightButtonMode}
      />
    </div>
  );
});

export default Pagination;
