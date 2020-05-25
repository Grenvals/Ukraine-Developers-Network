import React from 'react'
import style from './Dialogs.module.scss'
import NotificationItem from './NotificationItem/NotificationItem'
import Chat from './Сhat/Сhat'
import { Head } from '../common/Head/Head'

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
      <Head title="Chat / Messages" />
      <ul className={style.notificationList}>{notificationItem}</ul>
      <Chat messages={props.messages} addMessage={props.addMessage} />
    </div>
  )
}

export default Dialogs
