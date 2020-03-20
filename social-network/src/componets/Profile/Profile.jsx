import React from 'react'
import style from './Profile.module.scss'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import UserInfo from './UserInfo/UserInfo'

const Profile = props => {
  return (
    <div className={`${style.profile} ${style.nav}`}>
      <UserInfo />
      <MyPostsContainer store={props.store} />
    </div>
  )
}

export default Profile
