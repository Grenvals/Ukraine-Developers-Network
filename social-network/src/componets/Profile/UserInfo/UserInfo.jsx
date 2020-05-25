import React from 'react'
import style from './UserInfo.module.scss'
import backgroundImg from '../../../assets/images/profile/profile-bg.jpg'
import editIcon from '../../../assets/images/edit-white.svg'
import UserStatus from './UserStatus/UserStatusCopy'
import { UserProfilePhoto } from '../../common/UserFoto/UserFoto'
import { UserContacts } from './UserContacts/UserContacts'
import { NavLinkButton } from '../../common/Buttons/Buttons'
import { Head, HeadImage } from '../../common/Head/Head'

const UserInfo = props => {
  return (
    <div className={style.userInfo}>
      <HeadImage image={backgroundImg} />
      <div className={style.userInfo__main}>
        <UserProfilePhoto
          isLoggedUser={props.isLoggedUser}
          photo={props.profile.photos.large}
          updateUserPhoto={props.updateUserPhoto}
        />
        <h1 className={style.userInfo__name}>{props.profile.fullName}</h1>
        <div className={style.userInfo__container}>
          <UserContacts
            className={style.userInfo__contacts}
            contacts={props.profile.contacts}
          />
          {props.isLoggedUser && (
            <NavLinkButton
              link={'/settings'}
              className={style.userInfo__button}
              name={'Edit profile'}
              icon={editIcon}
            />
          )}
        </div>
        <div className={style.userInfo__description}>
          {props.profile.lookingForAJobDescription}
        </div>

        <UserStatus
          status={props.status}
          isLoggedUser={props.isLoggedUser}
          updateUserStatus={props.updateUserStatus}
        />
      </div>
      <Head title="About user" />
      <div className={style.userInfo__about}>
        <p className={style.aboutUserText}>{props.profile.aboutMe} </p>
        <div className={style.detail}>
          <div className={style.detailJob}>
            Looking for a job: {props.profile.lookingForAJob}
          </div>
          <div className="">Website: {props.profile.contacts.website} </div>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
