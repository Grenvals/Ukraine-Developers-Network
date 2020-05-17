import React from 'react'
import style from './Chat.module.scss'
import Head from '../../common/Head/Head'
import MessagesBlock from './MessagesBlock/MessagesBlock'
import ChatMessageForm from './ChatMessageForm/ChatMessageForm'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'

const Chat = props => {
  let messageBlock = props.messages.map(m => (
    <MessagesBlock key={m.id} message={m.message} />
  ))

  return (
    <div className={style.chat}>
      <Head title="Messages" />
      <div className={style.chatBlock}>
        <PerfectScrollbar className="scrollbar" component="div">
          <ul className={style.chatList}>{messageBlock}</ul>
        </PerfectScrollbar>
      </div>
      <ChatMessageForm addMessage={props.addMessage} />
    </div>
  )
}

export default Chat
