import React from 'react'
import PostItem from './Post/Post'
import NewPost from './NewPost/NewPost'
import MyPosts from './MyPosts'
import {
  addPostActionCreator,
  updateNewPostMessageActionCreator,
} from '../../../redux/profileReducer'

const MyPostsContainer = props => {
  let state = props.store.getState()
  let posts = state.profilePage.posts
  let newPostMessage = state.profilePage.newPostMessage
  let updateNewPostMessage = text => {
    props.store.dispatch(updateNewPostMessageActionCreator())
  }
  let addPost = () => {
    props.store.dispatch(addPostActionCreator())
  }

  return (
    <MyPosts
      posts={posts}
      updateNewPostMessage={updateNewPostMessage}
      addPost={addPost}
      newPostMessage={newPostMessage}
    />
  )
}

export default MyPostsContainer
