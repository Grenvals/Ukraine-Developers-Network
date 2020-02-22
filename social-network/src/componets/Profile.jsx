import React from 'react';
import style from './Profile.module.css';

const Profile = () => {
	return <div className={`${style.profile} ${style.nav}`}>
	<div className="profile-bg"></div>
	<div className="user-info"></div>
	<div className="new-post"></div>
	<div className="posts"></div>
</div>;

}

export default Profile;