import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

export const withAuthRedirect = Component => {
  let mapStateToPropsForRedirect = state => {
    return {
      isAuth: state.auth.isAuth,
    }
  }

  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to={'/Login'} />
      return <Component {...this.props} />
    }
  }

  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  )
  return ConnectedAuthRedirectComponent
}
