import React from 'react'
import style from './UserInfo.module.scss'
import backgroundImg from '../../../assets/images/profile/profile-bg.jpg'
import editIcon from '../../../assets/images/edit-white.svg'
import { UserStatus } from './UserStatus/UserStatus'
import { UserProfilePhoto } from '../../common/UserFoto/UserFoto'
import { UserContacts } from './UserContacts/UserContacts'
import { NavLinkButton } from '../../common/Buttons/Buttons'
import { Head, HeadImage } from '../../common/Head/Head'
import { UserDescription } from './UserDescription/UserDescription'

const UserInfo = ({
  profile,
  isLoggedUser,
  updateUserPhoto,
  status,
  updateUserStatus,
}) => {
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
          {isLoggedUser && (
            <NavLinkButton
              link={'/settings'}
              className={style.userInfo__button}
              name={'Edit profile'}
              icon={editIcon}
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
  )
}

export default UserInfo
