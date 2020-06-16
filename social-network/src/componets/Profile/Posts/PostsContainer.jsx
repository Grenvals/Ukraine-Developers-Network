import {
  addPostActionCreator,
  deletePostActionCreator,
} from '../../../redux/profileReducer';

import { Posts } from './Posts';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    profile: state.auth.profile,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPost: (message, date) => {
      dispatch(addPostActionCreator(message, date));
    },
    deletePost: id => {
      dispatch(deletePostActionCreator(id));
    },
  };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export { PostsContainer as Posts };
