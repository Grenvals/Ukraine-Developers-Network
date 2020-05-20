import React from 'react'
import style from './InputItem.module.scss'
import { Input } from '../FormControls/FormControls'
import { Field } from 'redux-form'

export const InputItem = ({ name, validate, placeholder, label }) => {
  return (
    <div className={style.InputItem}>
      <label className={style.InputItem__label} htmlFor={name}>
        {label}
      </label>
      <Field
        className={style.InputItem__input}
        placeholder={placeholder}
        name={name}
        component={Input}
        validate={validate}
        id={name}
      />
    </div>
  )
}
