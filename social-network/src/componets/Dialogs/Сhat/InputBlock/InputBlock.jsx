import React from 'react'
import style from './InputBlock.module.scss'

const InputBlock = props => {
  let onAddMessage = () => {
    props.addMessage()
  }

  let onTextChange = event => {
    let text = event.target.value
    props.onTextChange(text)
  }

  return (
    <form action="#" className={style.newMessage}>
      <textarea
        cols="10"
        rows="2"
        className={style.newMessage__message}
        placeholder="Write your messаge hier"
        value={props.newDialogMessage}
        onChange={onTextChange}
      ></textarea>
      <div className="button">
        <button className={style.button} onClick={onAddMessage}>
          Send
        </button>
      </div>
    </form>
  )
}

export default InputBlock
