import React from 'react'
import style from './UserInfo.module.scss'
import backgroundImg from '../../../assets/images/profile/profile-bg.jpg'
import editIcon from '../../../assets/images/edit-white.svg'
import UserStatus from './UserStatus/UserStatusCopy'
import { UserProfilePhoto } from '../../common/UserFoto/UserFoto'
import { UserContacts } from './UserContacts/UserContacts'
import { NavLinkButton } from '../../common/Buttons/Buttons'
import { Head, HeadImage } from '../../common/Head/Head'

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
      <div className={`${style.userInfo__description} ${style.description}`}>
        <p className={style.description__about}>
          {profile.aboutMe ? profile.aboutMe : 'Sorry, user didn`t write about...'}{' '}
        </p>
        <div className={style.description__item}>
          Looking for a job:{' '}
          <span className={style.description__status}>
            {profile.lookingForAJob ? 'true' : 'false'}
          </span>
        </div>
        <div className={style.description__item}>
          Website:
          <a
            href={profile.contacts.website}
            target="blank"
            className={style.description__text}
          >
            {profile.contacts.website ? profile.contacts.website : 'not set'}
          </a>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
