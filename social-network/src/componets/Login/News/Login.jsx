import React from 'react'
import style from './Login.module.scss'
import { Field, reduxForm } from 'redux-form'

const LoginForm = props => {
  return (
    <form className="form" onSubmit={props.handleSubmit}>
      <div className={style.form__item}>
        <label className={style.form__label} htmlFor="user_name">
          User name
        </label>
        <Field
          className={style.form__input}
          placeholder="Name"
          name={'user_name'}
          component={'input'}
        />
      </div>
      <div className={style.form__item}>
        <label className={style.form__label} htmlFor="user_password">
          Password
        </label>
        <Field
          className={style.form__input}
          name={'user_password'}
          placeholder="******"
          component={'input'}
        />
      </div>
      <div className={style.form__item}>
        <div className={style.checkbox}>
          <div className={style.checkbox__box}>
            <Field
              className={style.checkbox__input}
              name={'user_remember'}
              component={'input'}
              type={'checkbox'}
            />
            <span></span>
          </div>
          <label className={style.checkbox__label} htmlFor="user_remember">
            Remember me on this device
          </label>
        </div>
      </div>
      <div className={style.form__button}>
        <button className={style.button}>Submit</button>
      </div>
    </form>
  )
}
const LoginReduxForm = reduxForm({
  form: 'Login',
})(LoginForm)

const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData)
  }
  return (
    <div className={style.login}>
      <div className={style.formBlock}>
        <h1 className={style.form__title}>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
        <p className={style.form__quate}>
          Have the courage to follow your heart and intuition. Steve Jobs
        </p>
      </div>
    </div>
  )
}

export default Login
