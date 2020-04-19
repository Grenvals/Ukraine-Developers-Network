import React from 'react'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import { connect } from 'react-redux'
import {
  followUser,
  unfollowUser,
  setCurrentPage,
  getUsers,
} from '../../redux/usersReducer'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

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
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
    followingInProgress: state.usersPage.followingInProgress,
  }
}

export default compose(
  connect(mapStateToProps, {
    setCurrentPage,
    getUsers,
    followUser,
    unfollowUser,
  }),
  withAuthRedirect,
)(UsersContainer)
