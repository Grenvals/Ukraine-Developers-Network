import React from 'react'
import style from './UserContacts.module.scss'
import facebookImg from '../../../../assets/images/contacts/facebook.svg'
import twitterImg from '../../../../assets/images/contacts/twitter.svg'
import instagramImg from '../../../../assets/images/contacts/instagram.svg'
import githubImg from '../../../../assets/images/contacts/github.svg'
import { ContactIcon } from '../../../common/Contacts/Contacts'
import cn from 'classnames'

export const UserContacts = ({ contacts, className = null }) => {
  return (
    <ul className={cn(style.contacts, { [className]: className !== null })}>
      <ContactIcon name={'facebook'} link={contacts.facebook} icon={facebookImg} />
      <ContactIcon name={'twitter'} link={contacts.twitter} icon={twitterImg} />
      <ContactIcon name={'instagram'} link={contacts.instagram} icon={instagramImg} />
      <ContactIcon name={'github'} link={contacts.github} icon={githubImg} />
      <ContactIcon name={'instagram'} link={contacts.instagram} icon={instagramImg} />
    </ul>
  )
}
