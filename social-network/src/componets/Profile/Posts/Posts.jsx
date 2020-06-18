import React from 'react';

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
      <div className={posts}>
        <PostForm addPost={addPost} />
        {postItem}
      </div>
    );
  } else {
    return <Preloader />;
  }
});

export { Posts };
