import React from 'react'
import style from './MyPosts.module.scss'
import PostItem from './Post/Post'
import NewPost from './NewPost/NewPost'

let postData = [
  { id: 1, message: 'Hi, how are you?', likes: 11 },
  { id: 2, message: 'You can do it!', likes: 22 },
  { id: 3, message: 'Lets study React', likes: 5 },
]

let postItem = postData.map(d => (
  <PostItem message={d.message} likes={d.likes} />
))

const MyPosts = () => {
  return (
    <div className={style.posts}>
      <NewPost />
      {postItem}
    </div>
  )
}

export default MyPosts
