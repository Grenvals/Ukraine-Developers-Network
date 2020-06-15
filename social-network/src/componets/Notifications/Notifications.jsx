import { Notification } from './Notification/Notification';
import React from 'react';
import { connect } from 'react-redux';
import style from './Notifications.module.scss';

const Notifications = ({ notifications, isSuspense }) => {
  const notificationList = [...notifications]
    .reverse()
    .map(n => <Notification key={n.id} message={n.message} error={n.error} />);
  return (
    <div className={style.notifications}>
      <ul className={style.notifications__list}>{notificationList}</ul>
      {isSuspense && (
        <div className={style.notifications__suspense}>
          <div className={style.notifications__loader}></div>
          <span className={style.notifications__descr}>Connecting to server</span>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    notifications: state.notifications.notifications,
    isSuspense: state.notifications.isSuspense,
  };
};

export const NotificationsContainer = connect(mapStateToProps, {})(Notifications);
