// import React from 'react'
import { connect } from 'react-redux'
import Sidebar from './Sidebar'

let mapStateToProps = state => {
  return {
    sidebar: state.sidebar.friends,
  }
}
let mapDispatchToProps = dispatch => {
  return {}
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar)

export default SidebarContainer
