import React from 'react'
import style from './User.module.scss'
import defaultUserPhoto from '../../../assets/images/user-default.svg'
import userIcon from '../../../assets/images/user-icon.svg'
import { Button, NavLinkButton } from '../../Buttons/Buttons'

const User = props => {
  const follow = () => {
    props.followUser(props.user.id)
  }
  const unfollow = () => {
    props.unfollowUser(props.user.id)
  }
  return (
    <li className={style.user}>
      <div className={style.preview}>
        <div className={style.photo}>
          <img
            src={
              props.user.photos.small != null ? props.user.photos.small : defaultUserPhoto
            }
            alt="users foto"
          />
        </div>
      </div>
      <div className={style.info}>
        <h3 className={style.name}>{props.user.name}</h3>
        <p className={style.status}>{props.user.status}</p>
      </div>
      <div className={style.profile}>
        <NavLinkButton
          name={'Profile'}
          link={'/profile/' + props.user.id}
          icon={userIcon}
        />
      </div>
      <div className={style.location}>
        <p className={style.country}>Ukraine</p>
        <p className={style.city}>New York</p>
      </div>
      <div className={style.follow}>
        {!props.user.followed ? (
          <Button
            name={'Follow'}
            disabled={props.followingInProgress.some(id => id === props.user.id)}
            onClick={follow}
            accent={true}
          />
        ) : (
          <Button
            name={'Unfollow'}
            disabled={props.followingInProgress.some(id => id === props.user.id)}
            onClick={unfollow}
          />
        )}
      </div>
    </li>
  )
}

export default User
