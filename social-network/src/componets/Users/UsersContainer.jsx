import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import {
  followUser,
  unfollowUser,
  setCurrentPage,
  getRequestUsers,
} from '../../redux/usersReducer';
import { startDialogWithUser } from '../../redux/dialogsReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsLoading,
  getFollowingInProgress,
} from '../../redux/users-selectors';

class UsersContainer extends React.Component {
  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    this.props.getUsers(currentPage, pageSize);
  }
  onPageChanget = pageNumber => {
    const { pageSize } = this.props;
    this.props.getUsers(pageNumber, pageSize);
    this.props.setCurrentPage(pageNumber);
  };
  render() {
    return (
      <Users
        users={this.props.users}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanget={this.onPageChanget}
        followingInProgress={this.props.followingInProgress}
        unfollowUser={this.props.unfollowUser}
        followUser={this.props.followUser}
        isLoading={this.props.isLoading}
        startDialogWithUser={this.props.startDialogWithUser}
      />
    );
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
  };
};

export default compose(
  connect(mapStateToProps, {
    setCurrentPage,
    getUsers: getRequestUsers,
    followUser,
    unfollowUser,
    startDialogWithUser,
  }),
  withAuthRedirect
)(UsersContainer);
