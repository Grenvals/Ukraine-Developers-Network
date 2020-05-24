import React from 'react'
import style from './UserItem.module.scss'
import { UserPhotoLink } from '../../../common/UserFoto/UserFoto'

const UserItem = props => {
  return (
    <li className={style.userItem}>
      <UserPhotoLink
        link={'/dialogs/' + props.id}
        photo={null}
        count={props.messagesCount}
      />
      <p className={style.userItem__name}>{props.name}</p>
    </li>
  )
}

export default UserItem
