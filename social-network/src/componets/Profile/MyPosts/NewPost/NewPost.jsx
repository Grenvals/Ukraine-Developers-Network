import React from 'react'
import style from './NewPost.module.scss'
import {
  addPostActionCreator,
  updateNewPostMessageActionCreator,
} from '../../../../redux/profileReducer'

const NewPost = props => {
  debugger
  let newMessages = React.createRef()

  let addPost = () => {
    props.dispatch(addPostActionCreator())
  }
  let onPostChange = () => {
    let text = newMessages.current.value
    props.dispatch(updateNewPostMessageActionCreator(text))
  }

  return (
    <div className={style.newPost}>
      <textarea
        className={style.newPost__message}
        ref={newMessages}
        cols="20"
        rows="5"
        placeholder="Write your messаge hier"
        value={props.newPostMessage}
        onChange={onPostChange}
      />
      <button onClick={addPost} className={style.button}>
        Submit
      </button>
    </div>
  )
}

export default NewPost
