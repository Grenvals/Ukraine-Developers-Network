import React from 'react'
import style from './Settings.module.scss'
import background from '../../assets/images/settings/settings-bg.jpg'
import Head from '../common/Head/Head'
import { UserProfilePhoto } from '../common/UserFoto/UserFoto'
import { InputItem } from '../common/Form/FormItem/InputItem'
import { maxLengthCreator, required } from '../../utils/validators/validators'
import { reduxForm } from 'redux-form'
import Preloader from '../common/Preloader/Preloader'

const maxLength = maxLengthCreator(30)

const PrevievInfoForm = ({ handleSubmit, error, pristine, submitting }) => {
  return (
    <form
      className={`${style.settings__form} ${style.settings__form_inline}`}
      onSubmit={handleSubmit}
    >
      <InputItem
        label="Status"
        placeholder="user status"
        name="user_status"
        validate={[required, maxLength]}
      />
      <button type="submit" className={style.button} disabled={pristine || submitting}>
        Save
      </button>
    </form>
  )
}

const PrevievInfoReduxForm = reduxForm({
  form: 'user',
})(PrevievInfoForm)

const Settings = props => {
  if (!props.profile || !props.status) {
    return <Preloader />
  } else {
    const data = {
      user_status: props.status,
    }
    const onSubmit = formData => {
      props.updateUserStatus(formData.user_status)
    }
    return (
      <div className={style.settings}>
        <div className={style.settings__background}>
          <img src={background} alt="bg" />
        </div>
        <Head title="Previev settings" />
        <div className={style.settings__container}>
          <UserProfilePhoto
            isLoggedUser={true}
            photo={props.profile.photos.large}
            updateUserPhoto={props.updateUserPhoto}
          />
          <PrevievInfoReduxForm initialValues={data} onSubmit={onSubmit} />
        </div>
        <Head title="User profile settings" />
      </div>
    )
  }
}

export default Settings
