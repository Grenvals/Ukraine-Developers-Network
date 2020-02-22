import React from 'react';
import style from './MyPosts.module.css';
import PostItem from './Post/Post';
import NewPost from './NewPost/NewPost';

const MyPosts = () => {
	return (
		<div className="MyPosts">
			<NewPost />
			<PostItem />
			<PostItem />
			<PostItem />
			<PostItem />
		</div>
	);

}

export default MyPosts;