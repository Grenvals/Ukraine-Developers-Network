import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';

import { startDialogWithUser } from '../../redux/dialogsReducer';
import {
  getUserProfile,
  getUserStatus,
  updateUserPhoto,
  updateUserStatus,
} from '../../redux/profileReducer';
import {
  getProfileInfo,
  getProfileStatus,
  getAuthUserId,
  getIsAuth,
} from '../../selectors/selectors';
import { toogleRightSidebar } from './../../redux/sidebarReducer';
import { Profile } from './Profile';

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.autorizedUserId;
      if (!userId || !this.props.isAuth) {
        this.props.history.push('/login');
      }
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }
  componentDidMount() {
    this.refreshProfile();
    this.props.toogleRightSidebar(true);
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
    if (!this.props.isAuth) {
      this.props.history.push('/login');
    }
  }
  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateUserStatus={this.props.updateUserStatus}
        isLoggedUser={!this.props.match.params.userId}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: getProfileInfo(state),
    status: getProfileStatus(state),
    autorizedUserId: getAuthUserId(state),
    isAuth: getIsAuth(state),
  };
};

const ProfileCompose = compose(
  connect(mapStateToProps, {
    getUserProfile,
    getUserStatus,
    updateUserStatus,
    updateUserPhoto,
    toogleRightSidebar,
    startDialogWithUser,
  }),
  withRouter
)(ProfileContainer);

export { ProfileCompose as Profile };
