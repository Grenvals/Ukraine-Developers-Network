import { Notification } from './Notification/Notification';
import React from 'react';
import { connect } from 'react-redux';
import style from './Notifications.module.scss';

const Notifications = ({ notifications, isSuspense = false }) => {
  const notificationList = [...notifications]
    .reverse()
    .map(d => <Notification key={d.id} message={d.message} error={d.error} />);
  return (
    <div className={style.notifications}>
      <ul className={style.notifications__list}>{notificationList}</ul>
      {isSuspense && <div className={style.notifications__loader}></div>}
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
