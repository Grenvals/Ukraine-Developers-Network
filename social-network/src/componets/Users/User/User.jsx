import { Button, NavLinkButton } from '../../common/Buttons/Buttons';

import React from 'react';
import { UserPhotoLink } from '../../common/UserFoto/UserFoto';
import followIcon from '../../../assets/images/users/follow.svg';
import messageIcon from '../../../assets/images/message-white.svg';
import style from './User.module.scss';
import unfollowIcon from '../../../assets/images/users/unfollow.svg';
import userIcon from '../../../assets/images/user-icon.svg';

const User = ({
  id,
  photo,
  name,
  status,
  followed,
  followUser,
  unfollowUser,
  followingInProgress,
  startDialogWithUser,
}) => {
  const follow = () => {
    followUser(id);
  };
  const unfollow = () => {
    unfollowUser(id);
  };
  const onClick = () => {};
  const startDialog = () => {
    startDialogWithUser(id);
  };
  return (
    <li className={style.user}>
      <UserPhotoLink
        className={style.user__logo}
        link={'/profile/' + id}
        photo={photo != null && photo}
      />
      <div className={style.user__info}>
        <h3 className={style.user__name}>{name}</h3>
        <p className={style.user__status}>{status}</p>
      </div>
      <NavLinkButton
        className={style.user__profile}
        link={'/profile/' + id}
        icon={userIcon}
        onClick={onClick}
      />
      <NavLinkButton
        className={style.user__dialog}
        link={'/dialogs/' + id}
        name={'Message'}
        onClick={startDialog}
        icon={messageIcon}
      />
      <Button
        className={style.user__follow}
        name={followed ? 'Unfollow' : 'Follow'}
        disabled={followingInProgress.some(userId => userId === id)}
        onClick={followed ? unfollow : follow}
        accent={!followed && true}
        icon={followed ? unfollowIcon : followIcon}
      />
    </li>
  );
};

export default User;
