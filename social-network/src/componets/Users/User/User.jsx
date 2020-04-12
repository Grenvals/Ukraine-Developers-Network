import React from 'react'
import style from './User.module.scss'
import defaultUserPhoto from "../../../assets/images/user-default.svg"
import { NavLink } from 'react-router-dom'

const User = props => {
  return (
    <li className={style.user}>
      <div className={style.preview}>
        <div className={style.photo}>
         <img src={props.user.photos.small != null ? (
          props.user.photos.small
        ) : (
          defaultUserPhoto
        )} alt="users foto" />
        </div>
      </div>
      <div className={style.info}>
        <h3 className={style.name}>{props.user.name}</h3>
        <p className={style.status}>{props.user.status}</p>
      </div>
      <div className={style.profile}>
        <NavLink to={'/profile/' + props.user.id}  className={`${style.button} ${style.button_green} ${style.button_profile}`}> 
        profile
        </NavLink>
       
      </div>
      <div className={style.location}>
        <p className={style.country}>Ukraine</p>
        <p className={style.city}>New York</p>
      </div>
      <div className={style.follow}>
        {props.user.followed ? (
          <button
            className={`${style.button} ${style.button_green}`}
            onClick={() => {
              props.unfollow(props.user.id)
            }}
          >
            follow
          </button>
        ) : (
          <button
            className={style.button}
            onClick={() => {
              props.follow(props.user.id)
            }}
          >
            unfollow
          </button>
        )}
      </div>
    </li>
  )
}

export default User
