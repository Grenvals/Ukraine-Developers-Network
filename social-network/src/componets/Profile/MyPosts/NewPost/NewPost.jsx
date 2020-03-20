import React from 'react'
import style from './NewPost.module.scss'

const NewPost = props => {
  let newMessages = React.createRef()

  let onAddPost = () => {
    props.addPost()
  }
  let onPostChange = () => {
    let text = newMessages.current.value
    props.updateNewPostMessage(text)
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
      <button onClick={onAddPost} className={style.button}>
        Submit
      </button>
    </div>
  )
}

export default NewPost
