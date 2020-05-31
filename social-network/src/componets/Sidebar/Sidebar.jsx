import React from 'react';
import style from './Sidebar.module.scss';
import { connect } from 'react-redux';
import { DialogsPanel } from './DialogsPanel/DialogsPanel';
import { Navbar } from './Navbar/Navbar';

export const Sidebar = ({ dialogs }) => {
  return (
    <div className={style.sidebar}>
      <Navbar />
      {dialogs.length !== 0 && <DialogsPanel state={dialogs} />}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    dialogs: state.dialogsPage.dialogs,
  };
};

export const SidebarContainer = connect(mapStateToProps, {})(Sidebar);
