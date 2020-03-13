import React from 'react'
import style from './Chat.module.scss'
import Header from '../Head/Head'
import MessagesBlock from './MessagesBlock/MessagesBlock'
import InputBlock from './InputBlock/InputBlock'

const Chat = props => {
  // debugger
  let newMessages = React.createRef()

  let addPost = () => {
    let text = newMessages.current.value
    alert(text)
  }
  let messageBlock = props.state.messages.map(m => (
    <MessagesBlock message={m.lastMessage} />
  ))

  return (
    <div className={style.chat}>
      <Header title="Alexander Dmitriew" />
      <ul className={style.chatMessage}>{messageBlock}</ul>
      <InputBlock />
    </div>
  )
}

export default Chat
