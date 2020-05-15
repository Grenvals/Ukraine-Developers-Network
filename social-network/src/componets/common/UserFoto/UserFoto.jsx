import React from 'react'
import style from './UserFoto.module.scss'
import defaultUserPhoto from '../../../assets/images/user-default.svg'
import fileUploadIcon from '../../../assets/images/file.svg'

export const UserProfilePhoto = props => {
  const onMainPhotoSelected = e => {
    if (e.target.files.length > 0) {
      props.changeUserPhoto(e.target.files[0])
    }
  }
  return (
    <div className={style.userFoto}>
      <img src={props.photo != null ? props.photo : defaultUserPhoto} alt="User Foto" />
      {props.isLoggedUser && (
        <div className={style.userFoto__upload}>
          <label>
            <input type={'file'} onChange={onMainPhotoSelected} name="user_photo" />
            <img className={style.userFoto__fileIcon} src={fileUploadIcon} alt="file-icon" />
          </label>
        </div>
      )}
    </div>
  )
}
