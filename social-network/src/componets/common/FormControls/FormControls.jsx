import React from 'react'
import style from './FormControls.module.scss'

export const Textarea = ({ input, meta, ...props }) => {
	const hasError = meta.touched && meta.error;
  return (
    <div className={style.textarea}>
      <div className={`${style.textarea__input}`}>
        <textarea {...input} {...props} />
      </div>
      {hasError && (
        <span className={`${style.textarea__error} ${style.error}`}>
           {meta.error} 
        </span>
      )}
    </div>
  )
}
