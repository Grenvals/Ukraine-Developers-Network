import React from 'react';

import cn from 'classnames';

import style from './Preloader.module.scss';

export const Preloader = ({ className = null }) => {
  return (
    <div className={cn(style.preloader, { [className]: className !== null })}>
      <div className={style.loader}>
        <div className={style.loader__circle}></div>
      </div>
    </div>
  );
};
