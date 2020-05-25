import React from 'react'
import style from './Login.module.scss'
import { Field, reduxForm } from 'redux-form'
import { Input, Checkbox } from '../common/Form/FormControls/FormControls'
import { required, maxLengthCreator } from '../../utils/validators/validators'
import { connect } from 'react-redux'
import { logIn, getCaptchaUrl } from '../../redux/authReducer'
import { Redirect } from 'react-router-dom'
import reload from '../../assets/images/reload.svg'
import check from '../../assets/images/check.svg'
import { Button } from '../common/Buttons/Buttons'

const maxLength = maxLengthCreator(28)
const LoginForm = ({ handleSubmit, captcha, updateCaptcha, error }) => {
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
              id={'userRemember'}
            />
          </div>
          <label className={style.checkbox__label} htmlFor="userRemember">
            Remember me on this device
          </label>
        </div>
      </div>
      {captcha === null ? (
        <div className={style.form__captchaStatus}>
          <img src={check} alt="check" />
          <p className="">Captcha not required</p>
        </div>
      ) : (
        <div className={style.form__item}>
          <label className={style.form__label} htmlFor="captcha">
            Security code
          </label>
          <div className={style.form__security}>
            <div className={style.form__captcha}>
              <button
                className={style.form__refreshButton}
                type="button"
                onClick={updateCaptcha}
              >
                <img src={reload} alt="captcha" />
              </button>
              <img src={captcha} alt="captcha" />
            </div>
            <Field
              className={style.form__input}
              placeholder="answer"
              name={'user_captcha'}
              component={Input}
              validate={[required, maxLength]}
              id={captcha}
            />
          </div>
        </div>
      )}

      <div className={style.form__button}>
        {error && <span className={style.form__error}>{error}</span>}
        <Button className={style.login__button} />
      </div>
    </form>
  )
}
const LoginReduxForm = reduxForm({
  form: 'Login',
})(LoginForm)

const Login = props => {
  const onSubmit = formData => {
    props.logIn(
      formData.user_email,
      formData.user_password,
      formData.user_remember,
      formData.user_captcha
    )
  }
  if (props.isAuth) {
    return <Redirect to={'/Profile'} />
  }

  return (
    <div className={style.login}>
      <div className={style.formBlock}>
        <h1 className={style.form__title}>Login</h1>
        <LoginReduxForm
          onSubmit={onSubmit}
          captcha={props.captcha}
          updateCaptcha={props.getCaptchaUrl}
        />
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
    captcha: state.auth.captcha,
  }
}

export default connect(mapStateToProps, { logIn, getCaptchaUrl })(Login)
