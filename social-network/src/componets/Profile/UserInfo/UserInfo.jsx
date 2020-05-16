import React from 'react'
import style from './UserInfo.module.scss'
import background from '../../../assets/images/profile/background.jpg'
import facebookImg from '../../../assets/images/contacts/facebook.svg'
import twitterImg from '../../../assets/images/contacts/twitter.svg'
import instagramImg from '../../../assets/images/contacts/instagram.svg'
import githubImg from '../../../assets/images/contacts/github.svg'
import Head from '../../common/Head/Head'
import UserStatus from './UserStatus/UserStatusCopy'
import { UserProfilePhoto } from '../../common/UserFoto/UserFoto'

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
      </div>
      <div className={style.aboutUser}>
        <Head title="About user" />
        <p className={style.aboutUserText}>{props.profile.aboutMe} </p>
      </div>
      <div className={style.contacts}>
        <ul className={style.contactsList}>
          <li className={style.contactsItem}>
            <a className={style.contactsLink} href={props.profile.contacts.facebook}>
              <img className={style.contactsLogo} src={facebookImg} alt="facebook" />
            </a>
          </li>
          <li className={style.contactsItem}>
            <a className={style.contactsLink} href={props.profile.contacts.twitter}>
              <img className={style.contactsLogo} src={twitterImg} alt="twitter" />
            </a>
          </li>
          <li className={style.contactsItem}>
            <a className={style.contactsLink} href={props.profile.contacts.instagram}>
              <img className={style.contactsLogo} src={instagramImg} alt="instagram" />
            </a>
          </li>
          <li className={style.contactsItem}>
            <a className={style.contactsLink} href={props.profile.contacts.github}>
              <img className={style.contactsLogo} src={githubImg} alt="github" />
            </a>
          </li>
        </ul>
      </div>
      <div className={style.detail}>
        <div className={style.detailJob}>
          Looking for a job: {props.profile.lookingForAJob}
        </div>
        <div className="">Website: {props.profile.contacts.website} </div>
      </div>
    </div>
  )
}
// {props.profile.photos.small}

export default UserInfo
