import { NewsPanel } from './NewsPanel/NewsPanel';
import React from 'react';
import { UserCountPanel } from './UserCountPanel/UserCountPanel';
import { connect } from 'react-redux';
import style from './Sidebar.module.scss';

// import { getTotalUsersCount } from '../../redux/usersReducer';

export const RightSidebar = ({
  dialogs,
  getTopHeadlines,
  headlines,
  totalUsersCount,
  match,
}) => {
  console.log(totalUsersCount);
  return (
    <div className={style.rightSidebar}>
      <UserCountPanel userCount={totalUsersCount} />
      {headlines && (
        <NewsPanel
          state={dialogs}
          headlines={headlines}
          getTopHeadlines={getTopHeadlines}
        />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    headlines: state.news.headlines,
    totalUsersCount: state.usersPage.totalUsersCount,
  };
};

export const RightSidebarContainer = connect(mapStateToProps, {})(RightSidebar);
