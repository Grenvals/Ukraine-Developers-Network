import React from 'react'
import style from './Dialogs.module.scss'
import Header from './Head/Head'
import NotificationItem from './NotificationItem/NotificationItem'
import MessagesBlock from './MessagesBlock/MessagesBlock'

let dialogsData = [
  {
    id: 1,
    userName: 'Anton Demin',
    messageCount: 4,
    lastMessage: 'Great, I’ll see you tomorrow!...',
  },
  {
    id: 2,
    userName: 'Alexander Dmitriew',
    messageCount: 5,
    lastMessage: 'Great, I’ll see you tomorrow!...',
  },
  {
    id: 3,
    userName: 'Nicolas Volodin',
    messageCount: 2,
    lastMessage: 'Hi Elaine! I have a question...',
  },
  {
    id: 4,
    userName: 'Garold Insbruck',
    messageCount: 1,
    lastMessage: 'Great, I’ll see you tomorrow!...',
  },
]

let messagesData = [
  { id: 1, lastMessage: 'Good food!' },
  { id: 2, lastMessage: 'Please buy the food!' },
]

let messageBlock = messagesData.map(m => (
  <MessagesBlock message={m.lastMessage} />
))

let notificationItem = dialogsData.map(d => (
  <NotificationItem
    id={d.id}
    userName={d.userName}
    messageCount={d.messageCount}
    lastMessage={d.lastMessage}
  />
))

const Dialogs = () => {
  return (
    <div className={style.dialogs}>
      <Header title="Chat / Messages" />
      <ul className={style.notificationList}>
        <li className={style.notificationItem}>{notificationItem}</li>
      </ul>
      <div className={style.chat}>
        <Header title="Alexander Dmitriew" />
        <ul className={style.chatMessage}>{messageBlock}</ul>
      </div>
    </div>
  )
}

export default Dialogs
