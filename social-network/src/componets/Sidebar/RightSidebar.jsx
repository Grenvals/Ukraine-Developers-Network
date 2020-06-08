import { NewsPanel } from './NewsPanel/NewsPanel';
import React from 'react';
import { connect } from 'react-redux';
import { openDialogWithUser } from '../../redux/dialogsReducer';
import style from './Sidebar.module.scss';

export const RightSidebar = ({ dialogs, startDialogWithUser, match }) => {
  return (
    <div className={style.rightSidebar}>
      {dialogs.length !== 0 && (
        <NewsPanel state={dialogs} openDialogWithUser={openDialogWithUser} />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    dialogs: state.dialogsPage.dialogs,
  };
};

export const RightSidebarContainer = connect(mapStateToProps, { openDialogWithUser })(
  RightSidebar
);
