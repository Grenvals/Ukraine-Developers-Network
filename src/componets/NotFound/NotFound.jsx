import React from 'react';

import { NavLinkButton } from '../common/Buttons/Buttons';

import style from './NotFound.module.scss';

const NotFound = props => {
  return (
    <div className={style.notFound}>
      <div className={style.notFound__item}>
        <h1 className={style.notFound__title}>404</h1>
        <p className={style.notFound__subtitle}>Page not found</p>
        <NavLinkButton name={'Home'} link={'/profile'} />
      </div>
    </div>
  );
};

export { NotFound };
