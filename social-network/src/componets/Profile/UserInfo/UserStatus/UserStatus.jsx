import React, { useEffect, useState } from 'react';

import editImg from '../../../../assets/images/profile/edit.svg';
import style from './UserStatus.module.scss';

const UserStatus = props => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateUserStatus(status);
  };

  const onStatusChange = e => {
    setStatus(e.currentTarget.value);
  };
  if (!props.isLoggedUser) {
    return (
      <div className={style.userStatus}>
        <p>{props.status || 'not set'}</p>
      </div>
    );
  }
  return (
    <div className={`${style.userStatus} ${style.userStatus_active}`}>
      {!editMode && (
        <div onClick={activateEditMode} className={style.userStatus__text}>
          <p>{props.status || 'status not set'}</p>
        </div>
      )}
      {editMode ? (
        <div className={style.userStatus__input}>
          <input
            onChange={onStatusChange}
            value={status}
            autoFocus={true}
            onBlur={deactivateEditMode}
            type="text"
          />
        </div>
      ) : (
        <div className={style.userStatus__icon} onClick={activateEditMode}>
          <img src={editImg} alt="edit" />
        </div>
      )}
    </div>
  );
};

export { UserStatus };
