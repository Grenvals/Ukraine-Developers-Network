import {
  getUserProfile,
  getUserStatus,
  updateUserPhoto,
  updateUserStatus,
} from '../../redux/profileReducer';

import { Profile } from './Profile';
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { startDialogWithUser } from '../../redux/dialogsReducer';
import { toogleRightSidebar } from './../../redux/sidebarReducer';
import { withRouter } from 'react-router';

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
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
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
