import React from 'react'
import style from './FormControls.module.scss'

const FormControl = ({ input, meta: { touched, error }, children, ...props }) => {
  const hasError = touched && error
  return (
    <div className={style.textarea}>
      <div className={`${style.textarea__input}`}>{children}</div>
      {hasError && (
        <span className={`${style.textarea__error} ${style.error}`}>{error}</span>
      )}
    </div>
  )
}

export const Input = props => {
  const { input, meta, ...restProps } = props
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  )
}

export const Textarea = props => {
  const { input, meta, ...restProps } = props
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  )
}

export const Checkbox = props => {
  const { input, meta, ...restProps } = props
  return (
    <FormControl {...props}>
      <div className={style.checkbox__box}>
        <input className={style.checkbox__input} {...input} {...restProps} />
        <span></span>
      </div>
    </FormControl>
  )
}
