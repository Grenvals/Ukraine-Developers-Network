import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import backgroundImg from '../../assets/images/background.jpg';
import { getCaptchaUrl, logIn } from '../../redux/authReducer';
import { getIsAuth, getAuthCaptcha } from '../../selectors/selectors';
import { toogleRightSidebar } from './../../redux/sidebarReducer';
import { LoginForm } from './LoginForm/LoginForm';

import style from './Login.module.scss';

const Login = ({ logIn, isAuth, captcha, getCaptchaUrl, toogleRightSidebar }) => {
  useEffect(() => {
    toogleRightSidebar(false);
  }, [toogleRightSidebar]);
  const handleSubmit = formData => {
    logIn(
      formData.user_email,
      formData.user_password,
      formData.user_remember,
      formData.user_captcha
    );
  };
  if (isAuth) {
    return <Redirect to={'/Profile'} />;
  }
  return (
    <div className={style.login}>
      <div className={style.login__container}>
        <h2 className={style.login__title}>Login</h2>
        <LoginForm
          onSubmit={handleSubmit}
          captcha={captcha}
          updateCaptcha={getCaptchaUrl}
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
    isAuth: getIsAuth(state),
    captcha: getAuthCaptcha(state),
  };
};

const LoginContainer = connect(mapStateToProps, {
  logIn,
  getCaptchaUrl,
  toogleRightSidebar,
})(Login);

export { LoginContainer as Login };
