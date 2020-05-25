import React from 'react'
import style from './UserDescription.module.scss'
import cn from 'classnames'

export const UserDescription = ({ profile }) => (
  <div className={`${style.userInfo__description} ${style.description}`}>
    <p className={style.description__about}>
      {profile.aboutMe ? profile.aboutMe : 'Sorry, user didn`t write about...'}{' '}
    </p>
    <div className={style.description__item}>
      Looking for a job:{' '}
      <span
        className={cn(style.description__status, {
          [style.description__status_active]: profile.lookingForAJob === true,
        })}
      >
        {profile.lookingForAJob ? 'true' : 'false'}
      </span>
    </div>
    <div className={style.description__item}>
      Website:
      <a
        href={profile.contacts.website}
        target="blank"
        className={style.description__text}
      >
        {profile.contacts.website ? profile.contacts.website : 'not set'}
      </a>
    </div>
  </div>
)
