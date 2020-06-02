import React, { useEffect } from 'react';

import { DialogItem } from './DialogItem/DialogItem';
import { Head } from '../../common/Head/Head';
import PerfectScrollbar from 'react-perfect-scrollbar';
import style from './DialogsList.module.scss';

export const DialogsList = ({ dialogs, getDialogsUsersList, getDialogMessages }) => {
  useEffect(() => {
    getDialogsUsersList();
  }, [getDialogsUsersList]);
  let notificationItem = dialogs.map(d => (
    <DialogItem
      key={d.id}
      id={d.id}
      hasNewMessages={d.hasNewMessages}
      userName={d.userName}
      userLogo={d.photos.small}
      newMessagesCount={d.newMessagesCount}
      lastUserActivity={d.lastUserActivityDate}
      getDialogMessages={getDialogMessages}
    />
  ));
  return (
    <div className={style.dialogs}>
      <Head title={'Dialogs / Chat'} />
      <div className={style.dialogs__container}>
        <PerfectScrollbar className={style.dialogs__scrollbar} component={'div'}>
          <ul className={style.dialogs__usersList}>{notificationItem}</ul>
        </PerfectScrollbar>
      </div>
    </div>
  );
};
