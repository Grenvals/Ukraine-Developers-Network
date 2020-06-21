import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import cn from 'classnames';

import arrowLeft from './../../../assets/images/arrows/left-arrow.svg';
import arrowRight from './../../../assets/images/arrows/right-arrow.svg';
import { PaginationButton } from './PaginationButton/PaginationButton';
import { PaginationСountItem } from './PaginationCountItem/PaginationCountItem';

import style from './Pagination.module.scss';

export const Pagination = React.memo(
  ({
    className,
    items,
    currentItem,
    setCurrentItem,
    pagPortionNumber,
    setPagPortionNumber,
  }) => {
    const isPhone = useMediaQuery({
      query: '(max-device-width: 468.98px)',
    });

    let portionSize = 2;
    let endPortionSize = 1;
    if (!isPhone) {
      portionSize = 4;
      endPortionSize = 2;
    }

    const [leftButtonMode, setleftButtonMode] = useState(false);
    const [RightButtonMode, setRigthButtonMode] = useState(false);
    const allPagesCount = items.length;
    const portionCount = Math.ceil(allPagesCount / portionSize);

    // Pagination portion kernel
    const leftPortionBorder = (pagPortionNumber - 1) * portionSize + 1;
    const rightPortionBorder = leftPortionBorder + portionSize - 1;

    const countItem = items
      .filter(
        p =>
          p >= leftPortionBorder &&
          p <= rightPortionBorder &&
          p <= items.length - endPortionSize
      )
      .map(p => (
        <PaginationСountItem
          key={p}
          countNumber={p}
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
        />
      ));

    const lastPagesCountItem = items
      .filter(p => p > items.length - endPortionSize)
      .map(p => (
        <PaginationСountItem
          key={p}
          countNumber={p}
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
        />
      ));

    const onLeftButtonClick = () => {
      setPagPortionNumber(pagPortionNumber - 1);
    };

    const onRightButtonClick = () => {
      setPagPortionNumber(pagPortionNumber + 1);
    };

    const onDotsClick = () => {
      setPagPortionNumber(portionCount / 2);
    };

    useEffect(() => {
      if (leftPortionBorder <= 1) {
        setleftButtonMode(false);
      } else {
        setleftButtonMode(true);
      }
      if (pagPortionNumber < portionCount) {
        setRigthButtonMode(true);
      } else {
        setRigthButtonMode(false);
      }
    }, [leftPortionBorder, portionCount, pagPortionNumber]);

    return (
      <div className={cn(style.pagination, { [className]: className })}>
        <PaginationButton
          icon={arrowLeft}
          onClick={onLeftButtonClick}
          active={leftButtonMode}
        />
        <ul className={style.pagination__list}>
          {countItem}
          {portionCount > 1 && (
            <li className={style.pagination__dots} onClick={onDotsClick}>
              ...
            </li>
          )}

          {lastPagesCountItem}
        </ul>
        <PaginationButton
          icon={arrowRight}
          onClick={onRightButtonClick}
          active={RightButtonMode}
        />
      </div>
    );
  }
);
