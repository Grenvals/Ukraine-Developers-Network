import React from 'react';
import { Field } from 'redux-form';

import { Input, ToogleButton, Textarea } from '../FormControls/FormControls';

import style from './InputItem.module.scss';

export const InputItem = ({ name, validate, placeholder, label, icon, disabled }) => {
  return (
    <div className={style.InputItem}>
      <label className={style.InputItem__label} htmlFor={name}>
        {label}
      </label>
      <div className={!icon ? style.InputItem__wrap : style.InputItem__wrap_withIcon}>
        <Field
          className={style.InputItem__input}
          placeholder={placeholder}
          name={name}
          component={Input}
          validate={validate}
          id={name}
          disabled={disabled}
        />
        {icon && <img className={style.InputItem__icon} src={icon} alt="icon" />}
      </div>
    </div>
  );
};
export const CheckboxItem = ({ name, label }) => {
  return (
    <div className={`${style.InputItem} ${style.InputItem__inline}`}>
      <Field name={name} component={ToogleButton} type={'checkbox'} id={name} />
      <label className={style.InputItem__label} htmlFor={name}>
        {label}
      </label>
    </div>
  );
};
export const TextareaItem = ({ name, validate, placeholder, label, icon, className }) => {
  return (
    <div className={style.InputItem}>
      <label className={style.InputItem__label} htmlFor={name}>
        {label}
      </label>
      <Field
        className={`${style.InputItem__textarea} ${className}`}
        placeholder={placeholder}
        name={name}
        component={Textarea}
        validate={validate}
        id={name}
      />
      {icon && <img className={style.InputItem__icon} src={icon} alt="icon" />}
    </div>
  );
};
