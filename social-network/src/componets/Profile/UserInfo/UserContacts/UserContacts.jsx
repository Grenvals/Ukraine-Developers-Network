import React from 'react'
import style from './UserContacts.module.scss'
import facebookImg from '../../../../assets/images/contacts/facebook.svg'
import twitterImg from '../../../../assets/images/contacts/twitter.svg'
import instagramImg from '../../../../assets/images/contacts/instagram.svg'
import githubImg from '../../../../assets/images/contacts/github.svg'
import { ContactIcon } from '../../../common/Contacts/Contacts'

export const UserContacts = props => {
  return (
    <ul className={style.contacts}>
      <ContactIcon name={'facebook'} link={props.contacts.facebook} icon={facebookImg} />
      <ContactIcon name={'twitter'} link={props.contacts.twitter} icon={twitterImg} />
      <ContactIcon
        name={'instagram'}
        link={props.contacts.instagram}
        icon={instagramImg}
      />
      <ContactIcon name={'github'} link={props.contacts.github} icon={githubImg} />
    </ul>
  )
}
