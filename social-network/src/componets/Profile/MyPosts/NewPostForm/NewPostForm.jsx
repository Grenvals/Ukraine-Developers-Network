import React from 'react';
import style from './NewPostForm.module.scss';
import { Field, reduxForm, reset } from 'redux-form';
import { required, maxLengthCreator } from '../../../../utils/validators/validators';
import { Textarea } from '../../../common/Form/FormControls/FormControls';
import { Button } from '../../../common/Buttons/Buttons';

const maxLength = maxLengthCreator(150);

const NewPostCreateForm = props => {
  return (
    <form className={style.newPostForm} onSubmit={props.handleSubmit}>
      <Field
        className={style.newPostForm__message}
        placeholder="Write your messаge hier"
        name={'user_post_message'}
        component={Textarea}
        validate={[required, maxLength]}
      />
      <Button />
    </form>
  );
};
const AddNewPostReduxForm = reduxForm({
  form: 'NewPost',
})(NewPostCreateForm);

export const NewPostForm = props => {
  const onSubmit = (formData, dispatch) => {
    const date = new Date().toLocaleString().slice(0, -3);
    props.addPost(formData.user_post_message, date);
    dispatch(reset('NewPost'));
  };
  return <AddNewPostReduxForm onSubmit={onSubmit} />;
};
