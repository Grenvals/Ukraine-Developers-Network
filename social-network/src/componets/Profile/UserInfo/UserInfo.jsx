import React from 'react';

import editIcon from '../../../assets/images/edit-white.svg';
import messageIcon from '../../../assets/images/message-white.svg';
import backgroundImg from '../../../assets/images/profile/profile-bg.jpg';
import { NavLinkButton } from '../../common/Buttons/Buttons';
import { Head, HeadImage } from '../../common/Head/Head';
import { UserProfilePhoto } from '../../common/UserFoto/UserFoto';
import { UserContacts } from './UserContacts/UserContacts';
import { UserDescription } from './UserDescription/UserDescription';
import { UserStatus } from './UserStatus/UserStatus';

import style from './UserInfo.module.scss';

const UserInfo = ({
  profile,
  isLoggedUser,
  updateUserPhoto,
  status,
  updateUserStatus,
  startDialogWithUser,
}) => {
  const onClick = () => {};
  const startDialog = () => {
    startDialogWithUser(profile.userId);
  };
  return (
    <div className={style.userInfo}>
      <HeadImage image={backgroundImg} />
      <div className={style.userInfo__main}>
        <UserProfilePhoto
          isLoggedUser={isLoggedUser}
          photo={profile.photos.large}
          updateUserPhoto={updateUserPhoto}
          userId={profile.userId}
        />
        <h1 className={style.userInfo__name}>{profile.fullName}</h1>
        <div className={style.userInfo__container}>
          <UserContacts
            className={style.userInfo__contacts}
            contacts={profile.contacts}
          />
          {isLoggedUser ? (
            <NavLinkButton
              link={'/settings'}
              className={style.userInfo__button}
              name={'Edit profile'}
              icon={editIcon}
              onClick={onClick}
              adaptive={true}
            />
          ) : (
            <NavLinkButton
              link={'/dialogs/' + profile.userId}
              className={style.userInfo__button}
              name={'Send message'}
              onClick={startDialog}
              icon={messageIcon}
              adaptive={true}
            />
          )}
        </div>
        <UserStatus
          status={status}
          isLoggedUser={isLoggedUser}
          updateUserStatus={updateUserStatus}
        />
        <div className={style.userInfo__jobDescription}>
          {profile.lookingForAJobDescription
            ? profile.lookingForAJobDescription
            : 'description not set'}
        </div>
      </div>
      <Head title="About user" />
      <UserDescription profile={profile}></UserDescription>
    </div>
  );
};

export { UserInfo };
