import React from 'react'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'

class UsersContainerAPI extends React.Component {
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

export default UsersContainerAPI
