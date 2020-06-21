import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const withAuthRedirect = Component => {
  const mapStateToPropsForRedirect = state => {
    return {
      isAuth: state.auth.isAuth,
    };
  };

  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to={'/Login'} />;
      return <Component {...this.props} />;
    }
  }

  const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  );
  return ConnectedAuthRedirectComponent;
};
