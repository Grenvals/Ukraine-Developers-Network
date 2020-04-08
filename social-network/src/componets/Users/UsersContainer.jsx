// import React from 'react'
import { connect } from 'react-redux'
import  UsersContainerAPI from './UsersContainerAPI'
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setLoadingStatus } from '../../redux/usersReducer'

let mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
  }
}

const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setLoadingStatus,
})(UsersContainerAPI)

export default UsersContainer
