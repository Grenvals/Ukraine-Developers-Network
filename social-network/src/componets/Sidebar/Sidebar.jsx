import { DialogsPanel } from './DialogsPanel/DialogsPanel';
import { Navbar } from './Navbar/Navbar';
import React from 'react';
import { connect } from 'react-redux';
import { openDialogWithUser } from '../../redux/dialogsReducer';
import style from './Sidebar.module.scss';

export const Sidebar = ({ dialogs, startDialogWithUser, match }) => {
  return (
    <div className={style.sidebar}>
      <Navbar />
      <DialogsPanel dialogs={dialogs} openDialogWithUser={openDialogWithUser} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    dialogs: state.dialogsPage.dialogs,
  };
};

export const SidebarContainer = connect(mapStateToProps, { openDialogWithUser })(Sidebar);
