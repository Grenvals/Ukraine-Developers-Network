import { maxLengthCreator, required } from '../../../utils/validators/validators';

import { Button } from '../../common/Buttons/Buttons';
import { Head } from '../../common/Head/Head';
import { InputItem } from '../../common/Form/FormItem/InputItem';
import React from 'react';
import { UserProfilePhoto } from '../../common/UserFoto/UserFoto';
import { reduxForm } from 'redux-form';
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
    <div className="">
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
