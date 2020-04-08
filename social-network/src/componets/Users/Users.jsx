import React from 'react'
import style from './Users.module.scss'
import Header from '../Head/Head'
import User from './User/User'
import * as axios from 'axios'
import Pagination from '../Pagination/Pagination'

class Users extends React.Component {
  componentDidMount() {
    axios
    .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
    .then(response => {
      this.props.setUsers(response.data.items)
      this.props.setTotalUsersCount(response.data.totalCount)
    })
  axios
    .get(
      'https://newsapi.org/v2/top-headlines?country=ua&category=technology&apiKey=08ec5abbba254b49a6288d68358823ba'
    )
    .then(response => {
    })
  }
  onPageChanget = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios
    .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
    .then(response => {
      this.props.setUsers(response.data.items)
    })
  }
  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize );
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
  
    return (
      <div className={style.users}>
        <Header />
        <div className={style.settings}>
          <Pagination pages={pages}  setCurrentPage={this.onPageChanget} currentPage={this.props.currentPage} />
        </div>
        <ul className="body">
          {this.props.users.map(u => (
            <User
              key={u.id}
              user={u}
              follow={this.props.follow}
              unfollow={this.props.unfollow}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Users
