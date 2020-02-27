import React from 'react';
import style from './MyPosts.module.scss';
import PostItem from './Post/Post';
import NewPost from './NewPost/NewPost';

const MyPosts = () => {
	return (
		<div className={style.posts}>
			<NewPost />
			<PostItem message="Hi, how are you?" likes="11"/>
			<PostItem message="You can do it!" likes="22" />
			<PostItem message='Lets study React' likes="5" />
		</div>
	);

}

export default MyPosts;