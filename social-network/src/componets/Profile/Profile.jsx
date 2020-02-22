import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
	return <div className={`${style.profile} ${style.nav}`}>
	<div className="profile-bg">Profile-bg</div>
	<div className="user-info">user-info</div>
	<MyPosts />
</div>;

}

export default Profile;