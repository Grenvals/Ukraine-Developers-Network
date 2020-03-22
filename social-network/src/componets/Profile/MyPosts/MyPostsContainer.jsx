import React from 'react'
import PostItem from './Post/Post'
import NewPost from './NewPost/NewPost'
import MyPosts from './MyPosts'
import {
  addPostActionCreator,
  updateNewPostMessageActionCreator,
} from '../../../redux/profileReducer'
import StoreContext from '../../../redux/context-store'

const MyPostsContainer = props => {
  return (
    <StoreContext>
      {store => {
        let state = store.getState()
        let posts = state.profilePage.posts
        let newPostMessage = state.profilePage.newPostMessage
        let updateNewPostMessage = text => {
          store.dispatch(updateNewPostMessageActionCreator())
        }
        let addPost = () => {
          store.dispatch(addPostActionCreator())
        }
        return (
          <MyPosts
            posts={posts}
            updateNewPostMessage={updateNewPostMessage}
            addPost={addPost}
            newPostMessage={newPostMessage}
          />
        )
      }}
    </StoreContext>
  )
}

export default MyPostsContainer
