import React from 'react';
import { connect } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import { openDialogWithUser } from '../../redux/dialogsReducer';
import {
  getAuthUserId,
  getIsAuth,
  getDialogs,
  getNewsHeadlines,
  getTotalUsersCount,
} from '../../selectors/selectors';
import { AudioPlayer } from '../common/Player/Player';
import { DialogsPanel } from './DialogsPanel/DialogsPanel';
import { Navbar } from './Navbar/Navbar';
import { NewsPanel } from './NewsPanel/NewsPanel';
import { UserCountPanel } from './UserCountPanel/UserCountPanel';

import style from './Sidebar.module.scss';

const Sidebar = ({ dialogs, isAuth, headlines, totalUsersCount, userId }) => {
  const isTablet = useMediaQuery({
    query: '(min-device-width: 767.98px)',
  });
  return (
    <div className={style.sidebar}>
      {isAuth ? (
        <React.Fragment>
          <Navbar />
          {isTablet && (
            <DialogsPanel dialogs={dialogs} openDialogWithUser={openDialogWithUser} />
          )}
        </React.Fragment>
      ) : (
        <React.Fragment>
          {isTablet && <UserCountPanel userCount={totalUsersCount} userId={userId} />}
          {isTablet && <NewsPanel state={dialogs} headlines={headlines} />}
        </React.Fragment>
      )}
      {isTablet && <AudioPlayer />}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    dialogs: getDialogs(state),
    isAuth: getIsAuth(state),
    headlines: getNewsHeadlines(state),
    totalUsersCount: getTotalUsersCount(state),
    userId: getAuthUserId(state),
  };
};

const SidebarContainer = connect(mapStateToProps, { openDialogWithUser })(Sidebar);

export { SidebarContainer as Sidebar };
