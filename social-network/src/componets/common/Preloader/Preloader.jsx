import React from 'react';
import style from './Preloader.module.scss';

const Preloader = props => {
  return (
    <div className={style.preloader}>
      <div className={style.loader}>
        <div className={style.loader__circle}></div>
      </div>
    </div>
  );
};

export default Preloader;
