import React from 'react'
import style from '../Settings.module.scss'
import { InputItem } from '../../common/Form/FormItem/InputItem'
import { maxLengthCreator, required } from '../../../utils/validators/validators'
import { reduxForm } from 'redux-form'
import { UserProfilePhoto } from '../../common/UserFoto/UserFoto'
import Head from '../../common/Head/Head'
import { Button } from '../../Buttons/Buttons'

export const maxLength = maxLengthCreator(100)

const StatusForm = ({
  handleSubmit,
  error,
  pristine,
  submitting,
  photo,
  updateUserPhoto,
}) => {
  return (
    <div className="">
      <Head title="Previev settings" />
      <div className={style.settings__container}>
        <UserProfilePhoto
          isLoggedUser={true}
          photo={photo}
          updateUserPhoto={updateUserPhoto}
        />
        <form
          className={`${style.settings__form} ${style.settings__form_inline}`}
          onSubmit={handleSubmit}
        >
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
  )
}
export const StatusReduxForm = reduxForm({
  form: 'userStatus',
})(StatusForm)
