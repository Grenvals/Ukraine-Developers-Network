import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {
  getUserProfile,
  getUserStatus,
  updateUserPhoto,
  updateUserProfile,
  updateUserStatus,
} from '../../redux/profileReducer';
import { toogleRightSidebar } from './../../redux/sidebarReducer';
import { Settings } from './Settings';

class SettingsContainer extends React.Component {
  refreshUserDate() {
    this.props.getUserProfile(this.props.autorizedUserId);
    this.props.getUserStatus(this.props.autorizedUserId);
  }
  componentDidMount() {
    this.refreshUserDate();
    this.props.toogleRightSidebar(true);
  }
  render() {
    return (
      <Settings
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateUserStatus={this.props.updateUserStatus}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.auth.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.userId,
  };
};

const SettingsContainers = compose(
  connect(mapStateToProps, {
    getUserProfile,
    getUserStatus,
    updateUserStatus,
    updateUserPhoto,
    updateUserProfile,
    toogleRightSidebar,
  }),
  withAuthRedirect
)(SettingsContainer);

export { SettingsContainers as Settings };
