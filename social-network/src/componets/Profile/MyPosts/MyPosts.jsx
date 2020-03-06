import React from 'react'
import style from './MyPosts.module.scss'
import PostItem from './Post/Post'
import NewPost from './NewPost/NewPost'

const MyPosts = props => {
  let postItem = props.state.profilePage.posts.map(d => (
    <PostItem message={d.message} likes={d.likes} />
  ))

  return (
    <div className={style.posts}>
      <NewPost />
      {postItem}
    </div>
  )
}

export default MyPosts
