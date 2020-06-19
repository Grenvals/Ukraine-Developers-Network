import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { Notification } from './Notification/Notification';

import style from './Notifications.module.scss';

const Notifications = ({ notifications, isSuspense }) => {
  return (
    <div className={style.notifications}>
      <ul className={style.notifications__list}>
        <TransitionGroup className={style.notifications__list}>
          {[...notifications].map(n => (
            <CSSTransition key={n.id} timeout={300} classNames="notificationItem">
              <Notification key={n.id} message={n.message} error={n.error} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
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

const NotificationsContainer = connect(mapStateToProps, {})(Notifications);

export { NotificationsContainer as Notifications };
