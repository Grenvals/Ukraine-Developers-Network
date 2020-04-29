import React from 'react'
import style from './Chat.module.scss'
import Head from '../../common/Head/Head'
import MessagesBlock from './MessagesBlock/MessagesBlock'
import ChatMessageForm from './ChatMessageForm/ChatMessageForm'

const Chat = props => {
  let messageBlock = props.messages.map(m => (
    <MessagesBlock key={m.id} message={m.message} />
  ))

  return (
    <div className={style.chat}>
      <Head title="Messages" />
      <div className={style.chatBlock}>
        <ul className={style.chatList}>{messageBlock}</ul>
      </div>
      <ChatMessageForm addMessage={props.addMessage} />
    </div>
  )
}

export default Chat
