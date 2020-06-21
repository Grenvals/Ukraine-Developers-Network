import React from 'react';
import { reduxForm } from 'redux-form';

import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Button } from '../../common/Buttons/Buttons';
import { InputItem } from '../../common/Form/FormItem/InputItem';
import { Head } from '../../common/Head/Head';
import { UserProfilePhoto } from '../../common/UserFoto/UserFoto';

import style from '../Settings.module.scss';

export const maxLength = maxLengthCreator(100);

const StatusForm = ({
  handleSubmit,
  error,
  pristine,
  submitting,
  photo,
  updateUserPhoto,
  userId,
}) => {
  return (
    <div className={style.settings}>
      <Head title="Previev settings" />
      <div className={style.settings__container}>
        <div className="">
          <UserProfilePhoto
            isLoggedUser={true}
            photo={photo}
            updateUserPhoto={updateUserPhoto}
            userId={userId}
          />
        </div>

        <form
          className={`${style.settings__form} ${style.settings__form_inline}`}
          onSubmit={handleSubmit}>
          <InputItem
            label="Status"
            placeholder="user status"
            name="status"
            validate={[required, maxLength]}
          />
          <Button name={'Save'} disabled={pristine || submitting} />
        </form>
      </div>
    </div>
  );
};

const StatusReduxForm = reduxForm({
  form: 'userStatus',
})(StatusForm);

export { StatusReduxForm as StatusForm };
