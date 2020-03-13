import React from 'react'
import style from './InputBlock.module.scss'

const InputBlock = props => {
  let newMessages = React.createRef()

  let addPost = () => {
    let text = newMessages.current.value
    alert(text)
  }
  return (
    <form action="#" className={style.newMessage}>
      <textarea
        ref={newMessages}
        name=""
        id=""
        cols="10"
        rows="2"
        className={style.newMessage__message}
        placeholder="Write your messаge hier"
      ></textarea>
      <div className="button">
        <button className={style.button} onClick={addPost}>
          Send
        </button>
      </div>
    </form>
  )
}

export default InputBlock
