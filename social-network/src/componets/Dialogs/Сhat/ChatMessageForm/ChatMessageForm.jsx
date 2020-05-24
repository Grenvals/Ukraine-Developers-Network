import React from 'react'
import style from './ChatMessageForm.module.scss'
import { Field, reduxForm, reset } from 'redux-form'
import { Textarea } from '../../../common/Form/FormControls/FormControls'
import { required, maxLengthCreator } from '../../../../utils/validators/validators'
import { Button } from '../../../Buttons/Buttons'

const maxLength = maxLengthCreator(10)
const AddMessageForm = props => {
  return (
    <form onSubmit={props.handleSubmit} className={style.newMessage}>
      <Field
        className={style.newMessage__message}
        placeholder={'Write your messаge hier'}
        name={'user_message'}
        component={Textarea}
        validate={[required, maxLength]}
      />
      <Button />
    </form>
  )
}

const AddMessageReduxForm = reduxForm({
  form: 'DialogsChat',
})(AddMessageForm)

const ChatMessageForm = props => {
  const onSubmit = (formData, dispatch) => {
    props.addMessage(formData.user_message)
    dispatch(reset('DialogsChat'))
  }

  return <AddMessageReduxForm onSubmit={onSubmit} />
}

export default ChatMessageForm
