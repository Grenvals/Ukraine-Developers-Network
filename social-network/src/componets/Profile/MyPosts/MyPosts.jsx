import React from 'react';
import style from './MyPosts.module.scss';
import PostItem from './Post/Post';
import { NewPostForm } from './NewPostForm/NewPostForm';
import { Preloader } from '../../common/Preloader/Preloader';

const MyPosts = React.memo(props => {
  if (props.profile) {
    let postItem = [...props.posts]
      .reverse()
      .map(d => (
        <PostItem
          key={d.id}
          id={d.id}
          userName={props.profile.fullName}
          userPhoto={props.profile.photos.large}
          message={d.message}
          date={d.date}
          image={d.image}
          likes={d.likes}
          deletePost={props.deletePost}
        />
      ));
    return (
      <div className={style.posts}>
        <NewPostForm addPost={props.addPost} />
        {postItem}
      </div>
    );
  } else {
    return <Preloader />;
  }
});

export default MyPosts;
