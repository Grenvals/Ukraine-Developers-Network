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
    profile: state.auth.profile,
  }
}
let mapDispatchToProps = dispatch => {
  return {
    addPost: (message, date) => {
      dispatch(addPostActionCreator(message, date))
    },
    deletePost: id => {
      dispatch(deletePostActionCreator(id))
    },
  }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
