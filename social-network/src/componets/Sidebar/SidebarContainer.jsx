// import React from 'react'
import { connect } from 'react-redux';
import Sidebar from './Sidebar';

let mapStateToProps = state => {
  return {
    dialogs: state.dialogsPage.dialogs,
  };
};

const SidebarContainer = connect(mapStateToProps, {})(Sidebar);

export default SidebarContainer;
