import React from 'react';
import { NavLink } from 'react-router-dom';

import cn from 'classnames';

import fileUploadIcon from '../../../assets/images/file.svg';
import defaultUserPhoto from '../../../assets/images/user-default.svg';

import style from './UserFoto.module.scss';

export const UserPhoto = ({ photo = null, count, className = null }) => {
  return (
    <div className={cn({ [className]: className !== null })}>
      <div className={style.photo}>
        <img
          className={style.photo__img}
          src={photo && photo !== null ? photo : defaultUserPhoto}
          alt="logo"
        />
        {count || (count >= 0 && <div className={style.photo__count}>{count}</div>)}
      </div>
    </div>
  );
};

export const UserPhotoLink = ({ photo, link = '/', count, className = null }) => {
  return (
    <NavLink
      className={cn(style.userPhoto, { [className]: className !== null })}
      to={link}
      exact>
      <UserPhoto photo={photo} count={count} />
    </NavLink>
  );
};

export const UserProfilePhoto = ({ updateUserPhoto, photo, isLoggedUser, userId }) => {
  const onMainPhotoSelected = e => {
    if (e.target.files.length > 0) {
      updateUserPhoto(e.target.files[0], userId);
    }
  };
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
  );
};
