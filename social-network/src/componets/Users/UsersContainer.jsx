// import React from 'react'
import { connect } from 'react-redux'
import  UsersContainerAPI from './UsersContainerAPI'
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, setLoadingStatusAC } from '../../redux/usersReducer'

let mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
  }
}
let mapDispatchToProps = dispatch => {
  return {
    follow: userID => {
      dispatch(followAC(userID))
    },
    unfollow: userID => {
      dispatch(unfollowAC(userID))
    },
    setUsers: users => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: pageNumber => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: totalUsersCount => {
      dispatch(setTotalUsersCountAC(totalUsersCount))
    },
    setLoadingStatus: loadingStatus => {
      dispatch(setLoadingStatusAC(loadingStatus))
    },

  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerAPI)

export default UsersContainer
