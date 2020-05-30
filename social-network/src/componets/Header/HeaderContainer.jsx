import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../redux/authReducer';
import HeaderUI from './Header';

class HeaderContainer extends React.Component {
  render() {
    return <HeaderUI {...this.props} />;
  }
}
let mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userId: state.auth.userId,
    profile: state.auth.profile,
  };
};

export const Header = connect(mapStateToProps, {
  logOut,
})(HeaderContainer);
