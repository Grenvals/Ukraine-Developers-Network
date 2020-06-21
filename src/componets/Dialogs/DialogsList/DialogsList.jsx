import React, { useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import cn from 'classnames';

import dialogsIcon from '../../../assets/images/dialogs/dialoglist.svg';
import { Head } from '../../common/Head/Head';
import { DialogItem } from './DialogItem/DialogItem';

import style from './DialogsList.module.scss';

const DialogsList = ({ dialogs, getDialogsUsersList }) => {
  useEffect(() => {
    getDialogsUsersList();
  }, [getDialogsUsersList]);

  const [isActive, setIsActive] = useState(false);
  const onHandleClick = () => {
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  const notificationItem = dialogs.map(d => (
    <DialogItem
      key={d.id}
      id={d.id}
      hasNewMessages={d.hasNewMessages}
      userName={d.userName}
      userLogo={d.photos.small}
      newMessagesCount={d.newMessagesCount}
      lastUserActivity={d.lastUserActivityDate}
    />
  ));
  return (
    <div
      className={cn(
        style.dialogs,
        { [style.dialogs_active]: isActive },
        { [style.dialogs_disabled]: !isActive }
      )}>
      <Head title={'Dialogs / Chat'} />
      <div className={style.dialogs__container}>
        <PerfectScrollbar className={style.dialogs__scrollbar} component={'div'}>
          <ul className={style.dialogs__usersList}>{notificationItem}</ul>
        </PerfectScrollbar>
      </div>
      <button
        className={cn(style.dialogs__btn, { [style.dialogs__btn_active]: isActive })}
        onClick={onHandleClick}
        type="button">
        <img src={dialogsIcon} alt="dialogs" />
      </button>
    </div>
  );
};

export { DialogsList };
