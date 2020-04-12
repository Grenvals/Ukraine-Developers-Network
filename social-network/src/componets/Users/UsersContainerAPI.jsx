import React from 'react'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import { usersAPI } from '../../api/api'

class UsersContainerAPI extends React.Component {
  componentDidMount() {
    this.props.setLoadingStatus(true)
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.setUsers(data.items)
      this.props.setTotalUsersCount(data.totalCount)
      this.props.setLoadingStatus(false)
    })
  }
  onPageChanget = pageNumber => {
    this.props.setCurrentPage(pageNumber)
    this.props.setLoadingStatus(true)
    usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
      this.props.setUsers(data.items)
      this.props.setLoadingStatus(false)
    })
  }
  render() {
    return (
      <>
        {this.props.isLoading ? (
          <Preloader />
        ) : (
          <Users
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanget={this.onPageChanget}
          />
        )}
      </>
    )
  }
}

export default UsersContainerAPI
