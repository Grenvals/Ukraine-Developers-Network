import React from 'react'
import style from './UserInfo.module.scss'
import background from '../../../assets/images/profile/background.jpg'
import Head from '../../common/Head/Head'
import UserStatus from './UserStatus/UserStatusCopy'
import { UserProfilePhoto } from '../../common/UserFoto/UserFoto'
import { UserContacts } from './UserContacts/UserContacts'
import { NavLinkButton } from '../../Buttons/Buttons'

const UserInfo = props => {
  return (
    <div className={style.userInfo}>
      <div className={style.head}>
        <img className={style.head_img} src={background} alt="bg" />
      </div>
      <div className={style.userGeneral}>
        <UserProfilePhoto
          isLoggedUser={props.isLoggedUser}
          photo={props.profile.photos.large}
          updateUserPhoto={props.updateUserPhoto}
        />
        <div className={style.userName}>{props.profile.fullName}</div>
        <div className={style.userDescription}>
          {props.profile.lookingForAJobDescription}
        </div>
        <UserStatus
          status={props.status}
          isLoggedUser={props.isLoggedUser}
          updateUserStatus={props.updateUserStatus}
        />
        {props.isLoggedUser && (
          <NavLinkButton
            link={'/settings'}
            className={style.userInfo__button}
            name={'Edit profile'}
          />
        )}
      </div>
      <div className={style.aboutUser}>
        <Head title="About user" />
        <p className={style.aboutUserText}>{props.profile.aboutMe} </p>
      </div>
      <UserContacts contacts={props.profile.contacts} />
      <div className={style.detail}>
        <div className={style.detailJob}>
          Looking for a job: {props.profile.lookingForAJob}
        </div>
        <div className="">Website: {props.profile.contacts.website} </div>
      </div>
    </div>
  )
}

export default UserInfo
