// import React from 'react'
import MyPosts from './MyPosts'
import {
  addPostActionCreator,
  deletePostActionCreator,
} from '../../../redux/profileReducer'
import { connect } from 'react-redux'

let mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
  }
}
let mapDispatchToProps = dispatch => {
  return {
    addPost: message => {
      dispatch(addPostActionCreator(message))
    },
    deletePost: id => {
      dispatch(deletePostActionCreator(id))
    },
  }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
