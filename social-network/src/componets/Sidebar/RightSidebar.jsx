import React from 'react';
import { connect } from 'react-redux';

import {
  getNewsHeadlines,
  getAuthUserId,
  getTotalUsersCount,
} from '../../selectors/selectors';
import { NewsPanel } from './NewsPanel/NewsPanel';
import { UserCountPanel } from './UserCountPanel/UserCountPanel';

import style from './Sidebar.module.scss';

const RightSidebar = ({
  dialogs,
  getTopHeadlines,
  headlines,
  totalUsersCount,
  userId,
  match,
}) => {
  return (
    <div className={style.rightSidebar}>
      <UserCountPanel userCount={totalUsersCount} userId={userId} />
      <NewsPanel
        state={dialogs}
        headlines={headlines}
        getTopHeadlines={getTopHeadlines}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    headlines: getNewsHeadlines(state),
    totalUsersCount: getTotalUsersCount(state),
    userId: getAuthUserId(state),
  };
};

const RightSidebarContainer = connect(mapStateToProps, {})(RightSidebar);

export { RightSidebarContainer as RightSidebar };
