import React from 'react';
import style from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
	return <div className={`${style.profile} ${style.nav}`}>
	<div className="profile-bg"></div>
	<div className="user-info"></div>
	<MyPosts />
</div>;

}

export default Profile;