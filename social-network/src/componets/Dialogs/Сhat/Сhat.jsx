import React from 'react'
import style from './Chat.module.scss'
import Header from '../../Head/Head'
import MessagesBlock from './MessagesBlock/MessagesBlock'
import InputBlock from './InputBlock/InputBlock'

const Chat = props => {
  // debugger
  let messageBlock = props.messages.map(m => (
    <MessagesBlock key={m.id} message={m.message} />
  ))
  return (
    <div className={style.chat}>
      <Header title="Alexander Dmitriew" />
      <div className={style.chatBlock}>
        <ul className={style.chatList}>{messageBlock}</ul>
      </div>
      <InputBlock
        addMessage={props.addMessage}
        onTextChange={props.onTextChange}
        newDialogMessage={props.newDialogMessage}
      />
    </div>
  )
}

export default Chat
