import React from 'react'
import style from './Dialogs.module.scss'
import Header from './Head/Head'
import NotificationItem from './NotificationItem/NotificationItem'
import MessagesBlock from './MessagesBlock/MessagesBlock'

// let dialogsData = [
//   {
//     id: 1,
//     userName: 'Anton Demin',
//     messageCount: 4,
//     lastMessage: 'Great, I’ll see you tomorrow!...',
//   },
//   {
//     id: 2,
//     userName: 'Alexander Dmitriew',
//     messageCount: 5,
//     lastMessage: 'Great, I’ll see you tomorrow!...',
//   },
//   {
//     id: 3,
//     userName: 'Nicolas Volodin',
//     messageCount: 2,
//     lastMessage: 'Hi Elaine! I have a question...',
//   },
//   {
//     id: 4,
//     userName: 'Garold Insbruck',
//     messageCount: 1,
//     lastMessage: 'Great, I’ll see you tomorrow!...',
//   },
// ]

const Dialogs = props => {
  let notificationItem = props.state.dialogsPage.dialogs.map(d => (
    <NotificationItem
      id={d.id}
      userName={d.userName}
      messageCount={d.messageCount}
      lastMessage={d.lastMessage}
    />
  ))

  let messageBlock = props.state.dialogsPage.messages.map(m => (
    <MessagesBlock message={m.lastMessage} />
  ))

  let newMessages = React.createRef()

  let addPost = () => {
    let text = newMessages.current.value
    alert(text)
  }

  return (
    <div className={style.dialogs}>
      <Header title="Chat / Messages" />
      <ul className={style.notificationList}>
        <li className={style.notificationItem}>{notificationItem}</li>
      </ul>
      <div className={style.chat}>
        <Header title="Alexander Dmitriew" />
        <ul className={style.chatMessage}>{messageBlock}</ul>
        <form action="#" className={style.newMessage}>
          <textarea
            ref={newMessages}
            name=""
            id=""
            cols="10"
            rows="2"
            className={style.newMessage__message}
            placeholder="Write your messаge hier"
          ></textarea>
          <div className="button">
            <button className={style.button} onClick={addPost}>
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Dialogs
