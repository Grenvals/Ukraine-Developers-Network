import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';

import { maxLengthCreator, required } from '../../../../utils/validators/validators';
import { Button } from '../../../common/Buttons/Buttons';
import { Textarea } from '../../../common/Form/FormControls/FormControls';

import style from './PostForm.module.scss';

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
      <Button name={'Submit'} />
    </form>
  );
};
const AddNewPostReduxForm = reduxForm({
  form: 'NewPost',
})(NewPostCreateForm);

const PostForm = props => {
  const onSubmit = (formData, dispatch) => {
    const date = new Date().toLocaleString().slice(0, -3);
    props.addPost(formData.user_post_message, date);
    dispatch(reset('NewPost'));
  };
  return <AddNewPostReduxForm onSubmit={onSubmit} />;
};

export { PostForm };
