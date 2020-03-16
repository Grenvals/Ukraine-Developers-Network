import React from 'react'
import style from './InputBlock.module.scss'
import {
  addMessageActionCreator,
  onTextChangeActionCreator,
} from './../../../../redux/dialogsReducer'

const InputBlock = props => {
  let addMessage = () => {
    props.dispatch(addMessageActionCreator())
  }

  let onTextChange = event => {
    let text = event.target.value
    props.dispatch(onTextChangeActionCreator(text))
  }
  debugger

  return (
    <form action="#" className={style.newMessage}>
      <textarea
        cols="10"
        rows="2"
        className={style.newMessage__message}
        placeholder="Write your messаge hier"
        value={props.state.dialogsPage.newDialogMessage}
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
