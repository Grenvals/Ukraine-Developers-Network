import React, { useState, useEffect } from 'react';
import style from './UserStatus.module.scss';
import editImg from '../../../../assets/images/profile/edit.svg';

export const UserStatus = props => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  let activateEditMode = () => {
    setEditMode(true);
  };
  let deactivateEditMode = () => {
    setEditMode(false);
    props.updateUserStatus(status);
  };

  let onStatusChange = e => {
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
        <div onClick={activateEditMode} className={style.statusText}>
          <p>{props.status || 'status not set'}</p>
        </div>
      )}
      {editMode ? (
        <div className={style.inputBlock}>
          <input
            onChange={onStatusChange}
            value={status}
            autoFocus={true}
            onBlur={deactivateEditMode}
            type="text"
          />
        </div>
      ) : (
        <div className={style.editImg} onClick={activateEditMode}>
          <img src={editImg} alt="edit" />
        </div>
      )}
    </div>
  );
};
