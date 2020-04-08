import React from 'react'
import style from './MyPosts.module.scss'
import PostItem from './Post/Post'
import NewPost from './NewPost/NewPost'

const MyPosts = props => {
  let postItem = props.posts.map(d => (
    <PostItem key={d.id} message={d.message} likes={d.likes} />
  ))

  return (
    <div className={style.posts}>
      <NewPost
        updateNewPostMessage={props.updateNewPostMessage}
        addPost={props.addPost}
        newPostMessage={props.newPostMessage}
      />
      {postItem}
    </div>
  )
}

export default MyPosts
