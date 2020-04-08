import React from 'react'
import style from './UserInfo.module.scss'

const UserInfo = () => {
  return (
    <div className={style.userInfo}>
      <div className="profile-bg"></div>
      <div className="user-info"></div>
    </div>
  )
}

export default UserInfo;
