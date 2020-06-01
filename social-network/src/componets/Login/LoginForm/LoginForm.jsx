import React from 'react';
import style from './LoginForm.module.scss';
import { Field, reduxForm } from 'redux-form';
import { Input, Checkbox } from '../../common/Form/FormControls/FormControls';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Button } from '../../common/Buttons/Buttons';
import { Captcha } from './Captcha/Captcha';

const maxLength = maxLengthCreator(28);
const LoginForm = ({ handleSubmit, captcha, updateCaptcha, error }) => {
  return (
    <form className={style.loginForm} onSubmit={handleSubmit}>
      <div className={style.loginForm__item}>
        <label className={style.loginForm__label} htmlFor="user_name">
          User name
        </label>
        <Field
          className={style.loginForm__input}
          placeholder="Email"
          name={'user_email'}
          component={Input}
          validate={[required, maxLength]}
        />
      </div>
      <div className={style.loginForm__item}>
        <label className={style.loginForm__label} htmlFor="user_password">
          Password
        </label>
        <Field
          className={style.loginForm__input}
          name={'user_password'}
          placeholder="******"
          component={Input}
          validate={[required, maxLength]}
          type={'password'}
        />
      </div>
      <div className={style.loginForm__item}>
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
      <Captcha captcha={captcha} updateCaptcha={updateCaptcha} />
      <div className={style.loginForm__buttonItem}>
        {error && <span className={style.loginForm__error}>{error}</span>}
        <Button className={style.loginForm__button} name={'Log in'} />
      </div>
    </form>
  );
};
export const LoginReduxForm = reduxForm({
  form: 'Login',
})(LoginForm);
