import React from 'react';
import { connect } from 'react-redux';

import {
  getNewsHeadlines,
  getAuthUserId,
  getTotalUsersCount,
  getNewsError,
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
  newsError,
}) => {
  return (
    <div className={style.rightSidebar}>
      <UserCountPanel userCount={totalUsersCount} userId={userId} />
      <NewsPanel
        state={dialogs}
        headlines={headlines}
        getTopHeadlines={getTopHeadlines}
        newsError={newsError}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    headlines: getNewsHeadlines(state),
    newsError: getNewsError(state),
    totalUsersCount: getTotalUsersCount(state),
    userId: getAuthUserId(state),
  };
};

const RightSidebarContainer = connect(mapStateToProps, {})(RightSidebar);

export { RightSidebarContainer as RightSidebar };
