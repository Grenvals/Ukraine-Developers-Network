import React from 'react'
import * as axios from 'axios'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'

class UsersContainerAPI extends React.Component {
  componentDidMount() {
    this.props.setLoadingStatus(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,  {
          withCredentials: true,
          headers: {
            'API-KEY': '8fc471c4-748c-4bc5-bda6-3ac04c8f38c0',
          },
        }
      )
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
        this.props.setLoadingStatus(false);
      })
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=ua&category=technology&apiKey=08ec5abbba254b49a6288d68358823ba'
      )
      .then(response => {})
  }
  onPageChanget = pageNumber => {
    this.props.setCurrentPage(pageNumber)
    this.props.setLoadingStatus(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
        {
          withCredentials: true,
          headers: {
            'API-KEY': '8fc471c4-748c-4bc5-bda6-3ac04c8f38c0',
          },
        }
      )
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setLoadingStatus(false);
      })
  }
  render() {
    return (
      <> 
      {this.props.isLoading ?  <Preloader /> : <Users
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanget={this.onPageChanget}
      /> }
      
      </>
      
    )
  }
}

export default UsersContainerAPI
