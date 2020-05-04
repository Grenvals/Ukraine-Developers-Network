import React from 'react'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import { connect } from 'react-redux'
import {
  followUser,
  unfollowUser,
  setCurrentPage,
  getRequestUsers,
} from '../../redux/usersReducer'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsLoading,
  getFollowingInProgress,
} from '../../redux/users-selectors'

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }
  onPageChanget = pageNumber => {
    this.props.getUsers(pageNumber, this.props.pageSize)
    this.props.setCurrentPage(pageNumber)
  }
  render() {
    return (
      <>
        {this.props.isLoading ? (
          <Preloader />
        ) : (
          <Users
            users={this.props.users}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanget={this.onPageChanget}
            followingInProgress={this.props.followingInProgress}
            unfollowUser={this.props.unfollowUser}
            followUser={this.props.followUser}
          />
        )}
      </>
    )
  }
}

let mapStateToProps = state => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isLoading: getIsLoading(state),
    followingInProgress: getFollowingInProgress(state),
  }
}

export default compose(
  connect(mapStateToProps, {
    setCurrentPage,
    getUsers: getRequestUsers,
    followUser,
    unfollowUser,
  }),
  withAuthRedirect
)(UsersContainer)
