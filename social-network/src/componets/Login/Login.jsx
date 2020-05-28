import React from 'react';
import style from './Login.module.scss';
import { connect } from 'react-redux';
import { logIn, getCaptchaUrl } from '../../redux/authReducer';
import { Redirect } from 'react-router-dom';
import { LoginReduxForm } from './LoginForm/LoginForm';
import backgroundImg from '../../assets/images/background.jpg';

const Login = props => {
  const onSubmit = formData => {
    props.logIn(
      formData.user_email,
      formData.user_password,
      formData.user_remember,
      formData.user_captcha
    );
  };
  if (props.isAuth) {
    return <Redirect to={'/Profile'} />;
  }
  return (
    <div className={style.login}>
      <div className={style.login__container}>
        <h2 className={style.login__title}>Login</h2>
        <LoginReduxForm
          onSubmit={onSubmit}
          captcha={props.captcha}
          updateCaptcha={props.getCaptchaUrl}
        />
        <p className={style.login__quate}>
          Have the courage to follow your heart and intuition. Steve Jobs
        </p>
      </div>
      <img className={style.login__background} src={backgroundImg} alt="bg" />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha,
  };
};

export default connect(mapStateToProps, { logIn, getCaptchaUrl })(Login);
