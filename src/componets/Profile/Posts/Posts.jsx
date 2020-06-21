import React from 'react';
import { connect } from 'react-redux';

import { addPost, deletePost } from '../../../redux/profileReducer';
import { getAuthProfile, getProfilePosts } from '../../../selectors/selectors';
import { Preloader } from '../../common/Preloader/Preloader';
import { Post } from './Post/Post';
import { PostForm } from './PostForm/PostForm';

import style from './Posts.module.scss';

const Posts = React.memo(({ profile, posts, addPost, deletePost }) => {
  if (profile) {
    const postItem = [...posts]
      .reverse()
      .map(d => (
        <Post
          key={d.id}
          id={d.id}
          userName={profile.fullName}
          userPhoto={profile.photos.large}
          message={d.message}
          date={d.date}
          image={d.image}
          likes={d.likes}
          deletePost={deletePost}
        />
      ));
    return (
      <div className={style.posts}>
        <PostForm addPost={addPost} />
        {postItem}
      </div>
    );
  } else {
    return <Preloader />;
  }
});

const mapStateToProps = state => {
  return {
    posts: getProfilePosts(state),
    profile: getAuthProfile(state),
  };
};

const PostsContainer = connect(mapStateToProps, { addPost, deletePost })(Posts);

export { PostsContainer as Posts };
