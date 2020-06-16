import { NewsPanel } from './NewsPanel/NewsPanel';
import React from 'react';
import { UserCountPanel } from './UserCountPanel/UserCountPanel';
import { connect } from 'react-redux';
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
    headlines: state.news.headlines,
    totalUsersCount: state.usersPage.totalUsersCount,
    userId: state.auth.userId,
  };
};

const RightSidebarContainer = connect(mapStateToProps, {})(RightSidebar);

export { RightSidebarContainer as RightSidebar };
