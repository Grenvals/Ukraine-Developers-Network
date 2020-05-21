import React from 'react'
import style from '../Settings.module.scss'
import { InputItem } from '../../common/Form/FormItem/InputItem'
import { maxLengthCreator, required } from '../../../utils/validators/validators'
import { reduxForm } from 'redux-form'

export const maxLength = maxLengthCreator(60)

const StatusForm = ({ handleSubmit, error, pristine, submitting }) => {
  return (
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
      <button type="submit" className={style.button} disabled={pristine || submitting}>
        Save
      </button>
    </form>
  )
}
export const StatusReduxForm = reduxForm({
  form: 'userStatus',
})(StatusForm)
