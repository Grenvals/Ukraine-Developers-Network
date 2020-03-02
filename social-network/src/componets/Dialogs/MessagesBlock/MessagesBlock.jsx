import React from 'react'
import style from './MessagesBlock.module.scss'

const MessagesBlock = props => {
  return (
    <li className={`${style.messagesBlock} ${style.usersMessages}`}>
      <div className={style.authorLogo}>
        <img
          src="https://pbs.twimg.com/profile_images/1167923688450052096/wvr50pbL_400x400.jpg"
          alt="logo"
        />
      </div>
      <div className={style.messageItem}>
        <p className="messageContent">{props.message}</p>
        <div className={style.messageDate}>8:50</div>
      </div>
    </li>
  )
}

export default MessagesBlock
