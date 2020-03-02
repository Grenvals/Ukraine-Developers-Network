import React from 'react'
import style from './Dialogs.module.scss'
import Header from './Head/Head'
import NotificationItem from './NotificationItem/NotificationItem'
import MessagesBlock from './MessagesBlock/MessagesBlock'

const Dialogs = () => {
  return (
    <div className={style.dialogs}>
      <Header title="Chat / Messages" />
      <ul className={style.notificationList}>
        <li className={style.notificationItem}>
          <NotificationItem
            id="1"
            userName="Anton Demin"
            messageCount="4"
            lastMessage="Great, I’ll see you tomorrow!..."
          />
        </li>
        <li className={style.notificationItem}>
          <NotificationItem
            id="2"
            userName="Alexander Dmitriew"
            messageCount="10"
            lastMessage="Hi Elaine! I have a question..."
          />
        </li>
        <li className={style.notificationItem}>
          <NotificationItem
            id="3"
            userName="Nicolas Volodin"
            messageCount="3"
            lastMessage="Great, I’ll see you tomorrow!..."
          />
        </li>
        <li className={style.notificationItem}>
          <NotificationItem
            id="4"
            userName="Garold Insbruck"
            messageCount="2"
            lastMessage="Great, I’ll see you tomorrow!..."
          />
        </li>
      </ul>
      <div className={style.chat}>
        <Header title="Alexander Dmitriew" />
        <ul className={style.chatMessage}>
          <MessagesBlock message="Good food!" />
          <MessagesBlock message="Please buy the food!" />
        </ul>
      </div>
    </div>
  )
}

export default Dialogs
