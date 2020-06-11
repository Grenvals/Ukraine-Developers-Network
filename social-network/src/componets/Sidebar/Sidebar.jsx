import { DialogsPanel } from './DialogsPanel/DialogsPanel';
import { Navbar } from './Navbar/Navbar';
import { NewsPanel } from './NewsPanel/NewsPanel';
import React from 'react';
import { UserCountPanel } from './UserCountPanel/UserCountPanel';
import { connect } from 'react-redux';
import { openDialogWithUser } from '../../redux/dialogsReducer';
import style from './Sidebar.module.scss';

export const Sidebar = ({
  dialogs,
  startDialogWithUser,
  isAuth,
  headlines,
  totalUsersCount,
  userId,
}) => {
  return (
    <div className={style.sidebar}>
      {isAuth ? (
        <React.Fragment>
          <Navbar />
          <DialogsPanel dialogs={dialogs} openDialogWithUser={openDialogWithUser} />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <UserCountPanel userCount={totalUsersCount} userId={userId} />
          <NewsPanel state={dialogs} headlines={headlines} />
        </React.Fragment>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    dialogs: state.dialogsPage.dialogs,
    isAuth: state.auth.isAuth,
    headlines: state.news.headlines,
    totalUsersCount: state.usersPage.totalUsersCount,
    userId: state.auth.userId,
  };
};

export const SidebarContainer = connect(mapStateToProps, { openDialogWithUser })(Sidebar);
