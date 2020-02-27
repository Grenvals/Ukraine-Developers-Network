import React from 'react';
import style from './NewPost.module.scss';

const NewPost = () => {
	return (
		<div className={style.newPost}>
			<textarea className={style.newPost__message} name="" id="" cols="20" rows="5" placeholder="Write your messаge hier"></textarea>
			<button className={style.button}>Submit</button>
		</div>
	);

}

export default NewPost;