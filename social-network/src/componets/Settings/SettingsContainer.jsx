import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Settings from './Settings'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import {
  getUserProfile,
  getUserStatus,
  updateUserStatus,
  updateUserPhoto,
} from '../../redux/profileReducer'

class SettingsContainer extends React.Component {
  refreshUserDate() {
    this.props.getUserProfile(this.props.autorizedUserId)
    this.props.getUserStatus(this.props.autorizedUserId)
  }
  componentDidMount() {
    this.refreshUserDate()
  }

  render() {
    return (
      <Settings
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateUserStatus={this.props.updateUserStatus}
      />
    )
  }
}

let mapStateToProps = state => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.userId,
  }
}

export const SettingsContainers = compose(
  connect(mapStateToProps, {
    getUserProfile,
    getUserStatus,
    updateUserStatus,
    updateUserPhoto,
  }),
  withAuthRedirect
)(SettingsContainer)
