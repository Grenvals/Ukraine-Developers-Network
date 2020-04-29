// import React from 'react'
import MyPosts from './MyPosts'
import { addPostActionCreator } from '../../../redux/profileReducer'
import { connect } from 'react-redux'

let mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
  }
}
let mapDispatchToProps = dispatch => {
  return {
    addPost: (message) => {
      dispatch(addPostActionCreator(message))
    },
  }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
