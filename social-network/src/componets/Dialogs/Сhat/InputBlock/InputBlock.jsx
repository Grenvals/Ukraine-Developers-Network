import React from 'react'
import style from './InputBlock.module.scss'
import {
  addMessageActionCreator,
  onTextChangeActionCreator,
} from './../../../../redux/state'

const InputBlock = props => {
  let newMessages = React.createRef()

  let addMessage = () => {
    let text = newMessages.current.value
    props.dispatch(addMessageActionCreator(text))
  }

  let onTextChange = () => {
    let text = newMessages.current.value
    props.dispatch(onTextChangeActionCreator(text))
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
        value={props.state.newDialogMessage}
        onChange={onTextChange}
      ></textarea>
      <div className="button">
        <button className={style.button} onClick={addMessage}>
          Send
        </button>
      </div>
    </form>
  )
}

export default InputBlock
