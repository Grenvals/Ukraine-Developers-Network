import React from 'react'
import { connect } from 'react-redux'
import { logOut } from '../../redux/authReducer'
import Header from './Header'

class HeaderContainer extends React.Component {
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

export default connect(mapStateToProps, {
  logOut,
})(HeaderContainer)
