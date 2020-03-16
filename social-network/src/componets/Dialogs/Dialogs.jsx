import React from 'react'
import style from './Dialogs.module.scss'
import Header from './Head/Head'
import NotificationItem from './NotificationItem/NotificationItem'
import Chat from './Сhat/Сhat'

const Dialogs = props => {
  let state = props.store.getState()
  let notificationItem = state.dialogsPage.dialogs.map(d => (
    <NotificationItem
      id={d.id}
      userName={d.userName}
      messageCount={d.messageCount}
      lastMessage={d.lastMessage}
    />
  ))
  return (
    <div className={style.dialogs}>
      <Header title="Chat / Messages" />
      <ul className={style.notificationList}>
        <li className={style.notificationItem}>{notificationItem}</li>
      </ul>
      <Chat state={state} dispatch={props.store.dispatch.bind(props.store)} />
    </div>
  )
}

export default Dialogs
