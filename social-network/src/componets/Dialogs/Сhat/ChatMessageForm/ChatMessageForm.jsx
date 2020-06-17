import { Field, reduxForm, reset } from 'redux-form';
import { maxLengthCreator, required } from '../../../../utils/validators/validators';

import { Button } from '../../../common/Buttons/Buttons';
import React from 'react';
import { Textarea } from '../../../common/Form/FormControls/FormControls';
import style from './ChatMessageForm.module.scss';

const maxLength = maxLengthCreator(150);
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
      <Button name={'Send'} />
    </form>
  );
};

const AddMessageReduxForm = reduxForm({
  form: 'DialogsChat',
})(AddMessageForm);

const ChatMessageForm = ({ activeDialogUserId, sendMessage }) => {
  const onSubmit = (formData, dispatch) => {
    sendMessage(activeDialogUserId, formData.user_message);
    dispatch(reset('DialogsChat'));
  };
  return <AddMessageReduxForm onSubmit={onSubmit} />;
};

export { ChatMessageForm };
