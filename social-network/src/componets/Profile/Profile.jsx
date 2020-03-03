import React from 'react'
import style from './Profile.module.scss'
import MyPosts from './MyPosts/MyPosts'
import UserInfo from './UserInfo/UserInfo'

const Profile = () => {
  return (
    <div className={`${style.profile} ${style.nav}`}>
      <UserInfo />
      <MyPosts />
    </div>
  )
}

export default Profile
