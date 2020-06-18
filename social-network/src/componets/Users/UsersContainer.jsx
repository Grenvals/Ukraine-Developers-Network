import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { startDialogWithUser } from '../../redux/dialogsReducer';
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsLoading,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from '../../redux/users-selectors';
import {
  followUser,
  getRequestUsers,
  setCurrentPage,
  setPagPortionNumber,
  unfollowUser,
  updatePageSize,
} from '../../redux/usersReducer';
import { toogleRightSidebar } from './../../redux/sidebarReducer';
import { Users } from './Users';

class UsersContainer extends React.Component {
  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    this.props.getUsers(currentPage, pageSize);
    this.props.toogleRightSidebar(true);
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
        updatePageSize={this.props.updatePageSize}
        pagPortionNumber={this.props.pagPortionNumber}
        setPagPortionNumber={this.props.setPagPortionNumber}
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
    pagPortionNumber: state.usersPage.pagPortionNumber,
  };
};

const UsersCompose = compose(
  connect(mapStateToProps, {
    setCurrentPage,
    getUsers: getRequestUsers,
    followUser,
    unfollowUser,
    startDialogWithUser,
    toogleRightSidebar,
    updatePageSize,
    setPagPortionNumber,
  }),
  withAuthRedirect
)(UsersContainer);

export default UsersCompose;
