import React from 'react'
import MyPosts from './MyPosts'
import {
  addPostActionCreator,
  updateNewPostMessageActionCreator,
} from '../../../redux/profileReducer'
import { connect } from 'react-redux'

// const MyPostsContainer = props => {
//   return (
//     <StoreContext>
//       {store => {
//         let state = store.getState()
//         let posts = state.profilePage.posts
//         let newPostMessage = state.profilePage.newPostMessage
//         let updateNewPostMessage = text => {
//           store.dispatch(updateNewPostMessageActionCreator())
//         }
//         let addPost = () => {
//           store.dispatch(addPostActionCreator())
//         }
//         return (
//           <MyPosts
//             posts={posts}
//             updateNewPostMessage={updateNewPostMessage}
//             addPost={addPost}
//             newPostMessage={newPostMessage}
//           />
//         )
//       }}
//     </StoreContext>
//   )
// }

let mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    newPostMessage: state.profilePage.newPostMessage,
  }
}
let mapDispatchToProps = dispatch => {
  return {
    updateNewPostMessage: text => {
      dispatch(updateNewPostMessageActionCreator(text))
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    },
  }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
// newPostsContainer - создаем компоненту контейнер
//connect(mapStateToProps, mapDispatchToProps) - при вершому визові налаштовуємо, передаємо в якості агрументів дві функції, в першу приходить store і ми вибираємо те що нам потрібно, в другу dispatch, вони повинні повертати обєкт. В
// MyPosts - передfэм компоненту навколо якоъ буде створена container component

export default MyPostsContainer
