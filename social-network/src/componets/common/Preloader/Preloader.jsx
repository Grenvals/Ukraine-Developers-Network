import React from 'react';
import style from './Preloader.module.scss';
import cn from 'classnames';

const Preloader = ({ className = null }) => {
  return (
    <div className={cn(style.preloader, { [className]: className !== null })}>
      <div className={style.loader}>
        <div className={style.loader__circle}></div>
      </div>
    </div>
  );
};

export default Preloader;
