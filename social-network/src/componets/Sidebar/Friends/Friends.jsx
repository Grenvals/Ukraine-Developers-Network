import React from 'react'
import style from './Friends.module.scss'
import UserItem from './UserItem/UserItem'

const Friends = props => {
  debugger
  let userItem = props.state.map(u => (
    <UserItem name={u.name} messagesCount={u.messagesCount} />
  ))
  return (
    <div className={style.friends}>
      <h2 className={style.title}>Friends</h2>
      <ul className={style.list}>{userItem}</ul>
    </div>
  )
}

export default Friends
