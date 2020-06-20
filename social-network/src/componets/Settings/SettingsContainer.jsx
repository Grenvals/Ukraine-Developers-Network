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
import {
  getAuthProfile,
  getAuthUserId,
  getProfileStatus,
} from '../../selectors/selectors';
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
    profile: getAuthProfile(state),
    status: getProfileStatus(state),
    autorizedUserId: getAuthUserId(state),
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
