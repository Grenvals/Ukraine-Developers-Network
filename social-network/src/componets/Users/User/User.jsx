import React from 'react'
import style from './User.module.scss'

const User = props => {
  return (
    <li className={style.user}>
      <div className={style.preview}>
        <div className={style.photo}>
          <img src={props.user.photoURL} alt="users foto" />
        </div>
      </div>
      <div className={style.info}>
        <h3 className={style.name}>{props.user.fullname}</h3>
        <p className={style.status}>{props.user.status}</p>
      </div>
      <div className={style.location}>
        <p className={style.country}>{props.user.location.country}</p>
        <p className={style.city}>{props.user.location.city}</p>
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
