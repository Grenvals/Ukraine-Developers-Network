import { ContactIcon } from '../../../common/Contacts/Contacts';
import React from 'react';
import cn from 'classnames';
import facebookImg from '../../../../assets/images/contacts/facebook.svg';
import githubImg from '../../../../assets/images/contacts/github.svg';
import instagramImg from '../../../../assets/images/contacts/instagram.svg';
import style from './UserContacts.module.scss';
import twitterImg from '../../../../assets/images/contacts/twitter.svg';
import websiteImg from '../../../../assets/images/contacts/site.svg';

const UserContacts = ({ contacts, className = null }) => {
  return (
    <ul className={cn(style.contacts, { [className]: className !== null })}>
      <ContactIcon name={'facebook'} link={contacts.facebook} icon={facebookImg} />
      <ContactIcon name={'twitter'} link={contacts.twitter} icon={twitterImg} />
      <ContactIcon name={'instagram'} link={contacts.instagram} icon={instagramImg} />
      <ContactIcon name={'github'} link={contacts.github} icon={githubImg} />
      <ContactIcon name={'instagram'} link={contacts.website} icon={websiteImg} />
    </ul>
  );
};

export { UserContacts };
