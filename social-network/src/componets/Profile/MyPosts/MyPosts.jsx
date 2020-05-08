import React from 'react'
import style from './MyPosts.module.scss'
import PostItem from './Post/Post'
import NewPostForm from './NewPostForm/NewPostForm'

const MyPosts = React.memo(props => {
  let postItem = [...props.posts]
    .reverse()
    .map(d => <PostItem key={d.id} message={d.message} likes={d.likes} />)

  return (
    <div className={style.posts}>
      <NewPostForm addPost={props.addPost} />
      {postItem}
    </div>
  )
})

export default MyPosts
