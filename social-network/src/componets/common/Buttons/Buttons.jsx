import React from 'react';
import style from './Buttons.module.scss';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

export const NavLinkButton = ({
  name = null,
  link = '/',
  className,
  icon = null,
  accent = false,
  adaptive = false,
}) => {
  return (
    <div className={className}>
      <NavLink
        to={link}
        className={cn(
          style.button,
          { [style.button_withIcon]: icon !== null },
          { [style.button_accent]: accent === true },
          { [style.button_noText]: name === null },
          { [style.button_adaptive]: adaptive === true }
        )}>
        {icon !== null && <img src={icon} alt="icon" className={style.button__icon} />}
        <p className={style.button__text}>{name}</p>
      </NavLink>
    </div>
  );
};

export const Button = ({
  className = style.button__wrap,
  name = null,
  type = 'submit',
  accent = false,
  disabled = false,
  icon = null,
  adaptive = false,
  text = true,
  onClick,
}) => {
  return (
    <div className={`${className} ${style.button__wrap}`}>
      <button
        type={type}
        disabled={disabled}
        className={cn(
          style.button,
          { [style.button_withIcon]: icon !== null },
          { [style.button_accent]: accent === true },
          { [style.button_noText]: name === null },
          { [style.button_adaptive]: adaptive === true }
        )}
        onClick={onClick}>
        <p className={style.button__text}>{name}</p>
        {icon !== null && <img src={icon} alt="icon" className={style.button__icon} />}
      </button>
    </div>
  );
};
