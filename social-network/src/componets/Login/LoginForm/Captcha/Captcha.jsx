import React from 'react';
import style from './Captcha.module.scss';
import { Field } from 'redux-form';
import { Input } from '../../../common/Form/FormControls/FormControls';
import { required, maxLengthCreator } from '../../../../utils/validators/validators';
import reload from '../../../../assets/images/reload.svg';
import check from '../../../../assets/images/check.svg';

const maxLength = maxLengthCreator(28);

export const Captcha = ({ captcha, updateCaptcha }) => {
  return (
    <React.Fragment>
      {captcha === null ? (
        <div className={style.captchaStatus}>
          <img className={style.captchaStatus__img} src={check} alt="check" />
          <p className={style.captchaStatus__text}>Captcha not required</p>
        </div>
      ) : (
        <div className={style.captcha}>
          <label className={style.captcha__label} htmlFor="captcha">
            Security code
          </label>
          <div className={style.captcha__security}>
            <div className={style.captcha__item}>
              <button
                className={style.captcha__refreshButton}
                type="button"
                onClick={updateCaptcha}>
                <img src={reload} alt="captcha" />
              </button>
              <img className={style.captcha__img} src={captcha} alt="captcha" />
            </div>
            <Field
              className={style.captcha__input}
              placeholder="answer"
              name={'user_captcha'}
              component={Input}
              validate={[required, maxLength]}
              id={captcha}
            />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
