import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getUserProfile } from '../../redux/profileReducer'
import { withRouter} from 'react-router'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2
    }
    this.props.getUserProfile(userId)
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />
  }
}

let mapStateToProps = state => {
  return {
    profile: state.profilePage.profile,
  }
}
let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
let urlWithRouterComp = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, { getUserProfile })(urlWithRouterComp)
