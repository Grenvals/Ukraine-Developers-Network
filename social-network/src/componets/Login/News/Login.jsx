import React from 'react'
import style from './Login.module.scss'
import { Field, reduxForm } from 'redux-form'
import { Input, Checkbox } from '../../common/FormControls/FormControls'
import {
  required,
  maxLengthCreator,
} from '../../../utils/validators/validators'
import { connect } from 'react-redux'
import { logIn } from '../../../redux/authReducer'
import { Redirect } from 'react-router-dom'

const maxLength = maxLengthCreator(28)
const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className={style.form__item}>
        <label className={style.form__label} htmlFor="user_name">
          User name
        </label>
        <Field
          className={style.form__input}
          placeholder="Email"
          name={'user_email'}
          component={Input}
          validate={[required, maxLength]}
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
          component={Input}
          validate={[required, maxLength]}
          type={'password'}
        />
      </div>
      <div className={style.form__item}>
        <div className={style.checkbox}>
          <div className={style.checkbox__box}>
            <Field
              className={style.checkbox__input}
              name={'user_remember'}
              component={Checkbox}
              type={'checkbox'}
            />
          </div>
          <label className={style.checkbox__label} htmlFor="user_remember">
            Remember me on this device
          </label>
        </div>
      </div>

      <div className={style.form__button}>
        {error && <span className={style.form__error}>{error}</span>}
        <button className={style.button}>Submit</button>
      </div>
    </form>
  )
}
const LoginReduxForm = reduxForm({
  form: 'Login',
})(LoginForm)

const Login = props => {
  const onSubmit = formData => {
    console.log(formData)
    props.logIn(
      formData.user_email,
      formData.user_password,
      formData.user_remember
    )
  }
  if (props.isAuth) {
    return <Redirect to={'/Profile'} />
  }

  return (
    <div className={style.login}>
      <div className={style.formBlock}>
        <h1 className={style.form__title}>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
        <p className={style.form__quate}>
          Have the courage to follow your heart and intuition. Steve Jobs
        </p>
      </div>
    </div>
  )
}
let mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth,
  }
}

export default connect(mapStateToProps, { logIn })(Login)
