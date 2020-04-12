import React from 'react'
import * as axios from 'axios'
import { connect } from 'react-redux'
import { setAuthUserData } from '../../redux/authReducer'
import Header from './Header'

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then(response => {
        
        if (response.data.resultCode === 0) {
          let {id, email, login} = response.data.data
          this.props.setAuthUserData(id, email, login)
          axios

          .get(`https://social-network.samuraijs.com/api/1.0/profile/` + id)
          .then(response => {
            // this.props.setUserProfile(response.data)
          })
        }
      
      })
  }
  render() {
    return <Header {...this.props} />
  }
}
let mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userId: state.auth.userId,
  }
}

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer)
