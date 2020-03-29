import React from 'react'
import style from './Dialogs.module.scss'
import Header from '../Head/Head'
import NotificationItem from './NotificationItem/NotificationItem'
import Chat from './Сhat/Сhat'

const Dialogs = props => {
  let notificationItem = props.dialogs.map(d => (
    <NotificationItem
      key={d.id}
      id={d.id}
      userName={d.userName}
      messageCount={d.messageCount}
      lastMessage={d.lastMessage}
    />
  ))
  return (
    <div className={style.dialogs}>
      <Header />
      <ul className={style.notificationList}>
        {notificationItem}
      </ul>
      <Chat
        messages={props.messages}
        addMessage={props.addMessage}
        onTextChange={props.onTextChange}
        newDialogMessage={props.newDialogMessage}
      />
    </div>
  )
}

export default Dialogs
