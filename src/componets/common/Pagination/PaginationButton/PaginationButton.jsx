import React from 'react';

import style from './PaginationButton.module.scss';

export const PaginationButton = ({ onClick, icon, active = false }) => {
  return (
    <React.Fragment>
      {active ? (
        <button className={style.paginationButton} onClick={onClick}>
          <img src={icon} alt="arrow" />
        </button>
      ) : (
        <span className={`${style.paginationButton} ${style.paginationButton_disable}`}>
          <img src={icon} alt="arrow" />
        </span>
      )}
    </React.Fragment>
  );
};
