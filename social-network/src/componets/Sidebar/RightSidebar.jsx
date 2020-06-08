import { NewsPanel } from './NewsPanel/NewsPanel';
import React from 'react';
import { connect } from 'react-redux';
import style from './Sidebar.module.scss';

export const RightSidebar = ({ dialogs, getTopHeadlines, headlines, match }) => {
  return (
    <div className={style.rightSidebar}>
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
  };
};

export const RightSidebarContainer = connect(mapStateToProps, {})(RightSidebar);
