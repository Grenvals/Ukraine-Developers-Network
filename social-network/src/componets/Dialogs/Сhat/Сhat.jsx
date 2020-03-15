import React from 'react'
import style from './Chat.module.scss'
import Header from '../Head/Head'
import MessagesBlock from './MessagesBlock/MessagesBlock'
import InputBlock from './InputBlock/InputBlock'

const Chat = props => {
  // let newMessages = React.createRef()

  // let addPost = () => {
  //   let text = newMessages.current.value
  //   alert(text)
  // }
  let messageBlock = props.state.messages.map(m => (
    <MessagesBlock message={m.message} />
  ))
  return (
    <div className={style.chat}>
      <Header title="Alexander Dmitriew" />
      <div className={style.chatBlock}>
        <ul className={style.chatList}>{messageBlock}</ul>
      </div>
      <InputBlock state={props.state} dispatch={props.dispatch} />
    </div>
  )
}

export default Chat
