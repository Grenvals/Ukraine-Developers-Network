import React from 'react'
import style from './UserFoto.module.scss'
import defaultUserPhoto from '../../../assets/images/user-default.svg'
import fileUploadIcon from '../../../assets/images/file.svg'
import { NavLink } from 'react-router-dom'

export const UserPhoto = ({ photo = null, count, className = null }) => {
  return (
    <div className={`${style.photo} ${className}`}>
      <img
        className={style.photo__img}
        src={photo && photo !== null ? photo : defaultUserPhoto}
        alt="logo"
      />
      {count && count >= 1 && <div className={style.photo__count}>{count}</div>}
    </div>
  )
}

export const UserPhotoLink = ({ photo, link = '/', count = 0 }) => {
  return (
    <NavLink className={style.userPhoto} to={link} exact>
      <UserPhoto photo={photo} count={count} />
    </NavLink>
  )
}

export const UserProfilePhoto = ({ updateUserPhoto, photo, isLoggedUser }) => {
  const onMainPhotoSelected = e => {
    if (e.target.files.length > 0) {
      updateUserPhoto(e.target.files[0])
    }
  }
  return (
    <div className={style.userFoto}>
      <UserPhoto photo={photo != null ? photo : defaultUserPhoto} />
      {isLoggedUser && (
        <label className={style.userFoto__upload}>
          <input type={'file'} onChange={onMainPhotoSelected} name="user_photo" />
          <img
            className={style.userFoto__fileIcon}
            src={fileUploadIcon}
            alt="file-icon"
          />
        </label>
      )}
      <div className={style.userFoto__animate}></div>
    </div>
  )
}
