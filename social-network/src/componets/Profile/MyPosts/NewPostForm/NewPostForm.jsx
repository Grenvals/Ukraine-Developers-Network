import React from 'react'
import style from './NewPostForm.module.scss'
import { Field, reduxForm } from 'redux-form'

const NewPostCreateForm = props => {
  return (
    <form onSubmit={props.handleSubmit} className={style.newPost}>
      <Field
        className={style.newPost__message}
        placeholder="Write your messаge hier"
        name={'user_post_message'}
        component="textarea"
      />
      <button className={style.button}>Submit</button>
    </form>
  )
}
const AddNewPostReduxForm = reduxForm({
  form: 'NewPost',
})(NewPostCreateForm)

export const NewPostForm = props => {
  const onSubmit = formData => {
    console.log(formData.user_post_message)
    props.addPost(formData.user_post_message)
  }
  return <AddNewPostReduxForm onSubmit={onSubmit} />
}

export default NewPostForm
