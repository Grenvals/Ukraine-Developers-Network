import React from 'react'
import style from './ChatMessageForm.module.scss'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../../../common/FormControls/FormControls'
import { required, maxLengthCreator } from '../../../../utils/validators/validators'

const maxLength =  maxLengthCreator(10);
const AddMessageForm = props => {
  return (
    <form onSubmit={props.handleSubmit} className={style.newMessage}>
      <Field
        className={style.newMessage__message}
        placeholder={"Write your messаge hier"}
        name={'user_message'}
        component={Textarea}
        validate={[required, maxLength ]}
      /> 
      <div className="button">
        <button className={style.button}>
          Send
        </button>
      </div>
    </form>
  )
}

const AddMessageReduxForm = reduxForm({
  form: 'DialogsChat',
})(AddMessageForm)

const ChatMessageForm = props => {
  const onSubmit = (formData) => {
    props.addMessage(formData.user_message)
  }

  return (
    <AddMessageReduxForm onSubmit={onSubmit} />
  )
}



export default ChatMessageForm
