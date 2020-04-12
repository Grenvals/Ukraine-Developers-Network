import React from 'react'
import { connect } from 'react-redux'
import Sidebar from './Sidebar'

// const Sidebar = props => {
//   return store => {
//     return (
//       <div className={style.sidebar}>
//         <Navbar />
//         <Friends state={store.getState().sidebar.friends} />
//       </div>
//     )
//   }
// }
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
