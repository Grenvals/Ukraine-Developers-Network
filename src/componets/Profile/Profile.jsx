import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { Preloader } from '../common/Preloader/Preloader';
import { Posts } from './Posts/Posts';
import { UserInfo } from './UserInfo/UserInfo';

import style from './Profile.module.scss';

const Profile = props => {
  if (!props.profile) {
    return <Preloader className={style.profile__preloader} />;
  } else {
    return (
      <div className={style.profile__wrap}>
        <PerfectScrollbar className={style.profile__scrollbar} component="div">
          <div className={style.profile}>
            <UserInfo
              profile={props.profile}
              status={props.status}
              updateUserStatus={props.updateUserStatus}
              isLoggedUser={props.isLoggedUser}
              updateUserPhoto={props.updateUserPhoto}
              startDialogWithUser={props.startDialogWithUser}
            />
            {props.isLoggedUser && <Posts />}
          </div>
        </PerfectScrollbar>
      </div>
    );
  }
};

export { Profile };
