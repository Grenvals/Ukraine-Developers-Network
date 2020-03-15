import React from 'react'
import style from './NewPost.module.scss'

const NewPost = props => {
  debugger
  let newMessages = React.createRef()

  let addPost = () => {
    props.dispatch({ type: 'ADD-POST', message: newMessages })
  }

  let onPostChange = () => {
    let text = newMessages.current.value
    props.dispatch({ type: 'UPDATE-NEW-POST-MESSAGE', message: text })
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
