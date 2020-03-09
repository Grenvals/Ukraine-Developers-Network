import React from 'react'
import style from './NewPost.module.scss'

const NewPost = props => {
  let newMessages = React.createRef()

  let addPost = () => {
    let text = newMessages.current.value
    props.addPost(text)
  }

  return (
    <div className={style.newPost}>
      <textarea
        className={style.newPost__message}
        ref={newMessages}
        cols="20"
        rows="5"
        placeholder="Write your messаge hier"
      ></textarea>
      <button onClick={addPost} className={style.button}>
        Submit
      </button>
    </div>
  )
}

export default NewPost
