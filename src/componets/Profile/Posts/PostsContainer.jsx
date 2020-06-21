import { connect } from 'react-redux';

import {
  addPostActionCreator,
  deletePostActionCreator,
} from '../../../redux/profileReducer';
import { getAuthProfile, getProfilePosts } from '../../../selectors/selectors';
import { Posts } from './Posts';

const mapStateToProps = state => {
  return {
    posts: getProfilePosts(state),
    profile: getAuthProfile(state),
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
