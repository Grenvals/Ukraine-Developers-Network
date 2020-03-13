import React from 'react'
import style from './MessagesBlock.module.scss'

const MessagesBlock = props => {
  return (
    <li className={`${style.messagesBlock} ${style.usersMessages}`}>
      <div className={style.authorLogo}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHyEwZiidXHLnJ4qyOeJR81Lyx_3Xt9gBQcdvuIZuXr9GVLga8"
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
