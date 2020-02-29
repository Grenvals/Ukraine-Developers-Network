import React from 'react';
import style from './Dialogs.module.scss';
import Header from './Head/Head';
import NotificationItem from './NotificationItem/NotificationItem';

const Dialogs = () => {
	return (
		<div className={style.dialogs}>
			<Header />
			<ul className={style.notificationList}>
				<li className={style.notificationItem}><NotificationItem link="/music" userName="Anton Demin" messageCount="4" lastMessage="Great, I’ll see you tomorrow!..." /></li>
				<li className={style.notificationItem}><NotificationItem link="/music" userName="Alexander Dmitriev" messageCount="10" lastMessage="Hi Elaine! I have a question..." /></li>
				<li className={style.notificationItem}><NotificationItem link="/music" userName="Nicolas Volodin"  messageCount="3" lastMessage="Great, I’ll see you tomorrow!..." /></li>
				<li className={style.notificationItem}><NotificationItem link="/music" userName="Garold Insbruck" messageCount="2" lastMessage="Great, I’ll see you tomorrow!..."/></li>
			</ul>
		</div>
	)

}

export default Dialogs;