import React from 'react';
import { useMediaQuery } from 'react-responsive';

import messageIcon from '../../../assets/images/message-white.svg';
import userIcon from '../../../assets/images/user-icon.svg';
import followIcon from '../../../assets/images/users/follow.svg';
import unfollowIcon from '../../../assets/images/users/unfollow.svg';
import { Button, NavLinkButton } from '../../common/Buttons/Buttons';
import { UserPhotoLink } from '../../common/UserFoto/UserFoto';

import style from './User.module.scss';

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
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-device-width: 767.98px)',
  });

  const follow = () => {
    followUser(id);
  };
  const unfollow = () => {
    unfollowUser(id);
  };
  let followName = null;
  if (isTablet) {
    followName = followed ? 'unfollow' : 'follow';
  }
  const handleClick = () => {};
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
        onClick={handleClick}
      />
      <NavLinkButton
        className={style.user__dialog}
        link={'/dialogs/' + id}
        name={isDesktopOrLaptop ? 'Message' : null}
        onClick={startDialog}
        icon={messageIcon}
      />
      <Button
        className={style.user__follow}
        name={followName}
        disabled={followingInProgress.some(userId => userId === id)}
        onClick={followed ? unfollow : follow}
        accent={!followed && true}
        icon={followed ? unfollowIcon : followIcon}
      />
    </li>
  );
};

export { User };
