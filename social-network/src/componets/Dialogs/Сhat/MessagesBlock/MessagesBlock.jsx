import React from 'react'
import style from './MessagesBlock.module.scss'
import { UserPhoto } from '../../../common/UserFoto/UserFoto'

const MessagesBlock = props => {
  return (
    <li className={`${style.messagesBlock} ${style.usersMessages}`}>
      <div className={style.authorLogo}>
        <UserPhoto />
      </div>
      <div className={style.messageItem}>
        <p className={style.messageText}>{props.message}</p>
        <div className={style.messageDate}>8:50</div>
      </div>
    </li>
  )
}

export default MessagesBlock
