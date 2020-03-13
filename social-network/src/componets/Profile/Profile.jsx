import React from 'react'
import style from './Profile.module.scss'
import MyPosts from './MyPosts/MyPosts'
import UserInfo from './UserInfo/UserInfo'

const Profile = props => {
  return (
    <div className={`${style.profile} ${style.nav}`}>
      <UserInfo />
      <MyPosts
        state={props.state}
        addPost={props.addPost}
        updateNewPostMessage={props.updateNewPostMessage}
        newPostMessage={props.state.newPostMessage}
      />
    </div>
  )
}

export default Profile
