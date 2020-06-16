import { HeadImage } from '../common/Head/Head';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Preloader } from '../common/Preloader/Preloader';
import { ProfileForm } from './ProfileForm/ProfileForm';
import React from 'react';
import { StatusForm } from './StatusForm/StatusForm';
import background from '../../assets/images/settings/settings-bg.jpg';
import style from './Settings.module.scss';

const Settings = ({
  profile,
  status,
  updateUserStatus,
  updateUserProfile,
  updateUserPhoto,
}) => {
  if (!profile || !status) {
    return <Preloader />;
  } else {
    const initialData = {
      status: status,
    };
    const handleSubmit = formData => {
      updateUserStatus(formData.status);
    };
    const onProfileSubmit = formData => {
      updateUserProfile(profile.userId, formData);
    };
    return (
      <div className={style.settings}>
        <PerfectScrollbar className={style.settings__scrollbar} component="div">
          <div className={style.settings__wrap}>
            <HeadImage image={background} />
            <StatusForm
              initialValues={initialData}
              onSubmit={handleSubmit}
              photo={profile.photos.large}
              updateUserPhoto={updateUserPhoto}
              userId={profile.userId}
            />
            <ProfileForm initialValues={profile} onSubmit={onProfileSubmit} />
          </div>
        </PerfectScrollbar>
      </div>
    );
  }
};

export { Settings };
